import { docs } from './docs';

const markdownModules = import.meta.glob('../content/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

const markdownIdModules = import.meta.glob('../content/id/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

function slugFromPath(path: string): string {
  return path.split('/').pop()?.replace(/\.md$/, '') ?? path;
}

export const contentBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(markdownModules).map(([path, markdown]) => [slugFromPath(path), markdown])
);

export const contentIdBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(markdownIdModules).map(([path, markdown]) => [slugFromPath(path), markdown])
);

export const contentSlugs = Object.keys(contentBySlug).sort();
export const docSlugs = docs.map((doc) => doc.slug);
