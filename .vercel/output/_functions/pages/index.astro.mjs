/* empty css                                 */
import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from '../chunks/astro/server_BiGR1b-8.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dg-22b-D.mjs';
import { $ as $$Index$1 } from '../chunks/index_CE7GB0vc.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Index$1, {})} ` })} ${maybeRenderHead()}<h1>HELLO HI HELLO HI</h1>`;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/index.astro", void 0);

const $$file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
