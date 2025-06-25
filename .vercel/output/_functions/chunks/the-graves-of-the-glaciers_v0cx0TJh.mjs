import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "(The Graves of the Glaciers)",
  "album": "Redshift",
  "image": "/images/song-arts/the-graves-of-the-glaciers.jpg",
  "track": 11
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/lyrics/the-graves-of-the-glaciers.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-graves-of-the-glaciers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-graves-of-the-glaciers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
