import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sleeveless Hearts",
  "album": "Redshift",
  "image": "/images/song-arts/sleeveless-hearts.jpg",
  "track": 2
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
      children: "your sleeveless heart\nit starts its fire for the night\nkindles its conviction with some lines\nfrom books you’ve barely put a crease in\nyou’re in the dark\nand all lit up on your father’s gin\nyou nihilist, you feel no consequence\nof needing nothing to believe in"
    }), "\n", createVNode(_components.p, {
      children: "born again… again\nyou got a soul to sell\nyou’re so certain when\nit comes from someone else\nyes, and you’ll defend\nevery single part\nscreaming like you mean it\nfrom your sleeveless heart"
    }), "\n", createVNode(_components.p, {
      children: "you sleep past noon\nand wake with smoke still in your head\nthe embers cool\nthose revelations left you cold again\nyou’re so desperate to believe\nin yourself or anything—anything at all\nbut now they sound so hollow like in an empty cathedral hall\nthe echoes of your own voice screaming"
    }), "\n", createVNode(_components.p, {
      children: "born again… again\ngot no soul to sell\nwhen your sermon ends\nyou’re orphaned to yourself\nnothing to defend\nnothing to impart\nnothing but the heat\nof a sleeveless heart"
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

const url = "src/content/lyrics/sleeveless-hearts.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/sleeveless-hearts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/sleeveless-hearts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
