/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BiGR1b-8.mjs';
import 'kleur/colors';
import { $ as $$Head } from '../chunks/Head_CATSMaQb.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dg-22b-D.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "Listen", "description": "Listen to Redshift by The Okay Lakes" })} ${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<iframe class="mx-auto" style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=1797150013/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe> <section class="container mx-auto my-10 p-6 text-center w-full"> <div class="flex flex-col gap-4 w-96 mx-auto"> <!-- Spotify Button --> <a href="https://open.spotify.com/album/7GT5DxaF3ajXzKgt5Z78cA?si=lFTBAoBDTLqkkjvRiN4UjQ" target="_blank" rel="noopener noreferrer" class="btn bg-green-500 hover:bg-green-600 text-white">
Spotify
</a> <!-- Apple Music Button --> <a href="https://music.apple.com/us/album/redshift/1667960311" target="_blank" rel="noopener noreferrer" class="btn bg-red-500 hover:bg-red-600 text-white">
Apple Music
</a> <!-- YouTube Music Button --> <a href="https://music.youtube.com/playlist?list=OLAK5uy_nK16GpIciggppL8FNzzLVqkA2DKCi1JhM&feature=shared" target="_blank" rel="noopener noreferrer" class="btn bg-yellow-500 hover:bg-yellow-600 text-white">
YouTube Music
</a> <!-- Bandcamp Button --> <a href="https://theokaylakes.bandcamp.com/album/redshift" target="_blank" rel="noopener noreferrer" class="btn bg-blue-500 hover:bg-blue-600 text-white">
Bandcamp
</a> </div> </section> ` })}`;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/listen/index.astro", void 0);

const $$file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/listen/index.astro";
const $$url = "/listen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
