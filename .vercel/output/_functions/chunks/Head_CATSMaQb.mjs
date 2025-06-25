import { c as createComponent, i as createAstro, j as addAttribute, k as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent } from './astro/server_BiGR1b-8.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/jordankeller/Github/the-okay-lakes/redshift/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<section class="w-screen relative content-center mt-4" data-astro-cid-dmqpwcec> <div class="flex justify-center space-x-8" data-astro-cid-dmqpwcec> <a href="/listen/"${addAttribute(`nav ${currentPath === "/listen/" ? "underline" : ""}`, "class")} data-astro-cid-dmqpwcec>Listen</a> <a href="/lyrics/"${addAttribute(`nav ${currentPath === "/lyrics/" ? "underline" : ""}`, "class")} data-astro-cid-dmqpwcec>Lyrics</a> <a href="/credits/"${addAttribute(`nav ${currentPath === "/credits/" ? "underline" : ""}`, "class")} data-astro-cid-dmqpwcec>Credits</a> </div> </section> `;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/src/components/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Head;
  return renderTemplate`<link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Nav", $$Nav, {})}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${maybeRenderHead()}<section class="content-center my-8"> <div class="flex flex-col justify-start max-w-md min-w-md mx-auto my-auto gap-4"> <img src="/svgs/theokaylakes.svg" alt="The Okay Lakes Logo" class="object-contain flex-1 mx-auto"> <img src="/svgs/redshift.svg" alt="Redshift Logo" class="mx-auto object-contain flex-1"> </div> </section>`;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/src/components/Head.astro", void 0);

export { $$Head as $, $$ClientRouter as a };
