import { u as useMovieStore, _ as __nuxt_component_1 } from './index-Bpep4gZt.mjs';
import { useSSRContext, defineComponent, watch, mergeProps, withCtx, openBlock, createBlock, createTextVNode, unref } from 'vue';
import { d as defineStore, n as navigateTo, s as storeToRefs, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const API_KEY = `${"e6d6038adef1968391f39db3fc0d42fb"}`;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
const useSearch = defineStore("search", {
  state: () => ({
    loader: false,
    movies: []
  }),
  actions: {
    async getMovies(searchInput) {
      this.loader = true;
      const res = await fetch(`${URL}&query=${searchInput}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
    addToUserMovies(obj) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...obj, isWatched: false });
      movieStore.activeTabs = 1;
      navigateTo("/");
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Movie",
  __ssrInlineRender: true,
  props: {
    movie: {},
    isSearch: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const rda = props.movie.release_date.split("-");
    const release_date = `${rda[2]}.${rda[1]}.${rda[0]}\u0433.`;
    const movieStore = useMovieStore();
    const searchStore = useSearch();
    const { movies } = storeToRefs(movieStore);
    const watched = (id) => {
      movieStore.toggleWatched(id);
    };
    const deleteMovie = (id) => {
      movieStore.deleteMovie(id);
    };
    watch(movies, (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "movie mt-5" }, _attrs))}><div class="movie__body rounded-xl flex gap-10 items-center p-5 bg-slate-300"><img${ssrRenderAttr("src", `https://image.tmdb.org/t/p/w300_and_h450_bestv2${_ctx.movie.poster_path}`)}${ssrRenderAttr("alt", _ctx.movie.original_title)} class="movie__img min-w-40 h-40 rounded-full object-cover"><div class="text-black"><h3 class="movie__name text-2xl">${ssrInterpolate(_ctx.movie.original_title)} <span class="text-sm ps-3">${ssrInterpolate(release_date)}</span></h3><p class="movie__overwiew mt-2 opacity-80 text-sm">${ssrInterpolate(((_a = _ctx.movie.overview) == null ? void 0 : _a.length) > 200 ? `${_ctx.movie.overview.slice(
        0,
        200
      )}..` : _ctx.movie.overview)}</p>`);
      if (!_ctx.isSearch) {
        _push(`<div class="movie__buttons mt-3"><div><span class="text-sm font-bold">Status: </span>`);
        _push(ssrRenderComponent(_component_UButton, {
          class: "ml-3",
          color: _ctx.movie.isWatched ? "primary" : "amber",
          variant: "solid",
          onClick: ($event) => watched(_ctx.movie.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.movie.isWatched) {
                _push2(`<span${_scopeId}>Watched</span>`);
              } else {
                _push2(`<span${_scopeId}>Unwatched</span>`);
              }
            } else {
              return [
                _ctx.movie.isWatched ? (openBlock(), createBlock("span", { key: 0 }, "Watched")) : (openBlock(), createBlock("span", { key: 1 }, "Unwatched"))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UButton, {
          class: "mt-4 px-5 py-2",
          color: "red",
          text: "white",
          variant: "solid",
          onClick: ($event) => deleteMovie(_ctx.movie.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Delete `);
            } else {
              return [
                createTextVNode("Delete ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UButton, {
          onClick: ($event) => unref(searchStore).addToUserMovies(_ctx.movie),
          class: "mt-3 py-1.5 px-7 flex justify-center items-center",
          color: "primary",
          variant: "solid"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Add `);
            } else {
              return [
                createTextVNode(" Add ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Movie.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
    role: "status"
  }, _attrs))}><span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _sfc_main$1 as _, __nuxt_component_0 as a, useSearch as u };
//# sourceMappingURL=Loader-DlEnghYj.mjs.map
