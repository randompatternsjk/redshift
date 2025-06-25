import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hallelujah Clouds",
  "album": "Redshift",
  "image": "/images/song-arts/hallelujah-clouds.jpg",
  "track": 8
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
      children: "Let a light down through the clouds\nI swore this storm would break by now\nIt billows and it drums\nBut nothing ever comes"
    }), "\n", createVNode(_components.p, {
      children: "And my heart is wearing out\nBeaten like a cornered mouse\nHoping for a sign\nA peace I just can’t find"
    }), "\n", createVNode(_components.p, {
      children: "What if nothing ever comes\nAnd everything is never enough\nTo raise me from despair\nThe weight when nothing’s there?"
    }), "\n", createVNode(_components.p, {
      children: "But still I wait my turn\nAs if mercy might be earned\nAnd weren’t some random pattern\nIn the sky\nAnd still I sing this prayer\nThough I know there’s nothing there\nThere’s a light I’ve felt\nBut every time it fell\nMy chin was tilted down"
    }), "\n", createVNode(_components.p, {
      children: "There must be something here…\nThere must be something here…\nThere must be something here…"
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

const url = "src/content/lyrics/hallelujah-clouds.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/hallelujah-clouds.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/hallelujah-clouds.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
