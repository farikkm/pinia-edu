import G from"./D3FnUuef.js";import{_ as z,f as A,A as T,B as d,o as b,i as p,c as K,Q as k,w as B,P as h,R as j,S as U,T as x,U as Q,a as D,V as E,W as X,X as S,Y as R,Z as Y,N as Z,$ as ee,a0 as re,a1 as $,a2 as te,a3 as ae,a4 as C,h as I,t as ie,n as ne}from"./Sngmmtsx.js";import{_ as oe}from"./Dssmxner.js";const L=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function P(e,i){i?i={...L,...i}:i=L;const a=_(i);return a.dispatch(e),a.toString()}const se=Object.freeze(["prototype","__proto__","constructor"]);function _(e){let i="",a=new Map;const t=r=>{i+=r};return{toString(){return i},getContext(){return a},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const n=Object.prototype.toString.call(r);let o="";const u=n.length;u<10?o="unknown:["+n+"]":o=n.slice(8,u-1),o=o.toLowerCase();let c=null;if((c=a.get(r))===void 0)a.set(r,a.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](r):e.ignoreUnknown||this.unkown(r,o);else{let s=Object.keys(r);e.unorderedObjects&&(s=s.sort());let g=[];e.respectType!==!1&&!F(r)&&(g=se),e.excludeKeys&&(s=s.filter(l=>!e.excludeKeys(l)),g=g.filter(l=>!e.excludeKeys(l))),t("object:"+(s.length+g.length)+":");const f=l=>{this.dispatch(l),t(":"),e.excludeValues||this.dispatch(r[l]),t(",")};for(const l of s)f(l);for(const l of g)f(l)}},array(r,n){if(n=n===void 0?e.unorderedArrays!==!1:n,t("array:"+r.length+":"),!n||r.length<=1){for(const c of r)this.dispatch(c);return}const o=new Map,u=r.map(c=>{const s=_(e);s.dispatch(c);for(const[g,f]of s.getContext())o.set(g,f);return s.toString()});return a=o,u.sort(),this.array(u,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,n){if(t(n),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),F(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const n=[...r];return this.array(n,e.unorderedSets!==!1)},set(r){t("set:");const n=[...r];return this.array(n,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const V="[native code] }",le=V.length;function F(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-le)===V}function de(e,i,a={}){return e===i||P(e,a)===P(i,a)}function ue(e,i){const a={...e};for(const t of i)delete a[t];return a}function ce(e,i,a){typeof i=="string"&&(i=i.split(".").map(r=>{const n=Number(r);return isNaN(n)?r:n}));let t=e;for(const r of i){if(t==null)return a;t=t[r]}return t!==void 0?t:a}const q={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},ge=e=>Object.keys(q).reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),fe=A({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const i=T();return{dynamic:d(()=>{var t,r;return e.dynamic||((r=(t=i.ui)==null?void 0:t.icons)==null?void 0:r.dynamic)})}}});function ye(e,i,a,t,r,n){const o=G;return e.dynamic?(b(),p(o,{key:0,name:e.name},null,8,["name"])):(b(),K("span",{key:1,class:k(e.name)},null,2))}const W=z(fe,[["render",ye]]),be=A({inheritAttrs:!1,props:{...q,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(a,t,{isActive:r,isExactActive:n}){return e.exactQuery&&!de(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&n||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),pe=["href","aria-disabled","role","rel","target","onClick"];function ve(e,i,a,t,r,n){const o=oe;return e.to?(b(),p(o,x({key:1},e.$props,{custom:""}),{default:B(({route:u,href:c,target:s,rel:g,navigate:f,isActive:l,isExactActive:m,isExternal:w})=>[D("a",x(e.$attrs,{href:e.disabled?void 0:c,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:g,target:s,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(u,e._.provides[E]||e.$route,{isActive:l,isExactActive:m}),onClick:v=>!w&&!e.disabled&&f(v)}),[h(e.$slots,"default",j(U({isActive:e.active!==void 0?e.active:e.exact?m:l})))],16,pe)]),_:3},16)):(b(),p(Q(e.as),x({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:B(()=>[h(e.$slots,"default",j(U({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const H=z(be,[["render",ve]]),he=(e,i,a,t,r=!1)=>{const n=X(),o=T(),u=d(()=>{var l;const s=S(i),g=S(a),f=S(t);return R((s==null?void 0:s.strategy)||((l=o.ui)==null?void 0:l.strategy),f?{wrapper:f}:{},s||{},r?ce(o.ui,e,{}):{},g||{})}),c=d(()=>ue(n,["class"]));return{ui:u,attrs:c}};function me({ui:e,props:i}){const a=re();let t=a.parent,r;for(;t&&!r;){if(t.type.name==="ButtonGroup"){r=Y(`group-${t.uid}`);break}t=t.parent}const n=d(()=>r==null?void 0:r.value.children.indexOf(a));return Z(()=>{r==null||r.value.register(a)}),ee(()=>{r==null||r.value.unregister(a)}),{size:d(()=>(r==null?void 0:r.value.size)||i.size),rounded:d(()=>!r||n.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:n.value===0?r.value.rounded.start:n.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const ke={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},J={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},M={container:"z-20 group",trigger:"inline-flex w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...J,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...M,option:{...M.option},arrow:{...J}});const y=R($.ui.strategy,$.ui.button,ke),xe=A({components:{UIcon:W,ULink:H},inheritAttrs:!1,props:{...q,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...$.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>y.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:a,attrs:t}=he("button",te(e,"ui"),y),{size:r,rounded:n}=me({ui:a,props:e}),o=d(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=d(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),c=d(()=>e.square||!i.default&&!e.label),s=d(()=>{var N,O;const v=((O=(N=a.value.color)==null?void 0:N[e.color])==null?void 0:O[e.variant])||a.value.variant[e.variant];return ae(C(a.value.base,a.value.font,n.value,a.value.size[r.value],a.value.gap[r.value],e.padded&&a.value[c.value?"square":"padding"][r.value],v==null?void 0:v.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),g=d(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),f=d(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),l=d(()=>C(a.value.icon.base,a.value.icon.size[r.value],e.loading&&a.value.icon.loading)),m=d(()=>C(a.value.icon.base,a.value.icon.size[r.value],e.loading&&!o.value&&a.value.icon.loading)),w=d(()=>ge(e));return{ui:a,attrs:t,isLeading:o,isTrailing:u,isSquare:c,buttonClass:s,leadingIconName:g,trailingIconName:f,leadingIconClass:l,trailingIconClass:m,linkProps:w}}});function we(e,i,a,t,r,n){const o=W,u=H;return b(),p(u,x({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:B(()=>[h(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(b(),p(o,{key:0,name:e.leadingIconName,class:k(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)]),h(e.$slots,"default",{},()=>[e.label?(b(),K("span",{key:0,class:k([e.truncate?e.ui.truncate:""])},ie(e.label),3)):I("",!0)]),h(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(b(),p(o,{key:0,name:e.trailingIconName,class:k(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)])]),_:3},16,["type","disabled","class"])}const Be=z(xe,[["render",we]]),$e=ne("movieStore",{state:()=>({movies:[],activeTabs:1,loader:!0}),actions:{setActiveTabs(e){this.activeTabs=e},toggleWatched(e){const i=this.movies.findIndex(a=>a.id===e);this.movies[i].isWatched=!this.movies[i].isWatched},deleteMovie(e){this.movies=this.movies.filter(i=>i.id!==e)}},getters:{watchedMovies:e=>e.movies.filter(i=>i==null?void 0:i.isWatched),totalMoviesCount:e=>e.movies.length}});export{Be as _,$e as u};
