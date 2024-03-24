import{u,_ as $}from"./CPUT3mSP.js";import{n as x,q as k,f as S,s as M,x as T,o as i,c as a,a as s,d as l,t as m,b as _,w as v,g as B,_ as C}from"./Sngmmtsx.js";const U="e6d6038adef1968391f39db3fc0d42fb",W=`https://api.themoviedb.org/3/search/movie?api_key=${U}`,N=x("search",{state:()=>({loader:!1,movies:[]}),actions:{async getMovies(t){this.loader=!0;const r=await(await fetch(`${W}&query=${t}`)).json();this.movies=r.results,this.loader=!1},addToUserMovies(t){const n=u();n.movies.push({...t,isWatched:!1}),n.activeTabs=1,k("/")}}}),j={class:"movie mt-5"},V={class:"movie__body rounded-xl flex gap-10 items-center p-5 bg-slate-300"},q=["src","alt"],A={class:"text-black"},D={class:"movie__name text-2xl"},E={class:"movie__overwiew mt-2 opacity-80 text-sm"},I={key:0,class:"movie__buttons mt-3"},L=s("span",{class:"text-sm font-bold"},"Status: ",-1),R={key:0},J={key:1},K={key:1},Q=S({__name:"Movie",props:{movie:{},isSearch:{type:Boolean}},setup(t){const r=t.movie.release_date.split("-"),f=`${r[2]}.${r[1]}.${r[0]}г.`,c=u(),b=N(),{movies:w}=M(c),g=e=>{c.toggleWatched(e)},y=e=>{c.deleteMovie(e)};return T(w,e=>{localStorage.setItem("movies",JSON.stringify(e))},{deep:!0}),(e,o)=>{var p;const d=$;return i(),a("div",j,[s("div",V,[s("img",{src:`https://image.tmdb.org/t/p/w300_and_h450_bestv2${e.movie.poster_path}`,alt:e.movie.original_title,class:"movie__img min-w-40 h-40 rounded-full object-cover"},null,8,q),s("div",A,[s("h3",D,[l(m(e.movie.original_title)+" ",1),s("span",{class:"text-sm ps-3"},m(f))]),s("p",E,m(((p=e.movie.overview)==null?void 0:p.length)>200?`${e.movie.overview.slice(0,200)}..`:e.movie.overview),1),e.isSearch?(i(),a("div",K,[_(d,{onClick:o[2]||(o[2]=h=>B(b).addToUserMovies(e.movie)),class:"mt-3 py-1.5 px-7 flex justify-center items-center",color:"primary",variant:"solid"},{default:v(()=>[l(" Add ")]),_:1})])):(i(),a("div",I,[s("div",null,[L,_(d,{class:"ml-3",color:e.movie.isWatched?"primary":"amber",variant:"solid",onClick:o[0]||(o[0]=h=>g(e.movie.id))},{default:v(()=>[e.movie.isWatched?(i(),a("span",R,"Watched")):(i(),a("span",J,"Unwatched"))]),_:1},8,["color"])]),_(d,{class:"mt-4 px-5 py-2",color:"red",text:"white",variant:"solid",onClick:o[1]||(o[1]=h=>y(e.movie.id))},{default:v(()=>[l("Delete ")]),_:1})]))])])])}}}),O={},P={class:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",role:"status"},Y=s("span",{class:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},"Loading...",-1),z=[Y];function F(t,n){return i(),a("div",P,z)}const X=C(O,[["render",F]]);export{Q as _,X as a,N as u};
