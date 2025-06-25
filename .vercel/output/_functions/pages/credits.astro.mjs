/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BiGR1b-8.mjs';
import 'kleur/colors';
import { $ as $$Head } from '../chunks/Head_CATSMaQb.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dg-22b-D.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Head", $$Head, { "title": "Credits", "description": "Credits for Redshift by The Okay Lakes" })} ${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col items-center justify-center h-full"> <div class="my-40 mx-auto backdrop-blur-md shadow-moonglow border-2 border-white max-w-4xl justify-middle text-sm text-cyan-100 font-garamond text-balanced p-6"> <p>Music, Lyrics & Arrangements: Jordan Keller
<br>Vocals, Guitars, Bass, Piano, Synth, Harmonica: Jordan Keller
<br>Drums, Auxiliary Percussion, Background Vocals: Ryan Birkett
<br>Background Vocals on Tracks 1, 2, 6, 8, 9, 10, 12: Makena Hartlin
<br>Background Vocals on Tracks 3, 5 & 12: Megan Cox
<br>Cello: Lewis Rawlinson
<br>Viola & Violin: Kristi Rawlinson
<br>String Arrangements: Lewis Rawlinson
<br> <br>Original Artwork: David Bez
<br>Artwork Photography: Odd Commodity
<br>Recording & Mastering Engineer: James Scott
<br>Mixing Engineer: Grant Cornish
<br>Additional Engineering: Alex Dempsey
<br>Producer: Jordan Keller
<br>Assistant Producers: Ryan Birkett & James Scott
<br> <br>
Recorded March 2018–April 2022 at Populist Studios in Wheaton, Illinois & Shirk Studios in Chicago, Illinois.

Additional recording at Halo Studios in Nashville. Elements from recordings in a bedroom studio in Lincoln Square circa 2013, and on a living-room couch in Humboldt Park circa 2021. Recording of wine glasses filled with water circa 2006 in southwest Michigan.
</p><p>
Released February 23, 2023</p> </div> <p class="text-center"><a href="mailto:jordan@theokaylakes.com">Hi.</a></p> </section>` })}`;
}, "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/credits/index.astro", void 0);

const $$file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/credits/index.astro";
const $$url = "/credits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
