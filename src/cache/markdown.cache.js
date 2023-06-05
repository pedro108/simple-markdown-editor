
const CACHE_KEY = 'markdown-cache';

export function getMarkdownCache() {
  return localStorage.getItem(CACHE_KEY) || "";
}

export function setMarkdownCache(value) {
  localStorage.setItem(CACHE_KEY, value);
}
