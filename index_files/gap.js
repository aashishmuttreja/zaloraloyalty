var CitrusAd=function(t){"use strict";
/*! https://mths.be/punycode v1.4.1 by @mathias */var e=2147483647,r=/[^\x20-\x7E]/,n=/[\x2E\u3002\uFF0E\uFF61]/g,o={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},a=Math.floor,s=String.fromCharCode;function h(t){throw new RangeError(o[t])}function i(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function u(t,e,r){var n=0;for(t=r?a(t/700):t>>1,t+=a(t/e);t>455;n+=36)t=a(t/35);return a(n+36*t/(t+38))}function c(t){return function(t,e){var r=t.split("@"),o="";r.length>1&&(o=r[0]+"@",t=r[1]);var a=function(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}((t=t.replace(n,".")).split("."),e).join(".");return o+a}(t,(function(t){return r.test(t)?"xn--"+function(t){var r,n,o,c,l,p,f,m,v,y,g,d,b,w,j,O=[];for(d=(t=function(t){for(var e,r,n=[],o=0,a=t.length;o<a;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<a?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}(t)).length,r=128,n=0,l=72,p=0;p<d;++p)(g=t[p])<128&&O.push(s(g));for(o=c=O.length,c&&O.push("-");o<d;){for(f=e,p=0;p<d;++p)(g=t[p])>=r&&g<f&&(f=g);for(f-r>a((e-n)/(b=o+1))&&h("overflow"),n+=(f-r)*b,r=f,p=0;p<d;++p)if((g=t[p])<r&&++n>e&&h("overflow"),g==r){for(m=n,v=36;!(m<(y=v<=l?1:v>=l+26?26:v-l));v+=36)j=m-y,w=36-y,O.push(s(i(y+j%w,0))),m=a(j/w);O.push(s(i(m,0))),l=u(n,b,o==c),n=0,++o}++n,++r}return O.join("")}(t):t}))}function l(t){return null===t}function p(t){return"string"==typeof t}function f(t){return"object"==typeof t&&null!==t}function m(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function y(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}}function g(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var d=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e};function b(t,e,r,n){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var a=/\+/g;t=t.split(e);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var h=t.length;s>0&&h>s&&(h=s);for(var i=0;i<h;++i){var u,c,l,p,f=t[i].replace(a,"%20"),y=f.indexOf(r);y>=0?(u=f.substr(0,y),c=f.substr(y+1)):(u=f,c=""),l=decodeURIComponent(u),p=decodeURIComponent(c),m(o,l)?v(o[l])?o[l].push(p):o[l]=[o[l],p]:o[l]=p}return o}var w={parse:F,resolve:function(t,e){return F(t,!1,!0).resolve(e)},resolveObject:function(t,e){return t?F(t,!1,!0).resolveObject(e):e},format:function(t){p(t)&&(t=P({},t));return z(t)},Url:j};function j(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var O=/^([a-z0-9.+-]+:)/i,x=/:[0-9]*$/,q=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,C=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),A=["'"].concat(C),I=["%","/","?",";","#"].concat(A),U=["/","?","#"],R=/^[+a-z0-9A-Z_-]{0,63}$/,$=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,k={javascript:!0,"javascript:":!0},E={javascript:!0,"javascript:":!0},L={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function F(t,e,r){if(t&&f(t)&&t instanceof j)return t;var n=new j;return n.parse(t,e,r),n}function P(t,e,r,n){if(!p(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var o=e.indexOf("?"),a=-1!==o&&o<e.indexOf("#")?"?":"#",s=e.split(a);s[0]=s[0].replace(/\\/g,"/");var h=e=s.join(a);if(h=h.trim(),!n&&1===e.split("#").length){var i=q.exec(h);if(i)return t.path=h,t.href=h,t.pathname=i[1],i[2]?(t.search=i[2],t.query=r?b(t.search.substr(1)):t.search.substr(1)):r&&(t.search="",t.query={}),t}var u,l,f,m,v=O.exec(h);if(v){var y=(v=v[0]).toLowerCase();t.protocol=y,h=h.substr(v.length)}if(n||v||h.match(/^\/\/[^@\/]+@[^@\/]+/)){var g="//"===h.substr(0,2);!g||v&&E[v]||(h=h.substr(2),t.slashes=!0)}if(!E[v]&&(g||v&&!L[v])){var d,w,j=-1;for(u=0;u<U.length;u++)-1!==(l=h.indexOf(U[u]))&&(-1===j||l<j)&&(j=l);for(-1!==(w=-1===j?h.lastIndexOf("@"):h.lastIndexOf("@",j))&&(d=h.slice(0,w),h=h.slice(w+1),t.auth=decodeURIComponent(d)),j=-1,u=0;u<I.length;u++)-1!==(l=h.indexOf(I[u]))&&(-1===j||l<j)&&(j=l);-1===j&&(j=h.length),t.host=h.slice(0,j),h=h.slice(j),T(t),t.hostname=t.hostname||"";var x="["===t.hostname[0]&&"]"===t.hostname[t.hostname.length-1];if(!x){var C=t.hostname.split(/\./);for(u=0,f=C.length;u<f;u++){var F=C[u];if(F&&!F.match(R)){for(var P="",K=0,S=F.length;K<S;K++)F.charCodeAt(K)>127?P+="x":P+=F[K];if(!P.match(R)){var Z=C.slice(0,u),_=C.slice(u+1),G=F.match($);G&&(Z.push(G[1]),_.unshift(G[2])),_.length&&(h="/"+_.join(".")+h),t.hostname=Z.join(".");break}}}}t.hostname.length>255?t.hostname="":t.hostname=t.hostname.toLowerCase(),x||(t.hostname=c(t.hostname)),m=t.port?":"+t.port:"";var H=t.hostname||"";t.host=H+m,t.href+=t.host,x&&(t.hostname=t.hostname.substr(1,t.hostname.length-2),"/"!==h[0]&&(h="/"+h))}if(!k[y])for(u=0,f=A.length;u<f;u++){var M=A[u];if(-1!==h.indexOf(M)){var B=encodeURIComponent(M);B===M&&(B=escape(M)),h=h.split(M).join(B)}}var D=h.indexOf("#");-1!==D&&(t.hash=h.substr(D),h=h.slice(0,D));var J=h.indexOf("?");if(-1!==J?(t.search=h.substr(J),t.query=h.substr(J+1),r&&(t.query=b(t.query)),h=h.slice(0,J)):r&&(t.search="",t.query={}),h&&(t.pathname=h),L[y]&&t.hostname&&!t.pathname&&(t.pathname="/"),t.pathname||t.search){m=t.pathname||"";var N=t.search||"";t.path=m+N}return t.href=z(t),t}function z(t){var e=t.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var r,n,o,a,s=t.protocol||"",h=t.pathname||"",i=t.hash||"",u=!1,c="";t.host?u=e+t.host:t.hostname&&(u=e+(-1===t.hostname.indexOf(":")?t.hostname:"["+this.hostname+"]"),t.port&&(u+=":"+t.port)),t.query&&f(t.query)&&Object.keys(t.query).length&&(r=t.query,n=n||"&",o=o||"=",null===r&&(r=void 0),c="object"==typeof r?g(d(r),(function(t){var e=encodeURIComponent(y(t))+o;return v(r[t])?g(r[t],(function(t){return e+encodeURIComponent(y(t))})).join(n):e+encodeURIComponent(y(r[t]))})).join(n):a?encodeURIComponent(y(a))+o+encodeURIComponent(y(r)):"");var l=t.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||L[s])&&!1!==u?(u="//"+(u||""),h&&"/"!==h.charAt(0)&&(h="/"+h)):u||(u=""),i&&"#"!==i.charAt(0)&&(i="#"+i),l&&"?"!==l.charAt(0)&&(l="?"+l),s+u+(h=h.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(l=l.replace("#","%23"))+i}function T(t){var e=t.host,r=x.exec(e);r&&(":"!==(r=r[0])&&(t.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(t.hostname=e)}j.prototype.parse=function(t,e,r){return P(this,t,e,r)},j.prototype.format=function(){return z(this)},j.prototype.resolve=function(t){return this.resolveObject(F(t,!1,!0)).format()},j.prototype.resolveObject=function(t){if(p(t)){var e=new j;e.parse(t,!1,!0),t=e}for(var r,n=new j,o=Object.keys(this),a=0;a<o.length;a++){var s=o[a];n[s]=this[s]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var h=Object.keys(t),i=0;i<h.length;i++){var u=h[i];"protocol"!==u&&(n[u]=t[u])}return L[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!L[t.protocol]){for(var c=Object.keys(t),f=0;f<c.length;f++){var m=c[f];n[m]=t[m]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||E[t.protocol])n.pathname=t.pathname;else{for(r=(t.pathname||"").split("/");r.length&&!(t.host=r.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==r[0]&&r.unshift(""),r.length<2&&r.unshift(""),n.pathname=r.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var v=n.pathname||"",y=n.search||"";n.path=v+y}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var g,d=n.pathname&&"/"===n.pathname.charAt(0),b=t.host||t.pathname&&"/"===t.pathname.charAt(0),w=b||d||n.host&&t.pathname,O=w,x=n.pathname&&n.pathname.split("/")||[],q=n.protocol&&!L[n.protocol];if(r=t.pathname&&t.pathname.split("/")||[],q&&(n.hostname="",n.port=null,n.host&&(""===x[0]?x[0]=n.host:x.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===r[0]?r[0]=t.host:r.unshift(t.host)),t.host=null),w=w&&(""===r[0]||""===x[0])),b)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,x=r;else if(r.length)x||(x=[]),x.pop(),x=x.concat(r),n.search=t.search,n.query=t.query;else if(null!=t.search)return q&&(n.hostname=n.host=x.shift(),(g=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=g.shift(),n.host=n.hostname=g.shift())),n.search=t.search,n.query=t.query,l(n.pathname)&&l(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n;if(!x.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var C=x.slice(-1)[0],A=(n.host||t.host||x.length>1)&&("."===C||".."===C)||""===C,I=0,U=x.length;U>=0;U--)"."===(C=x[U])?x.splice(U,1):".."===C?(x.splice(U,1),I++):I&&(x.splice(U,1),I--);if(!w&&!O)for(;I--;I)x.unshift("..");!w||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),A&&"/"!==x.join("/").substr(-1)&&x.push("");var R=""===x[0]||x[0]&&"/"===x[0].charAt(0);return q&&(n.hostname=n.host=R?"":x.length?x.shift():"",(g=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=g.shift(),n.host=n.hostname=g.shift())),(w=w||n.host&&x.length)&&!R&&x.unshift(""),x.length?n.pathname=x.join("/"):(n.pathname=null,n.path=null),l(n.pathname)&&l(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},j.prototype.parseHost=function(){return T(this)};const K=(t,e)=>{const r=w.parse(t,!0);return r.query={...r.query,...e},fetch(w.format(r),{method:"GET"})},S=()=>{if(window.dataLayer){const t={};for(let e in window.dataLayer[0])window.dataLayer[0][e]&&(t[e]=window.dataLayer[0][e]);return t}return{}},Z=async(t,e=0)=>{try{await t()}catch(n){if(e<3){const n=e+1;await(r=n,new Promise(t=>setTimeout(t,1e3*r))),Z(t,n)}}var r};class _{constructor(t,e){this.baseUrl=t}async reportImpression(t){const{baseUrl:e}=this;await Z(()=>((t,e)=>K(`${t}/resource/first-i/${e}`,S()))(e,t))}async reportClick(t){const{baseUrl:e}=this;await Z(()=>((t,e)=>K(`${t}/resource/second-c/${e}`,S()))(e,t))}}return t.init=(t,e)=>new _(t,e),t.version="1.0.0",t}({});
