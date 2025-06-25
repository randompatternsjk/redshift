import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cracks",
  "album": "Redshift",
  "image": "/images/song-arts/cracks.jpg",
  "track": 3
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "All the trees flail their skeleton hands\nWarning us to double back\nBut we trudge through the boot prints\nStrangers cut through this\nAnd make it out in someone else’s tracks\nGentler weather held you together\nBut this rough stretch rends your seams\nThe sidewalks go jagged\nAnd the highways fracture\nIt’s hard to stay and harder still to leave"
    }), "\n", createVNode(_components.p, {
      children: "Cold creeps in the cracks\nThe delicate can’t last"
    }), "\n", createVNode(_components.p, {
      children: "And the ice is gonna try to break us\nThe ice is gonna try to break us up\nYeah, the ice is gonna try to break us\nThe ice is gonna try to break us up"
    }), "\n", createVNode(_components.p, {
      children: ["Seven months ago, you were invincible\nAnd your misery took so little strength to conceal", createVNode(_components.br, {}), "\nBut the winds found the weakness\nAt your collar and sleeves\nIn the promises you’re keeping\nIn your vow not to leave\nSo as you shatter to pieces\nFall into me\nI could hold you all together till you heal"]
    }), "\n", createVNode(_components.p, {
      children: "Cold creeps in the cracks\nAnd it widens them and weakens everything"
    }), "\n", createVNode(_components.p, {
      children: "And the ice is gonna try to break us\nThe ice is gonna try to break us up\nYeah, the ice is gonna try to break us\nThe ice is gonna try to break us up"
    }), "\n", createVNode(_components.p, {
      children: "The ice is gonna try to break us (Everybody falls apart here)\nThe ice is gonna try to break us up (Everything just falls apart here)\nYeah, the ice is gonna try to break us (I was gonna try to heal ya)\nThe ice is gonna try to break us up (I was gonna try to heal ya)"
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

const url = "src/content/lyrics/cracks.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/cracks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/cracks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
