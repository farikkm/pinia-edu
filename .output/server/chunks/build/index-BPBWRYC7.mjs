import { _ as _sfc_main$1, a as __nuxt_component_0 } from './Loader-DlEnghYj.mjs';
import { u as useHead } from './server.mjs';
import { u as useMovieStore } from './index-Bpep4gZt.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import './nuxt-link-3PxKSZG8.mjs';
import './Icon-B98aE4wR.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-DmJTZe-0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Main Page | farikk's Cinema"
    });
    const movieStore = useMovieStore();
    setTimeout(() => {
      movieStore.loader = true;
    }, 700);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Movie = _sfc_main$1;
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper flex flex-col justify-center items-center" }, _attrs))}><div class="page">`);
      if (unref(movieStore).watchedMovies.length) {
        _push(`<div><h2 class="title mt-4 text-3xl text-center">Watched movies</h2><div class="movies-watched"><!--[-->`);
        ssrRenderList(unref(movieStore).watchedMovies, (movie) => {
          _push(ssrRenderComponent(_component_Movie, {
            movie,
            key: movie.id
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(movieStore).movies) {
        _push(`<div><h2 class="title mt-4 text-3xl text-center">All movies - ${ssrInterpolate(unref(movieStore).totalMoviesCount)}</h2><div class="movies"><!--[-->`);
        ssrRenderList(unref(movieStore).movies, (movie) => {
          _push(ssrRenderComponent(_component_Movie, {
            movie,
            key: movie.id
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(movieStore).loader) {
        _push(ssrRenderComponent(_component_Loader, { class: "mt-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BPBWRYC7.mjs.map
