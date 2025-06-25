import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Life I'll Leave You",
  "album": "Redshift",
  "image": "/images/song-arts/the-life-ill-leave-you.jpg",
  "track": 5
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
      children: "Do those sirens always blow?\nOr did this time bomb finally explode?\nThey want you all in cities now\nHerded on the coasts\nThe center cannot hold\nAnd you’ll be armed with nothing but\nYour conscience when it goes\nIf you make it out\nYou can stay with me"
    }), "\n", createVNode(_components.p, {
      children: "‘Cuz this ain’t the life I’ll leave you, no no\nThis ain’t the life I’ll leave you, no no\nThis ain’t the life I’ll leave you, no no\nThis ain’t the life I’ll leave\nMmm, no no no"
    }), "\n", createVNode(_components.p, {
      children: "Did those shotguns start at dawn?\nI could’a slept through Stalingrad\nI let the neighbors hunt the land\n‘Cuz I know they’re all men of God\nThe cellar’s stocked for survival\nAnd I’d spend my last days arming for\nA war that I wont fight in\nThere’s a lot that they\nCan take from me, yeah"
    }), "\n", createVNode(_components.p, {
      children: "But that ain’t the life I’ll leave you, no no\nThat ain’t the life I’ll leave you, no no\nThat ain’t the life I’ll leave you, no no\nThat ain’t the life I’ll leave\nMmm, no no no\nYou’re hardly here when you’re home\nIt’s like you’re living in retreat\nLike you see some threat I don’t\nBut I’m not afraid for my own life\nNo…"
    }), "\n", createVNode(_components.p, {
      children: "I’m afraid for the life I’ll leave you\nI’m afraid for the life I’ll leave you\nMmm, yes yes"
    }), "\n", createVNode(_components.p, {
      children: "‘Cuz you’ll be in your bunker too someday\nYeah, you’ll be in your bunker too someday\nOh yeah, you’ll be in your bunker too someday\nYeah yeah, you’ll be in your bunker too someday\nSomeday!\nSomeday!"
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

const url = "src/content/lyrics/the-life-ill-leave-you.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-life-ill-leave-you.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-life-ill-leave-you.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
