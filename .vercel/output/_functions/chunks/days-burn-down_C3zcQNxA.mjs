import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Days Burn Down",
  "album": "Redshift",
  "image": "/images/song-arts/days-burn-down.jpg",
  "track": 6
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
      children: "I hear the drum of a desperate moth\nCaught in the screen and glass\nThe streetlights reach in through the curtain cloth\nStretching the shadows cast"
    }), "\n", createVNode(_components.p, {
      children: "We pick ourselves from the city’s teeth\nThrow some worn-out record on\nAnd each of our breaths is deafening\nIn the silence between each song"
    }), "\n", createVNode(_components.p, {
      children: "Honey, don’t love me please\nI’m not the man I thought I’d be"
    }), "\n", createVNode(_components.p, {
      children: "You say “Sometimes it’s like I’m a guest\n‘In hell everything is fine’”\nAnd the words are like stones through a hornet’s nest\n“There’s worse things to lose than time”"
    }), "\n", createVNode(_components.p, {
      children: "Honey, don’t: Love me please\nI’m not the man that I wanna be"
    }), "\n", createVNode(_components.p, {
      children: "Oh, and days burn down\nA pile of ashes\nOn the ground\nAnd seasons that we\nWait it out\nGo passing in a breeze\nDays burn down\nAnd all the time you\nSwore wont count\nIt passes in a\nBreeze and now\nIt’s you and i alone"
    }), "\n", createVNode(_components.p, {
      children: "You say “I’d murder the fuckers\nI’d wring all their god-damned throats\nWe’ll never find cover\nBut the demons aren’t yours alone”"
    }), "\n", createVNode(_components.p, {
      children: "No, no, no, no\nNo, no, no, mmm"
    }), "\n", createVNode(_components.p, {
      children: "So let ‘em out,\nLet ‘em out on me\nLet ‘em out”"
    }), "\n", createVNode(_components.p, {
      children: "Another night in our pleasant hell\nA swarm starts rising from my chest"
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

const url = "src/content/lyrics/days-burn-down.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/days-burn-down.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/days-burn-down.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
