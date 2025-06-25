import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Old Bruise",
  "album": "Redshift",
  "image": "/images/song-arts/old-bruise.jpg",
  "track": 9
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
      children: "Your uncle’s on his shit again\nFour fingers of Midleton\nNursing all his lone regrets\nLaughing off his eulogy\nThat all the fools he used to be\nAnd all the men he might have been\nWound up him instead"
    }), "\n", createVNode(_components.p, {
      children: "What will you have when you’re looking back\nOnce what’s ahead is the distant past\nAnd all of the life that you left to chance\nWastes away?\nWastes away?"
    }), "\n", createVNode(_components.p, {
      children: "Sipping something on the rocks\nSpinning on a moonlit dock\nNumb as an old bruise\nI’m poring over everything\nI got regrets ahead of me\nBut I’m wondering which ones I’ll choose\nAnd which choose me instead"
    }), "\n", createVNode(_components.p, {
      children: "What will I have when I’m looking back?\nOnce what’s ahead is the distant past\nThe sum of a life that was left to chance\nWhat will I have?\nMan, I don’t know, but"
    }), "\n", createVNode(_components.p, {
      children: "I don’t want to waste away, no\nI don’t want to waste away, no\nI don’t want to waste away, no\nI don’t want to waste away\nTo waste away anymore"
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

const url = "src/content/lyrics/old-bruise.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/old-bruise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/old-bruise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
