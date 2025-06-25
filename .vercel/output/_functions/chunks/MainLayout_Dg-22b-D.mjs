import { c as createComponent, r as renderComponent, b as renderHead, d as renderSlot, a as renderTemplate } from './astro/server_BiGR1b-8.mjs';
import 'kleur/colors';
/* empty css                         */
import { a as $$ClientRouter } from './Head_CATSMaQb.mjs';

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<link rel="preload" href="/images/layout_bg.jpg" as="image"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Redshift - The Okay Lakes</title>${renderHead()}</head> <body class="min-h-screen relative bg-black"> <div class="fixed inset-0 -z-10 bg-cover bg-center opacity-70" style="background-image: url('/images/layout_bg.jpg');"></div> <main class="w-auto mx-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
