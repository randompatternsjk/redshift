/* empty css                                    */
import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from '../../chunks/astro/server_BiGR1b-8.mjs';
import 'kleur/colors';
import { $ as $$Head } from '../../chunks/Head_CATSMaQb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "Redshift by The Okay Lakes", "description": "An album for moonsilvered drives on the patchily paved backroads of Michigan." })} ${maybeRenderHead()}<section class="my-auto min-h-full max-h-full gap-4 align-top border-test border-2"> <div class="flex items-start w-screen"> <img src="/images/redshift_album_art.webp" alt="Album Art" class="lg:max-w-lg lg:max-h-lg md:max-h-1/3 object-cover mx-auto shadow-moonglow"> </div> </section>`;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/landing/Hero.astro", void 0);

const $$file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/landing/Hero.astro";
const $$url = "/landing/Hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
