import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_J1MitLyc.mjs';
import { manifest } from './manifest_CStN4GGl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/credits.astro.mjs');
const _page2 = () => import('./pages/landing/hero.astro.mjs');
const _page3 = () => import('./pages/landing.astro.mjs');
const _page4 = () => import('./pages/listen.astro.mjs');
const _page5 = () => import('./pages/lyrics.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/credits/index.astro", _page1],
    ["src/pages/landing/Hero.astro", _page2],
    ["src/pages/landing/index.astro", _page3],
    ["src/pages/listen/index.astro", _page4],
    ["src/pages/lyrics/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3f6ad941-1eae-47e0-ba7d-a40d28e20266",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
