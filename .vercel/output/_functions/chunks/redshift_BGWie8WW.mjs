import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Redshift",
  "album": "Redshift",
  "image": "/images/song-arts/redshift.jpg",
  "track": 7
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
      children: "It’s the 42nd parallel\nBut half of this bar\nThey talk like they’re from somewhere else\nWith a fake southern drawl\nIt’s like I turned the AM dial\nSliding through to get a beer\nI’ll stick around a little while\nBut I don’t wanna be long here"
    }), "\n", createVNode(_components.p, {
      children: "They fly the rebel flag in Michigan\nThey’re born with the right\nGrandkids of militiamen\nBred for the fight\nI hear these villains playing victim\nThough they’re falling on deaf ears\nThe same words sounded different\nBack when I belonged here\nThose same words sounded different\nBack when I belonged here"
    }), "\n", createVNode(_components.p, {
      children: "I knew these men as kids\nWhen I was like ‘em myself\nRighteous with an ignorance\nUnknown to itself\nBut gravity took over\nI saw a world beyond this sphere\nIf it’d pulled me closer\nI still might belong here"
    }), "\n", createVNode(_components.p, {
      children: "Instead, I came back every Christmas\nBit my tongue till it bled\nFelt my closest grow distant\nAs their blue blood went red\nFelt ‘em recognize a stranger\nToo far gone to draw in near\nDidn’t notice I was changing\nTill I didn’t belong here\nDidn’t notice I was changing\nTill I didn’t belong here"
    }), "\n", createVNode(_components.p, {
      children: "Now, I’m drunk under the glimmer\nOf a thousand more stars\nAnd they’ll go red as they grow dimmer\nTill they’re lost to the dark\nI’ll be restless in my searching\nAs heaven disappears\nMan, I used to be so certain\nBack when I belonged here"
    }), "\n", createVNode(_components.p, {
      children: "So here’s to every nowhere village\nTo the dark-hidden stars\nTo the places god no longer visits\nOr sends his regards\nI left here for a reason\nWay back then it wasn’t clear\nWith some distance now I see it\nI don’t wanna belong here\nWith some distance now I see it\nI don’t wanna belong here"
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

const url = "src/content/lyrics/redshift.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/redshift.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/redshift.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
