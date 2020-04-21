var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function m(t){p=t}const h=[],b=[],g=[],v=[],$=Promise.resolve();let w=!1;function y(t){g.push(t)}let x=!1;const _=new Set;function k(){if(!x){x=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];m(e),A(e.$$)}for(h.length=0;b.length;)b.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];_.has(e)||(_.add(e),e())}g.length=0}while(h.length);for(;v.length;)v.pop()();w=!1,x=!1,_.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const L=new Set;function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function M(t,n,s){const{fragment:i,on_mount:l,on_destroy:c,after_update:a}=t.$$;i&&i.m(n,s),y(()=>{const n=l.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(y)}function j(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(t,e){-1===t.$$.dirty[0]&&(h.push(t),w||(w=!0,$.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(e,o,s,i,l,a,u=[-1]){const d=p;m(e);const f=o.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let b=!1;if(h.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),b&&C(e,t)),n}):[],h.update(),b=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();o.intro&&N(e.$$.fragment),M(e,o.target,o.anchor),k()}m(d)}class O{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function P(t,e,n){const r=t.slice();return r[1]=e[n],r}function S(e){let n,r,o,s,p,m,h,b,g=e[1].name+"",v=e[1].description+"";return{c(){n=a("div"),r=a("a"),o=a("h3"),s=u(g),p=d(),m=a("p"),h=u(v),b=d(),f(r,"href","/"),f(r,"class","svelte-kmgtbo"),f(n,"class","project-card svelte-kmgtbo")},m(t,e){l(t,n,e),i(n,r),i(r,o),i(o,s),i(r,p),i(r,m),i(m,h),i(n,b)},p:t,d(t){t&&c(n)}}}function T(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=S(P(e,r,t));return{c(){n=a("div");for(let t=0;t<o.length;t+=1)o[t].c();f(n,"class","projects svelte-kmgtbo")},m(t,e){l(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const i=P(t,r,s);o[s]?o[s].p(i,e):(o[s]=S(i),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function B(t){return[Array(3).fill({name:"Lorem ipsum dolor sit amet.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue."})]}class H extends O{constructor(t){super(),E(this,t,B,T,s,{})}}function q(e){let n,r,o,s,u,p,m,h,b,g,v,$,w,y,x,_,k,A,C;const E=new H({});return{c(){var t;n=d(),r=a("main"),o=a("div"),o.innerHTML='<div class="header svelte-1wbrdap"><a href="/" class="svelte-1wbrdap"><h1 class="svelte-1wbrdap">Open Source</h1><h2 class="svelte-1wbrdap">at Berkeley</h2></a></div> \n\t\t<div class="navbar svelte-1wbrdap"><div class="navbar-link svelte-1wbrdap"><a href="/about" class="svelte-1wbrdap">About</a></div> \n\t\t\t<div class="navbar-link svelte-1wbrdap"><a href="https://github.com/berkeleyopensource" class="svelte-1wbrdap">Github</a></div></div>',s=d(),u=a("div"),p=a("section"),p.innerHTML="<h2>Lorem ipsum dolor sit amet.</h2> \n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue.</p>",m=d(),h=a("section"),h.innerHTML='<h2>About Us</h2> \n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue. Proin facilisis eleifend rutrum. Aenean accumsan nibh leo, laoreet auctor tellus luctus at. </p> \n\t\t\t<a href="/">Read More →</a>',b=d(),g=a("section"),v=a("h2"),v.textContent="Projects",$=d(),w=a("p"),w.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue. Proin facilisis eleifend rutrum. Aenean accumsan nibh leo, laoreet auctor tellus luctus at.",y=d(),(t=E.$$.fragment)&&t.c(),x=d(),_=a("a"),_.textContent="View More →",k=d(),A=a("div"),document.title="Berkeley Open Source",f(o,"class","heading svelte-1wbrdap"),f(p,"class","svelte-1wbrdap"),f(h,"class","svelte-1wbrdap"),f(_,"href","/"),f(g,"class","svelte-1wbrdap"),f(u,"class","content svelte-1wbrdap"),f(A,"class","footing svelte-1wbrdap"),f(r,"class","svelte-1wbrdap")},m(t,e){l(t,n,e),l(t,r,e),i(r,o),i(r,s),i(r,u),i(u,p),i(u,m),i(u,h),i(u,b),i(u,g),i(g,v),i(g,$),i(g,w),i(g,y),M(E,g,null),i(g,x),i(g,_),i(r,k),i(r,A),C=!0},p:t,i(t){C||(N(E.$$.fragment,t),C=!0)},o(t){!function(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),(void 0).c.push(()=>{L.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}(E.$$.fragment,t),C=!1},d(t){t&&c(n),t&&c(r),j(E)}}}return new class extends O{constructor(t){super(),E(this,t,null,q,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
