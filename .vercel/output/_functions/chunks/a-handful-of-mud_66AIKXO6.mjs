import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "A Handful of Mud",
  "album": "Redshift",
  "image": "/images/song-arts/a-handful-of-mud.jpg",
  "track": 12
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
      children: "So\nBefore we go\nThere’s something you ought to know\nThere are bones\nIn the shipwrecks below\nHolding their dying pose\nAnd they went\nClawing for breath\nClinging to hope that\nThey would make it"
    }), "\n", createVNode(_components.p, {
      children: "Out\nMmm\nOut"
    }), "\n", createVNode(_components.p, {
      children: "And when\nThe panic sets in\nAnd your body betrays you\nYour screams won’t make a sound\nYou gotta kick like hell\nAnd save yourself somehow\nKnowing you’ll drown\nClinging to hope\nThat you might make it"
    }), "\n", createVNode(_components.p, {
      children: "Out\nOut\nOut\nOhh…"
    }), "\n", createVNode(_components.p, {
      children: "And if\nYou kick till you hit\nGrab a handful of mud\nTo prove you made it\nDown"
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

const url = "src/content/lyrics/a-handful-of-mud.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-handful-of-mud.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-handful-of-mud.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
