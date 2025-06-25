import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "A Trusty Lie",
  "album": "Redshift",
  "image": "/images/song-arts/a-trusty-lie.jpg",
  "track": 4
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
      children: "The ninth drink delivers\nThe lines you’ve prewritten\nAnd a voice like yours admits no wrong\nI swirl the ice inside my glass\nDrowning out the very last words\nI should say"
    }), "\n", createVNode(_components.p, {
      children: "I guess that\nEverybody’s got a trusty lie they tell\nWe fool ourselves with our own sleight of hand\nEverybody’s got a trusty lie they tell to themselves\nKeep it in your head\nCareful now, don’t let it wriggle out"
    }), "\n", createVNode(_components.p, {
      children: "One sincere sentence\nAnd six years is ended\nInstead my voice sounds strange when I speak to you\nHow’d we wind up here?\nWhy do I stay?\nRepeat it one last time: “It’s just for one more day”"
    }), "\n", createVNode(_components.p, {
      children: "‘Cuz everybody’s got a trusty lie they tell\nWe fool ourselves with our own sleight of hand\nEverybody’s got a trusty lie they keep to themselves\nIt sounds right your head\nCareful now…"
    }), "\n", createVNode(_components.p, {
      children: "Oh!\nIf I met you here tonight\nFor the first time\nI’d run the other way\nOh!\nThat’s a good one!"
    }), "\n", createVNode(_components.p, {
      children: "Everybody’s got a trusty lie they tell to themselves\nIt’s safe inside your head\nSo careful now…\nCareful now…\nCareful now…\nDon’t let it…\nWriggle out"
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

const url = "src/content/lyrics/a-trusty-lie.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-trusty-lie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-trusty-lie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
