// Prefix an internal path with the configured `base` so links work both
// locally and under the GitHub Pages subpath (e.g. /open_diary/...).
export function url(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}` || "/";
}
