import 'kleur/colors';
import { l as decodeKey } from './chunks/astro/server_BiGR1b-8.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DXFvFCwr.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jordankeller/Github/the-okay-lakes/redshift/","cacheDir":"file:///Users/jordankeller/Github/the-okay-lakes/redshift/node_modules/.astro/","outDir":"file:///Users/jordankeller/Github/the-okay-lakes/redshift/dist/","srcDir":"file:///Users/jordankeller/Github/the-okay-lakes/redshift/src/","publicDir":"file:///Users/jordankeller/Github/the-okay-lakes/redshift/public/","buildClientDir":"file:///Users/jordankeller/Github/the-okay-lakes/redshift/dist/client/","buildServerDir":"file:///Users/jordankeller/Github/the-okay-lakes/redshift/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.WPaQGCId.css"},{"type":"external","src":"/_astro/index.DrCNJfZ8.css"}],"routeData":{"route":"/credits","isIndex":true,"type":"page","pattern":"^\\/credits\\/?$","segments":[[{"content":"credits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/credits/index.astro","pathname":"/credits","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.WPaQGCId.css"},{"type":"external","src":"/_astro/index.DrCNJfZ8.css"}],"routeData":{"route":"/landing/hero","isIndex":false,"type":"page","pattern":"^\\/landing\\/Hero\\/?$","segments":[[{"content":"landing","dynamic":false,"spread":false}],[{"content":"Hero","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/Hero.astro","pathname":"/landing/Hero","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.WPaQGCId.css"},{"type":"external","src":"/_astro/index.DrCNJfZ8.css"}],"routeData":{"route":"/landing","isIndex":true,"type":"page","pattern":"^\\/landing\\/?$","segments":[[{"content":"landing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/index.astro","pathname":"/landing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.WPaQGCId.css"},{"type":"external","src":"/_astro/index.DrCNJfZ8.css"}],"routeData":{"route":"/listen","isIndex":true,"type":"page","pattern":"^\\/listen\\/?$","segments":[[{"content":"listen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/listen/index.astro","pathname":"/listen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.WPaQGCId.css"},{"type":"external","src":"/_astro/index.DrCNJfZ8.css"}],"routeData":{"route":"/lyrics","isIndex":true,"type":"page","pattern":"^\\/lyrics\\/?$","segments":[[{"content":"lyrics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lyrics/index.astro","pathname":"/lyrics","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.WPaQGCId.css"},{"type":"external","src":"/_astro/index.DrCNJfZ8.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/jordankeller/Github/the-okay-lakes/redshift/src/components/LyricsCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/lyrics/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/lyrics/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/credits/index.astro",{"propagation":"none","containsHead":true}],["/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jordankeller/Github/the-okay-lakes/redshift/src/pages/listen/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/landing/index@_@astro":"pages/landing.astro.mjs","\u0000@astro-page:src/pages/credits/index@_@astro":"pages/credits.astro.mjs","\u0000@astro-page:src/pages/landing/Hero@_@astro":"pages/landing/hero.astro.mjs","\u0000@astro-page:src/pages/listen/index@_@astro":"pages/listen.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/lyrics/index@_@astro":"pages/lyrics.astro.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CoEbPshW.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/.astro/content-modules.mjs":"chunks/content-modules_DBTBPptv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DfL-IDK4.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-trusty-lie.mdx?astroPropagatedAssets":"chunks/a-trusty-lie_I--sxjOH.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/cracks.mdx?astroPropagatedAssets":"chunks/cracks_DhsAf_U_.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-handful-of-mud.mdx?astroPropagatedAssets":"chunks/a-handful-of-mud_Dyu_JaXr.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-cross-on-a-gravel-road.mdx?astroPropagatedAssets":"chunks/a-cross-on-a-gravel-road_BPMuCjKG.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/days-burn-down.mdx?astroPropagatedAssets":"chunks/days-burn-down_DdweY91a.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/hallelujah-clouds.mdx?astroPropagatedAssets":"chunks/hallelujah-clouds_BTsPwPBy.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/old-bruise.mdx?astroPropagatedAssets":"chunks/old-bruise_D66TNA1G.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-graves-of-the-glaciers.mdx?astroPropagatedAssets":"chunks/the-graves-of-the-glaciers_DnVXL3Xa.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/sleeveless-hearts.mdx?astroPropagatedAssets":"chunks/sleeveless-hearts_Dd5t5tL0.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/redshift.mdx?astroPropagatedAssets":"chunks/redshift_CbF-PzCO.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-life-ill-leave-you.mdx?astroPropagatedAssets":"chunks/the-life-ill-leave-you_CfhpaNE-.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/till-the-endtime-begins.mdx?astroPropagatedAssets":"chunks/till-the-endtime-begins_CGPql4JC.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-trusty-lie.mdx":"chunks/a-trusty-lie_8k9bZKdG.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/cracks.mdx":"chunks/cracks_CdkosLIv.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-handful-of-mud.mdx":"chunks/a-handful-of-mud_66AIKXO6.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/a-cross-on-a-gravel-road.mdx":"chunks/a-cross-on-a-gravel-road_BY8xqjfq.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/days-burn-down.mdx":"chunks/days-burn-down_C3zcQNxA.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/hallelujah-clouds.mdx":"chunks/hallelujah-clouds_Dvs-fBBp.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/old-bruise.mdx":"chunks/old-bruise_DCZDoeW6.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-graves-of-the-glaciers.mdx":"chunks/the-graves-of-the-glaciers_v0cx0TJh.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/sleeveless-hearts.mdx":"chunks/sleeveless-hearts_BWMN5ZoD.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/redshift.mdx":"chunks/redshift_BGWie8WW.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/the-life-ill-leave-you.mdx":"chunks/the-life-ill-leave-you_9tGQzBR5.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/src/content/lyrics/till-the-endtime-begins.mdx":"chunks/till-the-endtime-begins_CtTILFTG.mjs","\u0000@astrojs-manifest":"manifest_DmRWPZTl.mjs","/Users/jordankeller/Github/the-okay-lakes/redshift/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DrCNJfZ8.css","/_astro/index.WPaQGCId.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/svgs/cd.svg","/svgs/redshift.svg","/svgs/theokaylakes.svg","/images/layout_bg.jpg","/images/redshift_album_art.webp","/images/redshift_bg.jpg","/images/song-arts/a-cross-on-a-gravel-road.jpg","/images/song-arts/a-handful-of-mud.jpg","/images/song-arts/a-trusty-lie.jpg","/images/song-arts/cracks.jpg","/images/song-arts/days-burn-down.jpg","/images/song-arts/hallelujah-clouds.jpg","/images/song-arts/old-bruise.jpg","/images/song-arts/redshift.jpg","/images/song-arts/sleeveless-hearts.jpg","/images/song-arts/the-graves-of-the-glaciers.jpg","/images/song-arts/the-life-ill-leave-you.jpg","/images/song-arts/till-the-endtime-begins.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"wjjw0WOMsiYIurRSbs7vX1MITh1Ayr/4QMcD98Mi1NU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
