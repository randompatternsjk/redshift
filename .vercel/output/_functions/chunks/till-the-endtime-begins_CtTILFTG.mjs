import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Till the End Time Begins",
  "album": "Redshift",
  "image": "/images/song-arts/till-the-endtime-begins.jpg",
  "track": 10
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Blue\nBleeds through the blinds\nAnother new year\nThe same old lang synes\nCome…\nCome…"
    }), "\n", createVNode(_components.p, {
      children: "I saved your birthday cards\n“Your twenties,” you wrote\n“Are gonna be hard”\nBut there’s empty fifths in your trash\nAnd there’s questions that I’m\nToo terrified to ask\nYeah…"
    }), "\n", createVNode(_components.p, {
      children: "Feel the harsh light\nOf the red morning sun\nYou can wait your whole life\nFor an answer that won’t come"
    }), "\n", createVNode(_components.p, {
      children: "But if the chyrons start\nI hope that you’re walking in a field,\nCounting stars\nNone of this Hemingway crap\nJust running the dog through the\nTall hissing grass\nYou could stock your shelter\nTill the big one hits\nHow long do you figure an apocalypse is?\nAnd what’ll you do till then?\nTill the end time begins?\nTill the end time begins?"
    }), "\n", createVNode(_components.p, {
      children: "Why’d you hunker\nDown there on your own?\nFighting demons\nLike they’re yours alone?\n‘Cuz if you believe\nThere’s a shred of a chance\nWe’re not doomed\nStop saving\nYour soul and\nPut the damned thing to use"
    }), "\n", createVNode(_components.p, {
      children: "‘Cuz yes I promise I’m a lot like you\nI’ve never been so sure of our certain doom\nBut what do we do till then?\nTill the end time begins?\nTill the end time begins?"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/lyrics/till-the-endtime-begins.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/till-the-endtime-begins.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/till-the-endtime-begins.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
