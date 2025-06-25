import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BiGR1b-8.mjs';
import 'clsx';

const frontmatter = {
  "title": "A Cross on a Gravel Road",
  "album": "Redshift",
  "image": "/images/song-arts/a-cross-on-a-gravel-road.jpg",
  "track": 1
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
      children: ["I said, “Elizabeth, I know\nYou can’t wait to get out of here", createVNode(_components.br, {}), "\nBut I bet you’ll look back when you’re leaving”", createVNode(_components.br, {}), "\nWe were the lone lights on the road", createVNode(_components.br, {}), "\nDrifting over county lines", createVNode(_components.br, {}), "\nA bottle at our feet\nShe said, “I know this place too well\nTo lose myself\nAnd I just wanna lose myself again”\nAnd “we could die tonight\nBut there’s thousands yet ahead and I…\nI can’t spend ‘em here”"]
    }), "\n", createVNode(_components.p, {
      children: "And I said,\n“If you end up wrecking all alone\nSo far from your name you can’t be found\nAnd stranded like a cross on a gravel road\nWho’d be the one to bring you flowers?\nWho’d be the one to bring you flowers?”"
    }), "\n", createVNode(_components.p, {
      children: "I said, “Elizabeth, there is a grace\nIn dying in the very place\nYou were born”\nIn the dashboard glow\nI swore I saw her eyes roll\nOr stow away a tear\nI said, “I know you way too well\nYou’ll never really lose yourself\nI bet we never get to lose ourselves again”\nShe said “Your love is setting slow\nLike concrete around my bones\nI can’t end up here”"
    }), "\n", createVNode(_components.p, {
      children: "But if she ends up wrecking when she goes\nSo far from the home where she was bound\nStuck, standing like a cross on a gravel road\nI will be the one to bring her flowers\nI will be the one to bring her flowers\nI will be the one to bring her flowers"
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

const url = "src/content/lyrics/a-cross-on-a-gravel-road.mdx";
const file = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-cross-on-a-gravel-road.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-cross-on-a-gravel-road.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
