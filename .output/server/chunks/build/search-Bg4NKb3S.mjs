import { u as useSearch, a as __nuxt_component_0, _ as _sfc_main$1 } from './Loader-DlEnghYj.mjs';
import { u as useHead } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import './index-Bpep4gZt.mjs';
import './nuxt-link-3PxKSZG8.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './Icon-B98aE4wR.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-DmJTZe-0.mjs';
import 'tailwind-merge';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Search | farikk's Cinema"
    });
    const movieInput = ref("");
    const searchStore = useSearch();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      const _component_Movie = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search flex justify-center items-center flex-col" }, _attrs))}><form class="w-full search__form mt-5"><label id="search" class="flex justify-center items-center text-2xl mb-2 font-medium text-gray-900 dark:text-white">Search</label><input type="text" placeholder="Movie name..." class="search__input bg-gray-800 border text-white border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"${ssrRenderAttr("value", unref(movieInput))}></form>`);
      if (unref(searchStore).loader) {
        _push(ssrRenderComponent(_component_Loader, { class: "mt-6" }, null, _parent));
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(searchStore).movies, (movie) => {
          _push(ssrRenderComponent(_component_Movie, {
            key: movie.id,
            movie,
            "is-search": true
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-Bg4NKb3S.mjs.map
