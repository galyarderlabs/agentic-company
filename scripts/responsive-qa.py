from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:8788/"
OUT = Path("/tmp/agentic-company-stack-qa")
OUT.mkdir(parents=True, exist_ok=True)

viewports = [
    (1440, 1000, "desktop-1440"),
    (1024, 900, "tablet-1024"),
    (640, 900, "mobile-640"),
    (390, 844, "mobile-390"),
]

routes = [
    ("/", "home"),
    ("/docs/hermes-setup/", "runtime"),
    ("/docs/full-setup-playbook/", "playbook"),
]

failures = []
report = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for width, height, vp_name in viewports:
        for path, route_name in routes:
            page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
            errors = []
            page.on("console", lambda msg, errors=errors: errors.append(f"console:{msg.type}:{msg.text}") if msg.type in ("error", "warning") else None)
            page.on("pageerror", lambda exc, errors=errors: errors.append(f"pageerror:{exc}"))
            page.goto(URL.rstrip("/") + path, wait_until="networkidle")
            page.screenshot(path=str(OUT / f"{route_name}-{vp_name}.png"), full_page=True)
            metrics = page.evaluate("""
            () => {
              const doc = document.documentElement;
              const body = document.body;
              const selectors = ['header', 'nav', 'main', 'h1', '.hero', '.nav-links', '.doc-shell', '.doc-content', 'table'];
              const boxes = selectors.map(sel => {
                const el = document.querySelector(sel);
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return { selector: sel, x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
              }).filter(Boolean);
              const overflowEls = [...document.querySelectorAll('body *')].map(el => {
                const r = el.getBoundingClientRect();
                const cs = getComputedStyle(el);
                return {
                  tag: el.tagName.toLowerCase(),
                  cls: el.className && typeof el.className === 'string' ? el.className.slice(0, 80) : '',
                  text: (el.innerText || el.textContent || '').trim().slice(0, 80),
                  x: r.x,
                  right: r.right,
                  width: r.width,
                  overflowX: cs.overflowX,
                };
              }).filter(item => item.width > 1 && item.right > doc.clientWidth + 1 && item.overflowX !== 'hidden');
              return {
                title: document.title,
                viewport: { width: innerWidth, height: innerHeight },
                scrollWidth: doc.scrollWidth,
                clientWidth: doc.clientWidth,
                bodyScrollWidth: body.scrollWidth,
                overflow: doc.scrollWidth - doc.clientWidth,
                h1: document.querySelector('h1')?.innerText || '',
                boxes,
                overflowEls: overflowEls.slice(0, 12),
              };
            }
            """)
            status = "PASS"
            reasons = []
            if metrics["overflow"] > 1:
                status = "FAIL"
                reasons.append(f"horizontal overflow {metrics['overflow']}px")
            if errors:
                status = "FAIL"
                reasons.append("console/page errors")
            item = {"route": path, "viewport": vp_name, "status": status, "reasons": reasons, "metrics": metrics, "errors": errors[:10], "screenshot": str(OUT / f"{route_name}-{vp_name}.png")}
            report.append(item)
            if status == "FAIL":
                failures.append(item)
            page.close()
    browser.close()

for item in report:
    m = item['metrics']
    print(f"{item['status']} {item['route']} {item['viewport']} scrollWidth={m['scrollWidth']} clientWidth={m['clientWidth']} overflow={m['overflow']} screenshot={item['screenshot']}")
    if item['reasons']:
        print("  reasons:", "; ".join(item['reasons']))
    if item['errors']:
        for e in item['errors'][:5]:
            print("  ", e)
    if m['overflowEls']:
        print("  overflowEls:")
        for el in m['overflowEls'][:3]:
            print("   ", el)

if failures:
    raise SystemExit(1)
