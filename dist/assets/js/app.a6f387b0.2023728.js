(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();function Mt(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function Qi(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ot={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},se={duration:.5,overwrite:!1,delay:0},gi,K,Y,ft=1e8,$=1/ft,ti=Math.PI*2,Zn=ti/4,tr=0,Zi=Math.sqrt,er=Math.cos,ir=Math.sin,X=function(t){return typeof t=="string"},B=function(t){return typeof t=="function"},Pt=function(t){return typeof t=="number"},mi=function(t){return typeof t>"u"},At=function(t){return typeof t=="object"},Z=function(t){return t!==!1},tn=function(){return typeof window<"u"},Pe=function(t){return B(t)||X(t)},en=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},q=Array.isArray,ei=/(?:-?\.?\d|\.)+/gi,nn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ge=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rn=/[+-]=-?[.\d]+/,sn=/[^,'"\[\]\s]+/gi,nr=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,U,dt,ii,vi,at={},Le={},on,an=function(t){return(Le=Kt(t,at))&&ht},yi=function(t,e){},Ie=function(t,e){return!e&&void 0},hn=function(t,e){return t&&(at[t]=e)&&Le&&(Le[t]=e)||at},be=function(){return 0},rr={suppressEvents:!0,isStart:!0,kill:!1},Oe={suppressEvents:!0,kill:!1},sr={suppressEvents:!0},xi={},Ft=[],ni={},ln,rt={},He={},Fi=30,ke=[],bi="",wi=function(t){var e=t[0],i,n;if(At(e)||B(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=ke.length;n--&&!ke[n].targetTest(e););i=ke[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new kn(t[n],i)))||t.splice(n,1);return t},Xt=function(t){return t._gsap||wi(pt(t))[0]._gsap},un=function(t,e,i){return(i=t[e])&&B(i)?t[e]():mi(i)&&t.getAttribute&&t.getAttribute(e)||i},tt=function(t,e){return(t=t.split(",")).forEach(e)||t},N=function(t){return Math.round(t*1e5)/1e5||0},j=function(t){return Math.round(t*1e7)/1e7||0},ie=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},or=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Fe=function(){var t=Ft.length,e=Ft.slice(0),i,n;for(ni={},Ft.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},cn=function(t,e,i,n){Ft.length&&!K&&Fe(),t.render(e,i,n||K&&e<0&&(t._initted||t._startAt)),Ft.length&&!K&&Fe()},dn=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sn).length<2?e:X(t)?t.trim():t},fn=function(t){return t},gt=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},ar=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Kt=function(t,e){for(var i in e)t[i]=e[i];return t},zi=function l(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=At(e[i])?l(t[i]||(t[i]={}),e[i]):e[i]);return t},ze=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},me=function(t){var e=t.parent||U,i=t.keyframes?ar(q(t.keyframes)):gt;if(Z(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},hr=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},pn=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t[n],o;if(r)for(o=e[r];s&&s[r]>o;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=s,e.parent=e._dp=t,e},Be=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,s=e._next;r?r._next=s:t[i]===e&&(t[i]=s),s?s._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},$t=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},jt=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},lr=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ri=function(t,e,i,n){return t._startAt&&(K?t._startAt.revert(Oe):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},ur=function l(t){return!t||t._ts&&l(t.parent)},$i=function(t){return t._repeat?oe(t._tTime,t=t.duration()+t._rDelay)*t:0},oe=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},$e=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ne=function(t){return t._end=j(t._start+(t._tDur/Math.abs(t._ts||t._rts||$)||0))},Ye=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=j(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ne(t),i._dirty||jt(i,t)),t},_n=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=$e(t.rawTime(),e),(!e._dur||Se(0,e.totalDuration(),i)-e._tTime>$)&&e.render(i,!0)),jt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-$}},yt=function(t,e,i,n){return e.parent&&$t(e),e._start=j((Pt(i)?i:i||t!==U?ct(t,i,e):t._time)+e._delay),e._end=j(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pn(t,e,"_first","_last",t._sort?"_start":0),si(e)||(t._recent=e),n||_n(t,e),t._ts<0&&Ye(t,t._tTime),t},gn=function(t,e){return(at.ScrollTrigger||yi("scrollTrigger",e))&&at.ScrollTrigger.create(e,t)},mn=function(t,e,i,n,r){if(Ci(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!K&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ln!==st.frame)return Ft.push(t),t._lazy=[r,n],1},cr=function l(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||l(e))},si=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dr=function(t,e,i,n){var r=t.ratio,s=e<0||!e&&(!t._start&&cr(t)&&!(!t._initted&&si(t))||(t._ts<0||t._dp._ts<0)&&!si(t))?0:1,o=t._rDelay,a=0,h,u,c;if(o&&t._repeat&&(a=Se(0,t._tDur,e),u=oe(a,o),t._yoyo&&u&1&&(s=1-s),u!==oe(t._tTime,o)&&(r=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==r||K||n||t._zTime===$||!e&&t._zTime){if(!t._initted&&mn(t,e,n,i,a))return;for(c=t._zTime,t._zTime=e||(i?$:0),i||(i=e&&!c),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=a,h=t._pt;h;)h.r(s,h.d),h=h._next;e<0&&ri(t,e,i,!0),t._onUpdate&&!i&&_t(t,"onUpdate"),a&&t._repeat&&!i&&t.parent&&_t(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&$t(t,1),!i&&!K&&(_t(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},fr=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},ae=function(t,e,i,n){var r=t._repeat,s=j(e)||0,o=t._tTime/t._tDur;return o&&!n&&(t._time*=s/t._dur),t._dur=s,t._tDur=r?r<0?1e10:j(s*(r+1)+t._rDelay*r):s,o>0&&!n&&Ye(t,t._tTime=t._tDur*o),t.parent&&Ne(t),i||jt(t.parent,t),t},Ri=function(t){return t instanceof Q?jt(t):ae(t,t._dur)},pr={_start:0,endTime:be,totalDuration:be},ct=function l(t,e,i){var n=t.labels,r=t._recent||pr,s=t.duration()>=ft?r.endTime(!1):t._dur,o,a,h;return X(e)&&(isNaN(e)||e in n)?(a=e.charAt(0),h=e.substr(-1)==="%",o=e.indexOf("="),a==="<"||a===">"?(o>=0&&(e=e.replace(/=/,"")),(a==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(o<0?r:i).totalDuration()/100:1)):o<0?(e in n||(n[e]=s),n[e]):(a=parseFloat(e.charAt(o-1)+e.substr(o+1)),h&&i&&(a=a/100*(q(i)?i[0]:i).totalDuration()),o>1?l(t,e.substr(0,o-1),i)+a:s+a)):e==null?s:+e},ve=function(t,e,i){var n=Pt(e[1]),r=(n?2:1)+(t<2?0:1),s=e[r],o,a;if(n&&(s.duration=e[1]),s.parent=i,t){for(o=s,a=i;a&&!("immediateRender"in o);)o=a.vars.defaults||{},a=Z(a.vars.inherit)&&a.parent;s.immediateRender=Z(o.immediateRender),t<2?s.runBackwards=1:s.startAt=e[r-1]}return new H(e[0],s,e[r+1])},Ut=function(t,e){return t||t===0?e(t):e},Se=function(t,e,i){return i<t?t:i>e?e:i},W=function(t,e){return!X(t)||!(e=nr.exec(t))?"":e[1]},_r=function(t,e,i){return Ut(i,function(n){return Se(t,e,n)})},oi=[].slice,vn=function(t,e){return t&&At(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&At(t[0]))&&!t.nodeType&&t!==dt},gr=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return X(n)&&!e||vn(n,1)?(r=i).push.apply(r,pt(n)):i.push(n)})||i},pt=function(t,e,i){return Y&&!e&&Y.selector?Y.selector(t):X(t)&&!i&&(ii||!he())?oi.call((e||vi).querySelectorAll(t),0):q(t)?gr(t,i):vn(t)?oi.call(t,0):t?[t]:[]},ai=function(t){return t=pt(t)[0]||Ie("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return pt(e,i.querySelectorAll?i:i===t?Ie("Invalid scope")||vi.createElement("div"):t)}},yn=function(t){return t.sort(function(){return .5-Math.random()})},xn=function(t){if(B(t))return t;var e=At(t)?t:{each:t},i=Wt(e.ease),n=e.from||0,r=parseFloat(e.base)||0,s={},o=n>0&&n<1,a=isNaN(n)||o,h=e.axis,u=n,c=n;return X(n)?u=c={center:.5,edges:.5,end:1}[n]||0:!o&&a&&(u=n[0],c=n[1]),function(f,p,_){var d=(_||e).length,g=s[d],v,m,y,b,x,C,A,w,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,ft])[1],!M){for(A=-ft;A<(A=_[M++].getBoundingClientRect().left)&&M<d;);M--}for(g=s[d]=[],v=a?Math.min(M,d)*u-.5:n%M,m=M===ft?0:a?d*c/M-.5:n/M|0,A=0,w=ft,C=0;C<d;C++)y=C%M-v,b=m-(C/M|0),g[C]=x=h?Math.abs(h==="y"?b:y):Zi(y*y+b*b),x>A&&(A=x),x<w&&(w=x);n==="random"&&yn(g),g.max=A-w,g.min=w,g.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(M>d?d-1:h?h==="y"?d/M:M:Math.max(M,d/M))||0)*(n==="edges"?-1:1),g.b=d<0?r-d:r,g.u=W(e.amount||e.each)||0,i=i&&d<0?Sn(i):i}return d=(g[f]-g.min)/g.max||0,j(g.b+(i?i(d):d)*g.v)+g.u}},hi=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=j(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Pt(i)?0:W(i))}},bn=function(t,e){var i=q(t),n,r;return!i&&At(t)&&(n=i=t.radius||ft,t.values?(t=pt(t.values),(r=!Pt(t[0]))&&(n*=n)):t=hi(t.increment)),Ut(e,i?B(t)?function(s){return r=t(s),Math.abs(r-s)<=n?r:s}:function(s){for(var o=parseFloat(r?s.x:s),a=parseFloat(r?s.y:0),h=ft,u=0,c=t.length,f,p;c--;)r?(f=t[c].x-o,p=t[c].y-a,f=f*f+p*p):f=Math.abs(t[c]-o),f<h&&(h=f,u=c);return u=!n||h<=n?t[u]:s,r||u===s||Pt(s)?u:u+W(s)}:hi(t))},wn=function(t,e,i,n){return Ut(q(t)?!e:i===!0?!!(i=0):!n,function(){return q(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},mr=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,s){return s(r)},n)}},vr=function(t,e){return function(i){return t(parseFloat(i))+(e||W(i))}},yr=function(t,e,i){return Cn(t,e,0,1,i)},An=function(t,e,i){return Ut(i,function(n){return t[~~e(n)]})},xr=function l(t,e,i){var n=e-t;return q(t)?An(t,l(0,t.length),e):Ut(i,function(r){return(n+(r-t)%n)%n+t})},br=function l(t,e,i){var n=e-t,r=n*2;return q(t)?An(t,l(0,t.length-1),e):Ut(i,function(s){return s=(r+(s-t)%r)%r||0,t+(s>n?r-s:s)})},we=function(t){for(var e=0,i="",n,r,s,o;~(n=t.indexOf("random(",e));)s=t.indexOf(")",n),o=t.charAt(n+7)==="[",r=t.substr(n+7,s-n-7).match(o?sn:ei),i+=t.substr(e,n-e)+wn(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=s+1;return i+t.substr(e,t.length-e)},Cn=function(t,e,i,n,r){var s=e-t,o=n-i;return Ut(r,function(a){return i+((a-t)/s*o||0)})},wr=function l(t,e,i,n){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var s=X(t),o={},a,h,u,c,f;if(i===!0&&(n=1)&&(i=null),s)t={p:t},e={p:e};else if(q(t)&&!q(e)){for(u=[],c=t.length,f=c-2,h=1;h<c;h++)u.push(l(t[h-1],t[h]));c--,r=function(_){_*=c;var d=Math.min(f,~~_);return u[d](_-d)},i=e}else n||(t=Kt(q(t)?[]:{},t));if(!u){for(a in e)Ai.call(o,t,a,"get",e[a]);r=function(_){return Ei(_,o)||(s?t.p:t)}}}return Ut(i,r)},Ui=function(t,e,i){var n=t.labels,r=ft,s,o,a;for(s in n)o=n[s]-e,o<0==!!i&&o&&r>(o=Math.abs(o))&&(a=s,r=o);return a},_t=function(t,e,i){var n=t.vars,r=n[e],s=Y,o=t._ctx,a,h,u;if(r)return a=n[e+"Params"],h=n.callbackScope||t,i&&Ft.length&&Fe(),o&&(Y=o),u=a?r.apply(h,a):r.call(h),Y=s,u},_e=function(t){return $t(t),t.scrollTrigger&&t.scrollTrigger.kill(!!K),t.progress()<1&&_t(t,"onInterrupt"),t},te,Ar=function(t){t=!t.name&&t.default||t;var e=t.name,i=B(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:be,render:Ei,add:Ai,kill:Ur,modifier:Rr,rawVars:0},s={targetTest:0,get:0,getSetter:Ti,aliases:{},register:0};if(he(),t!==n){if(rt[e])return;gt(n,gt(ze(t,r),s)),Kt(n.prototype,Kt(r,ze(t,s))),rt[n.prop=e]=n,t.targetTest&&(ke.push(n),xi[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}hn(e,n),t.register&&t.register(ht,n,et)},z=255,ge={aqua:[0,z,z],lime:[0,z,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,z],navy:[0,0,128],white:[z,z,z],olive:[128,128,0],yellow:[z,z,0],orange:[z,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[z,0,0],pink:[z,192,203],cyan:[0,z,z],transparent:[z,z,z,0]},Xe=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*z+.5|0},Mn=function(t,e,i){var n=t?Pt(t)?[t>>16,t>>8&z,t&z]:0:ge.black,r,s,o,a,h,u,c,f,p,_;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ge[t])n=ge[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),s=t.charAt(2),o=t.charAt(3),t="#"+r+r+s+s+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&z,n&z,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&z,t&z]}else if(t.substr(0,3)==="hsl"){if(n=_=t.match(ei),!e)a=+n[0]%360/360,h=+n[1]/100,u=+n[2]/100,s=u<=.5?u*(h+1):u+h-u*h,r=u*2-s,n.length>3&&(n[3]*=1),n[0]=Xe(a+1/3,r,s),n[1]=Xe(a,r,s),n[2]=Xe(a-1/3,r,s);else if(~t.indexOf("="))return n=t.match(nn),i&&n.length<4&&(n[3]=1),n}else n=t.match(ei)||ge.transparent;n=n.map(Number)}return e&&!_&&(r=n[0]/z,s=n[1]/z,o=n[2]/z,c=Math.max(r,s,o),f=Math.min(r,s,o),u=(c+f)/2,c===f?a=h=0:(p=c-f,h=u>.5?p/(2-c-f):p/(c+f),a=c===r?(s-o)/p+(s<o?6:0):c===s?(o-r)/p+2:(r-s)/p+4,a*=60),n[0]=~~(a+.5),n[1]=~~(h*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Tn=function(t){var e=[],i=[],n=-1;return t.split(zt).forEach(function(r){var s=r.match(Zt)||[];e.push.apply(e,s),i.push(n+=s.length+1)}),e.c=i,e},Vi=function(t,e,i){var n="",r=(t+n).match(zt),s=e?"hsla(":"rgba(",o=0,a,h,u,c;if(!r)return t;if(r=r.map(function(f){return(f=Mn(f,e,1))&&s+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Tn(t),a=i.c,a.join(n)!==u.c.join(n)))for(h=t.replace(zt,"1").split(Zt),c=h.length-1;o<c;o++)n+=h[o]+(~a.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!h)for(h=t.split(zt),c=h.length-1;o<c;o++)n+=h[o]+r[o];return n+h[c]},zt=function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ge)l+="|"+t+"\\b";return new RegExp(l+")","gi")}(),Cr=/hsl[a]?\(/,En=function(t){var e=t.join(" "),i;if(zt.lastIndex=0,zt.test(e))return i=Cr.test(e),t[1]=Vi(t[1],i),t[0]=Vi(t[0],i,Tn(t[1])),!0},Ae,st=function(){var l=Date.now,t=500,e=33,i=l(),n=i,r=1e3/240,s=r,o=[],a,h,u,c,f,p,_=function d(g){var v=l()-n,m=g===!0,y,b,x,C;if(v>t&&(i+=v-e),n+=v,x=n-i,y=x-s,(y>0||m)&&(C=++c.frame,f=x-c.time*1e3,c.time=x=x/1e3,s+=y+(y>=r?4:r-y),b=1),m||(a=h(d)),b)for(p=0;p<o.length;p++)o[p](x,f,C,g)};return c={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){on&&(!ii&&tn()&&(dt=ii=window,vi=dt.document||{},at.gsap=ht,(dt.gsapVersions||(dt.gsapVersions=[])).push(ht.version),an(Le||dt.GreenSockGlobals||!dt.gsap&&dt||{}),u=dt.requestAnimationFrame),a&&c.sleep(),h=u||function(g){return setTimeout(g,s-c.time*1e3+1|0)},Ae=1,_(2))},sleep:function(){(u?dt.cancelAnimationFrame:clearTimeout)(a),Ae=0,h=be},lagSmoothing:function(g,v){t=g||1/0,e=Math.min(v||33,t)},fps:function(g){r=1e3/(g||240),s=c.time*1e3+r},add:function(g,v,m){var y=v?function(b,x,C,A){g(b,x,C,A),c.remove(y)}:g;return c.remove(g),o[m?"unshift":"push"](y),he(),y},remove:function(g,v){~(v=o.indexOf(g))&&o.splice(v,1)&&p>=v&&p--},_listeners:o},c}(),he=function(){return!Ae&&st.wake()},L={},Mr=/^[\d.\-M][\d.\-,\s]/,Tr=/["']/g,Er=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,s=i.length,o,a,h;r<s;r++)a=i[r],o=r!==s-1?a.lastIndexOf(","):a.length,h=a.substr(0,o),e[n]=isNaN(h)?h.replace(Tr,"").trim():+h,n=a.substr(o+1).trim();return e},Sr=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Pr=function(t){var e=(t+"").split("("),i=L[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Er(e[1])]:Sr(t).split(",").map(dn)):L._CE&&Mr.test(t)?L._CE("",t):i},Sn=function(t){return function(e){return 1-t(1-e)}},Pn=function l(t,e){for(var i=t._first,n;i;)i instanceof Q?l(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?l(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},Wt=function(t,e){return t&&(B(t)?t:L[t]||Pr(t))||e},qt=function(t,e,i,n){i===void 0&&(i=function(a){return 1-e(1-a)}),n===void 0&&(n=function(a){return a<.5?e(a*2)/2:1-e((1-a)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},s;return tt(t,function(o){L[o]=at[o]=r,L[s=o.toLowerCase()]=i;for(var a in r)L[s+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=L[o+"."+a]=r[a]}),r},On=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},je=function l(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),s=r/ti*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*ir((u-s)*r)+1},a=t==="out"?o:t==="in"?function(h){return 1-o(1-h)}:On(o);return r=ti/r,a.config=function(h,u){return l(t,h,u)},a},We=function l(t,e){e===void 0&&(e=1.70158);var i=function(s){return s?--s*s*((e+1)*s+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:On(i);return n.config=function(r){return l(t,r)},n};tt("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var e=t<5?t+1:t;qt(l+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;qt("Elastic",je("in"),je("out"),je());(function(l,t){var e=1/t,i=2*e,n=2.5*e,r=function(o){return o<e?l*o*o:o<i?l*Math.pow(o-1.5/t,2)+.75:o<n?l*(o-=2.25/t)*o+.9375:l*Math.pow(o-2.625/t,2)+.984375};qt("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);qt("Expo",function(l){return l?Math.pow(2,10*(l-1)):0});qt("Circ",function(l){return-(Zi(1-l*l)-1)});qt("Sine",function(l){return l===1?1:-er(l*Zn)+1});qt("Back",We("in"),We("out"),We());L.SteppedEase=L.steps=at.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,s=1-$;return function(o){return((n*Se(0,s,o)|0)+r)*i}}};se.ease=L["quad.out"];tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return bi+=l+","+l+"Params,"});var kn=function(t,e){this.id=tr++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:un,this.set=e?e.getSetter:Ti},le=function(){function l(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ae(this,+e.duration,1,1),this.data=e.data,Y&&(this._ctx=Y,Y.data.push(this)),Ae||st.wake()}var t=l.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ae(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(he(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ye(this,i),!r._dp||r.parent||_n(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&yt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===$||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),cn(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$i(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$i(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?oe(this._tTime,r)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-$?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?$e(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-$?0:this._rts,this.totalTime(Se(-this._delay,this._tDur,n),!0),Ne(this),lr(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(he(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$&&(this._tTime-=$)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&yt(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Z(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$e(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=sr);var n=K;return K=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),K=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ri(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Ri(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(ct(this,i),Z(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Z(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-$:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-$)},t.eventCallback=function(i,n,r){var s=this.vars;return arguments.length>1?(n?(s[i]=n,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete s[i],this):s[i]},t.then=function(i){var n=this;return new Promise(function(r){var s=B(i)?i:fn,o=function(){var h=n.then;n.then=null,B(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=h),r(s),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},t.kill=function(){_e(this)},l}();gt(le.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$,_prom:0,_ps:!1,_rts:1});var Q=function(l){Qi(t,l);function t(i,n){var r;return i===void 0&&(i={}),r=l.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Z(i.sortChildren),U&&yt(i.parent||U,Mt(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&gn(Mt(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,s){return ve(0,arguments,this),this},e.from=function(n,r,s){return ve(1,arguments,this),this},e.fromTo=function(n,r,s,o){return ve(2,arguments,this),this},e.set=function(n,r,s){return r.duration=0,r.parent=this,me(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new H(n,r,ct(this,s),1),this},e.call=function(n,r,s){return yt(this,H.delayedCall(0,n,r),s)},e.staggerTo=function(n,r,s,o,a,h,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=h,s.onCompleteParams=u,s.parent=this,new H(n,s,ct(this,a)),this},e.staggerFrom=function(n,r,s,o,a,h,u){return s.runBackwards=1,me(s).immediateRender=Z(s.immediateRender),this.staggerTo(n,r,s,o,a,h,u)},e.staggerFromTo=function(n,r,s,o,a,h,u,c){return o.startAt=s,me(o).immediateRender=Z(o.immediateRender),this.staggerTo(n,r,o,a,h,u,c)},e.render=function(n,r,s){var o=this._time,a=this._dirty?this.totalDuration():this._tDur,h=this._dur,u=n<=0?0:j(n),c=this._zTime<0!=n<0&&(this._initted||!h),f,p,_,d,g,v,m,y,b,x,C,A;if(this!==U&&u>a&&n>=0&&(u=a),u!==this._tTime||s||c){if(o!==this._time&&h&&(u+=this._time-o,n+=this._time-o),f=u,b=this._start,y=this._ts,v=!y,c&&(h||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,g=h+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(g*100+n,r,s);if(f=j(u%g),u===a?(d=this._repeat,f=h):(d=~~(u/g),d&&d===u/g&&(f=h,d--),f>h&&(f=h)),x=oe(this._tTime,g),!o&&this._tTime&&x!==d&&(x=d),C&&d&1&&(f=h-f,A=1),d!==x&&!this._lock){var w=C&&x&1,M=w===(C&&d&1);if(d<x&&(w=!w),o=w?0:h,this._lock=1,this.render(o||(A?0:j(d*g)),r,!h)._lock=0,this._tTime=u,!r&&this.parent&&_t(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,a=this._tDur,M&&(this._lock=2,o=w?h:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Pn(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=fr(this,j(o),j(f)),m&&(u-=f-(f=m._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&f&&!r&&(_t(this,"onStart"),this._tTime!==u))return this;if(f>=o&&n>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(n,r,s);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,s),f!==this._time||!this._ts&&!v){m=0,_&&(u+=this._zTime=-$);break}}p=_}else{p=this._last;for(var T=n<0?n:f;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(n,r,s);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,r,s||K&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!v){m=0,_&&(u+=this._zTime=T?-$:$);break}}p=_}}if(m&&!r&&(this.pause(),m.render(f>=o?0:-$)._zTime=f>=o?1:-1,this._ts))return this._start=b,Ne(this),this.render(n,r,s);this._onUpdate&&!r&&_t(this,"onUpdate",!0),(u===a&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!h)&&(u===a&&this._ts>0||!u&&this._ts<0)&&$t(this,1),!r&&!(n<0&&!o)&&(u||o||!a)&&(_t(this,u===a&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<a&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var s=this;if(Pt(r)||(r=ct(this,r,n)),!(n instanceof le)){if(q(n))return n.forEach(function(o){return s.add(o,r)}),this;if(X(n))return this.addLabel(n,r);if(B(n))n=H.delayedCall(0,n);else return this}return this!==n?yt(this,n,r):this},e.getChildren=function(n,r,s,o){n===void 0&&(n=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-ft);for(var a=[],h=this._first;h;)h._start>=o&&(h instanceof H?r&&a.push(h):(s&&a.push(h),n&&a.push.apply(a,h.getChildren(!0,r,s)))),h=h._next;return a},e.getById=function(n){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===n)return r[s]},e.remove=function(n){return X(n)?this.removeLabel(n):B(n)?this.killTweensOf(n):(Be(this,n),n===this._recent&&(this._recent=this._last),jt(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=j(st.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),l.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=ct(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,s){var o=H.delayedCall(0,r||be,s);return o.data="isPause",this._hasPause=1,yt(this,o,ct(this,n))},e.removePause=function(n){var r=this._first;for(n=ct(this,n);r;)r._start===n&&r.data==="isPause"&&$t(r),r=r._next},e.killTweensOf=function(n,r,s){for(var o=this.getTweensOf(n,s),a=o.length;a--;)Dt!==o[a]&&o[a].kill(n,r);return this},e.getTweensOf=function(n,r){for(var s=[],o=pt(n),a=this._first,h=Pt(r),u;a;)a instanceof H?or(a._targets,o)&&(h?(!Dt||a._initted&&a._ts)&&a.globalTime(0)<=r&&a.globalTime(a.totalDuration())>r:!r||a.isActive())&&s.push(a):(u=a.getTweensOf(o,r)).length&&s.push.apply(s,u),a=a._next;return s},e.tweenTo=function(n,r){r=r||{};var s=this,o=ct(s,n),a=r,h=a.startAt,u=a.onStart,c=a.onStartParams,f=a.immediateRender,p,_=H.to(s,gt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(h&&"time"in h?h.time:s._time))/s.timeScale())||$,onStart:function(){if(s.pause(),!p){var g=r.duration||Math.abs((o-(h&&"time"in h?h.time:s._time))/s.timeScale());_._dur!==g&&ae(_,g,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,c||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(n,r,s){return this.tweenTo(r,gt({startAt:{time:ct(this,n)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Ui(this,ct(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Ui(this,ct(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+$)},e.shiftChildren=function(n,r,s){s===void 0&&(s=0);for(var o=this._first,a=this.labels,h;o;)o._start>=s&&(o._start+=n,o._end+=n),o=o._next;if(r)for(h in a)a[h]>=s&&(a[h]+=n);return jt(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return l.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),jt(this)},e.totalDuration=function(n){var r=0,s=this,o=s._last,a=ft,h,u,c;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(c=s.parent;o;)h=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>a&&s._sort&&o._ts&&!s._lock?(s._lock=1,yt(s,o,u-o._delay,1)._lock=0):a=u,u<0&&o._ts&&(r-=u,(!c&&!s._dp||c&&c.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),a=0),o._end>r&&o._ts&&(r=o._end),o=h;ae(s,s===U&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(n){if(U._ts&&(cn(U,$e(n,U)),ln=st.frame),st.frame>=Fi){Fi+=ot.autoSleep||120;var r=U._first;if((!r||!r._ts)&&ot.autoSleep&&st._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||st.sleep()}}},t}(le);gt(Q.prototype,{_lock:0,_hasPause:0,_forcing:0});var Or=function(t,e,i,n,r,s,o){var a=new et(this._pt,t,e,0,1,$n,null,r),h=0,u=0,c,f,p,_,d,g,v,m;for(a.b=i,a.e=n,i+="",n+="",(v=~n.indexOf("random("))&&(n=we(n)),s&&(m=[i,n],s(m,t,e),i=m[0],n=m[1]),f=i.match(Ge)||[];c=Ge.exec(n);)_=c[0],d=n.substring(h,c.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,a._pt={_next:a._pt,p:d||u===1?d:",",s:g,c:_.charAt(1)==="="?ie(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},h=Ge.lastIndex);return a.c=h<n.length?n.substring(h,n.length):"",a.fp=o,(rn.test(n)||v)&&(a.e=0),this._pt=a,a},Ai=function(t,e,i,n,r,s,o,a,h,u){B(n)&&(n=n(r||0,t,s));var c=t[e],f=i!=="get"?i:B(c)?h?t[e.indexOf("set")||!B(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():c,p=B(c)?h?Fr:Fn:Mi,_;if(X(n)&&(~n.indexOf("random(")&&(n=we(n)),n.charAt(1)==="="&&(_=ie(f,n)+(W(f)||0),(_||_===0)&&(n=_))),!u||f!==n||li)return!isNaN(f*n)&&n!==""?(_=new et(this._pt,t,e,+f||0,n-(f||0),typeof c=="boolean"?$r:zn,0,p),h&&(_.fp=h),o&&_.modifier(o,this,t),this._pt=_):(!c&&!(e in t)&&yi(e,n),Or.call(this,t,e,f,n,p,a||ot.stringFilter,h))},kr=function(t,e,i,n,r){if(B(t)&&(t=ye(t,r,e,i,n)),!At(t)||t.style&&t.nodeType||q(t)||en(t))return X(t)?ye(t,r,e,i,n):t;var s={},o;for(o in t)s[o]=ye(t[o],r,e,i,n);return s},Dn=function(t,e,i,n,r,s){var o,a,h,u;if(rt[t]&&(o=new rt[t]).init(r,o.rawVars?e[t]:kr(e[t],n,r,s,i),i,n,s)!==!1&&(i._pt=a=new et(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==te))for(h=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)h[o._props[u]]=a;return o},Dt,li,Ci=function l(t,e,i){var n=t.vars,r=n.ease,s=n.startAt,o=n.immediateRender,a=n.lazy,h=n.onUpdate,u=n.onUpdateParams,c=n.callbackScope,f=n.runBackwards,p=n.yoyoEase,_=n.keyframes,d=n.autoRevert,g=t._dur,v=t._startAt,m=t._targets,y=t.parent,b=y&&y.data==="nested"?y.vars.targets:m,x=t._overwrite==="auto"&&!gi,C=t.timeline,A,w,M,T,E,O,k,D,P,S,F,R,lt;if(C&&(!_||!r)&&(r="none"),t._ease=Wt(r,se.ease),t._yEase=p?Sn(Wt(p===!0?r:p,se.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!C&&!!n.runBackwards,!C||_&&!n.stagger){if(D=m[0]?Xt(m[0]).harness:0,R=D&&n[D.prop],A=ze(n,xi),v&&(v._zTime<0&&v.progress(1),e<0&&f&&o&&!d?v.render(-1,!0):v.revert(f&&g?Oe:rr),v._lazy=0),s){if($t(t._startAt=H.set(m,gt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!v&&Z(a),startAt:null,delay:0,onUpdate:h,onUpdateParams:u,callbackScope:c,stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(K||!o&&!d)&&t._startAt.revert(Oe),o&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&g&&!v){if(e&&(o=!1),M=gt({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Z(a),immediateRender:o,stagger:0,parent:y},A),R&&(M[D.prop]=R),$t(t._startAt=H.set(m,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(K?t._startAt.revert(Oe):t._startAt.render(-1,!0)),t._zTime=e,!o)l(t._startAt,$,$);else if(!e)return}for(t._pt=t._ptCache=0,a=g&&Z(a)||a&&!g,w=0;w<m.length;w++){if(E=m[w],k=E._gsap||wi(m)[w]._gsap,t._ptLookup[w]=S={},ni[k.id]&&Ft.length&&Fe(),F=b===m?w:b.indexOf(E),D&&(P=new D).init(E,R||A,t,F,b)!==!1&&(t._pt=T=new et(t._pt,E,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(ut){S[ut]=T}),P.priority&&(O=1)),!D||R)for(M in A)rt[M]&&(P=Dn(M,A,t,F,E,b))?P.priority&&(O=1):S[M]=T=Ai.call(t,E,M,"get",A[M],F,b,0,n.stringFilter);t._op&&t._op[w]&&t.kill(E,t._op[w]),x&&t._pt&&(Dt=t,U.killTweensOf(E,S,t.globalTime(e)),lt=!t.parent,Dt=0),t._pt&&a&&(ni[k.id]=1)}O&&Rn(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!lt,_&&e<=0&&C.render(ft,!0,!0)},Dr=function(t,e,i,n,r,s,o){var a=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,c,f;if(!a)for(a=t._ptCache[e]=[],c=t._ptLookup,f=t._targets.length;f--;){if(h=c[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return li=1,t.vars[e]="+=0",Ci(t,o),li=0,1;a.push(h)}for(f=a.length;f--;)u=a[f],h=u._pt||u,h.s=(n||n===0)&&!r?n:h.s+(n||0)+s*h.c,h.c=i-h.s,u.e&&(u.e=N(i)+W(u.e)),u.b&&(u.b=h.s+W(u.b))},Lr=function(t,e){var i=t[0]?Xt(t[0]).harness:0,n=i&&i.aliases,r,s,o,a;if(!n)return e;r=Kt({},e);for(s in n)if(s in r)for(a=n[s].split(","),o=a.length;o--;)r[a[o]]=r[s];return r},Ir=function(t,e,i,n){var r=e.ease||n||"power1.inOut",s,o;if(q(e))o=i[t]||(i[t]=[]),e.forEach(function(a,h){return o.push({t:h/(e.length-1)*100,v:a,e:r})});else for(s in e)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(t),v:e[s],e:r})},ye=function(t,e,i,n,r){return B(t)?t.call(e,i,n,r):X(t)&&~t.indexOf("random(")?we(t):t},Ln=bi+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",In={};tt(Ln+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return In[l]=1});var H=function(l){Qi(t,l);function t(i,n,r,s){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=l.call(this,s?n:me(n))||this;var a=o.vars,h=a.duration,u=a.delay,c=a.immediateRender,f=a.stagger,p=a.overwrite,_=a.keyframes,d=a.defaults,g=a.scrollTrigger,v=a.yoyoEase,m=n.parent||U,y=(q(i)||en(i)?Pt(i[0]):"length"in n)?[i]:pt(i),b,x,C,A,w,M,T,E;if(o._targets=y.length?wi(y):Ie("GSAP target "+i+" not found. https://greensock.com",!ot.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||Pe(h)||Pe(u)){if(n=o.vars,b=o.timeline=new Q({data:"nested",defaults:d||{},targets:m&&m.data==="nested"?m.vars.targets:y}),b.kill(),b.parent=b._dp=Mt(o),b._start=0,f||Pe(h)||Pe(u)){if(A=y.length,T=f&&xn(f),At(f))for(w in f)~Ln.indexOf(w)&&(E||(E={}),E[w]=f[w]);for(x=0;x<A;x++)C=ze(n,In),C.stagger=0,v&&(C.yoyoEase=v),E&&Kt(C,E),M=y[x],C.duration=+ye(h,Mt(o),x,M,y),C.delay=(+ye(u,Mt(o),x,M,y)||0)-o._delay,!f&&A===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),b.to(M,C,T?T(x,M,y):0),b._ease=L.none;b.duration()?h=u=0:o.timeline=0}else if(_){me(gt(b.vars.defaults,{ease:"none"})),b._ease=Wt(_.ease||n.ease||"none");var O=0,k,D,P;if(q(_))_.forEach(function(S){return b.to(y,S,">")}),b.duration();else{C={};for(w in _)w==="ease"||w==="easeEach"||Ir(w,_[w],C,_.easeEach);for(w in C)for(k=C[w].sort(function(S,F){return S.t-F.t}),O=0,x=0;x<k.length;x++)D=k[x],P={ease:D.e,duration:(D.t-(x?k[x-1].t:0))/100*h},P[w]=D.v,b.to(y,P,O),O+=P.duration;b.duration()<h&&b.to({},{duration:h-b.duration()})}}h||o.duration(h=b.duration())}else o.timeline=0;return p===!0&&!gi&&(Dt=Mt(o),U.killTweensOf(y),Dt=0),yt(m,Mt(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(c||!h&&!_&&o._start===j(m._time)&&Z(c)&&ur(Mt(o))&&m.data!=="nested")&&(o._tTime=-$,o.render(Math.max(0,-u)||0)),g&&gn(Mt(o),g),o}var e=t.prototype;return e.render=function(n,r,s){var o=this._time,a=this._tDur,h=this._dur,u=n<0,c=n>a-$&&!u?a:n<$?0:n,f,p,_,d,g,v,m,y,b;if(!h)dr(this,n,r,s);else if(c!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=c,y=this.timeline,this._repeat){if(d=h+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+n,r,s);if(f=j(c%d),c===a?(_=this._repeat,f=h):(_=~~(c/d),_&&_===c/d&&(f=h,_--),f>h&&(f=h)),v=this._yoyo&&_&1,v&&(b=this._yEase,f=h-f),g=oe(this._tTime,d),f===o&&!s&&this._initted)return this._tTime=c,this;_!==g&&(y&&this._yEase&&Pn(y,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=s=1,this.render(j(d*_),!0).invalidate()._lock=0))}if(!this._initted){if(mn(this,u?n:f,s,r,c))return this._tTime=0,this;if(o!==this._time)return this;if(h!==this._dur)return this.render(n,r,s)}if(this._tTime=c,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(b||this._ease)(f/h),this._from&&(this.ratio=m=1-m),f&&!o&&!r&&(_t(this,"onStart"),this._tTime!==c))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;y&&y.render(n<0?n:!f&&v?-$:y._dur*y._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&ri(this,n,r,s),_t(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!r&&this.parent&&_t(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(u&&!this._onUpdate&&ri(this,n,!0,!0),(n||!h)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&$t(this,1),!r&&!(u&&!o)&&(c||o||v)&&(_t(this,c===a?"onComplete":"onReverseComplete",!0),this._prom&&!(c<a&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),l.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,s,o){Ae||st.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ci(this,a),h=this._ease(a/this._dur),Dr(this,n,r,s,o,h,a)?this.resetTo(n,r,s,o):(Ye(this,0),this.parent||pn(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_e(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Dt&&Dt.vars.overwrite!==!0)._first||_e(this),this.parent&&s!==this.timeline.totalDuration()&&ae(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,a=n?pt(n):o,h=this._ptLookup,u=this._pt,c,f,p,_,d,g,v;if((!r||r==="all")&&hr(o,a))return r==="all"&&(this._pt=0),_e(this);for(c=this._op=this._op||[],r!=="all"&&(X(r)&&(d={},tt(r,function(m){return d[m]=1}),r=d),r=Lr(o,r)),v=o.length;v--;)if(~a.indexOf(o[v])){f=h[v],r==="all"?(c[v]=r,_=f,p={}):(p=c[v]=c[v]||{},_=r);for(d in _)g=f&&f[d],g&&((!("kill"in g.d)||g.d.kill(d)===!0)&&Be(this,g,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&_e(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return ve(1,arguments)},t.delayedCall=function(n,r,s,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},t.fromTo=function(n,r,s){return ve(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,s){return U.killTweensOf(n,r,s)},t}(le);gt(H.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tt("staggerTo,staggerFrom,staggerFromTo",function(l){H[l]=function(){var t=new Q,e=oi.call(arguments,0);return e.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,e)}});var Mi=function(t,e,i){return t[e]=i},Fn=function(t,e,i){return t[e](i)},Fr=function(t,e,i,n){return t[e](n.fp,i)},zr=function(t,e,i){return t.setAttribute(e,i)},Ti=function(t,e){return B(t[e])?Fn:mi(t[e])&&t.setAttribute?zr:Mi},zn=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},$r=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},$n=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Ei=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Rr=function(t,e,i,n){for(var r=this._pt,s;r;)s=r._next,r.p===n&&r.modifier(t,e,i),r=s},Ur=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Be(this,e,"_pt"):e.dep||(i=1),e=n;return!i},Vr=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Rn=function(t){for(var e=t._pt,i,n,r,s;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:s)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:s=e,e=i}t._pt=r},et=function(){function l(e,i,n,r,s,o,a,h,u){this.t=i,this.s=r,this.c=s,this.p=n,this.r=o||zn,this.d=a||this,this.set=h||Mi,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=l.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Vr,this.m=i,this.mt=r,this.tween=n},l}();tt(bi+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return xi[l]=1});at.TweenMax=at.TweenLite=H;at.TimelineLite=at.TimelineMax=Q;U=new Q({sortChildren:!1,defaults:se,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ot.stringFilter=En;var ue=[],De={},Br=[],Bi=0,Ke=function(t){return(De[t]||Br).map(function(e){return e()})},ui=function(){var t=Date.now(),e=[];t-Bi>2&&(Ke("matchMediaInit"),ue.forEach(function(i){var n=i.queries,r=i.conditions,s,o,a,h;for(o in n)s=dt.matchMedia(n[o]).matches,s&&(a=1),s!==r[o]&&(r[o]=s,h=1);h&&(i.revert(),a&&e.push(i))}),Ke("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),Bi=t,Ke("matchMedia"))},Un=function(){function l(e,i){this.selector=i&&ai(i),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=l.prototype;return t.add=function(i,n,r){B(i)&&(r=n,n=i,i=B);var s=this,o=function(){var h=Y,u=s.selector,c;return h&&h!==s&&h.data.push(s),r&&(s.selector=ai(r)),Y=s,c=n.apply(s,arguments),B(c)&&s._r.push(c),Y=h,s.selector=u,s.isReverted=!1,c};return s.last=o,i===B?o(s):i?s[i]=o:o},t.ignore=function(i){var n=Y;Y=null,i(this),Y=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof l?i.push.apply(i,n.getTweens()):n instanceof H&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i){var s=this.getTweens();this.data.forEach(function(a){a.data==="isFlip"&&(a.revert(),a.getChildren(!0,!0,!1).forEach(function(h){return s.splice(s.indexOf(h),1)}))}),s.map(function(a){return{g:a.globalTime(0),t:a}}).sort(function(a,h){return h.g-a.g||-1}).forEach(function(a){return a.t.revert(i)}),this.data.forEach(function(a){return!(a instanceof le)&&a.revert&&a.revert(i)}),this._r.forEach(function(a){return a(i,r)}),this.isReverted=!0}else this.data.forEach(function(a){return a.kill&&a.kill()});if(this.clear(),n){var o=ue.indexOf(this);~o&&ue.splice(o,1)}},t.revert=function(i){this.kill(i||{})},l}(),Nr=function(){function l(e){this.contexts=[],this.scope=e}var t=l.prototype;return t.add=function(i,n,r){At(i)||(i={matches:i});var s=new Un(0,r||this.scope),o=s.conditions={},a,h,u;this.contexts.push(s),n=s.add("onMatch",n),s.queries=i;for(h in i)h==="all"?u=1:(a=dt.matchMedia(i[h]),a&&(ue.indexOf(s)<0&&ue.push(s),(o[h]=a.matches)&&(u=1),a.addListener?a.addListener(ui):a.addEventListener("change",ui)));return u&&n(s),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},l}(),Re={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Ar(n)})},timeline:function(t){return new Q(t)},getTweensOf:function(t,e){return U.getTweensOf(t,e)},getProperty:function(t,e,i,n){X(t)&&(t=pt(t)[0]);var r=Xt(t||{}).get,s=i?fn:dn;return i==="native"&&(i=""),t&&(e?s((rt[e]&&rt[e].get||r)(t,e,i,n)):function(o,a,h){return s((rt[o]&&rt[o].get||r)(t,o,a,h))})},quickSetter:function(t,e,i){if(t=pt(t),t.length>1){var n=t.map(function(u){return ht.quickSetter(u,e,i)}),r=n.length;return function(u){for(var c=r;c--;)n[c](u)}}t=t[0]||{};var s=rt[e],o=Xt(t),a=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(u){var c=new s;te._pt=0,c.init(t,i?u+i:u,te,0,[t]),c.render(1,c),te._pt&&Ei(1,te)}:o.set(t,a);return s?h:function(u){return h(t,a,i?u+i:u,o,1)}},quickTo:function(t,e,i){var n,r=ht.to(t,Kt((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),s=function(a,h,u){return r.resetTo(e,a,h,u)};return s.tween=r,s},isTweening:function(t){return U.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Wt(t.ease,se.ease)),zi(se,t||{})},config:function(t){return zi(ot,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,s=t.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!rt[o]&&!at[o]&&Ie(e+" effect requires "+o+" plugin.")}),He[e]=function(o,a,h){return i(pt(o),gt(a||{},r),h)},s&&(Q.prototype[e]=function(o,a,h){return this.add(He[e](o,At(a)?a:(h=a)&&{},this),h)})},registerEase:function(t,e){L[t]=Wt(e)},parseEase:function(t,e){return arguments.length?Wt(t,e):L},getById:function(t){return U.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Q(t),n,r;for(i.smoothChildTiming=Z(t.smoothChildTiming),U.remove(i),i._dp=0,i._time=i._tTime=U._time,n=U._first;n;)r=n._next,(e||!(!n._dur&&n instanceof H&&n.vars.onComplete===n._targets[0]))&&yt(i,n,n._start-n._delay),n=r;return yt(U,i,0),i},context:function(t,e){return t?new Un(t,e):Y},matchMedia:function(t){return new Nr(t)},matchMediaRefresh:function(){return ue.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||ui()},addEventListener:function(t,e){var i=De[t]||(De[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=De[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:xr,wrapYoyo:br,distribute:xn,random:wn,snap:bn,normalize:yr,getUnit:W,clamp:_r,splitColor:Mn,toArray:pt,selector:ai,mapRange:Cn,pipe:mr,unitize:vr,interpolate:wr,shuffle:yn},install:an,effects:He,ticker:st,updateRoot:Q.updateRoot,plugins:rt,globalTimeline:U,core:{PropTween:et,globals:hn,Tween:H,Timeline:Q,Animation:le,getCache:Xt,_removeLinkedListItem:Be,reverting:function(){return K},context:function(t){return t&&Y&&(Y.data.push(t),t._ctx=Y),Y},suppressOverwrites:function(t){return gi=t}}};tt("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return Re[l]=H[l]});st.add(Q.updateRoot);te=Re.to({},{duration:0});var Yr=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Gr=function(t,e){var i=t._targets,n,r,s;for(n in e)for(r=i.length;r--;)s=t._ptLookup[r][n],s&&(s=s.d)&&(s._pt&&(s=Yr(s,n)),s&&s.modifier&&s.modifier(e[n],t,i[r],n))},qe=function(t,e){return{name:t,rawVars:1,init:function(n,r,s){s._onInit=function(o){var a,h;if(X(r)&&(a={},tt(r,function(u){return a[u]=1}),r=a),e){a={};for(h in r)a[h]=e(r[h]);r=a}Gr(o,r)}}}},ht=Re.registerPlugin({name:"attr",init:function(t,e,i,n,r){var s,o,a;this.tween=i;for(s in e)a=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(a||0)+"",e[s],n,r,0,0,s),o.op=s,o.b=a,this._props.push(s)},render:function(t,e){for(var i=e._pt;i;)K?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},qe("roundProps",hi),qe("modifiers"),qe("snap",bn))||Re;H.version=Q.version=ht.version="3.11.4";on=1;tn()&&he();L.Power0;L.Power1;L.Power2;L.Power3;L.Power4;L.Linear;L.Quad;L.Cubic;L.Quart;L.Quint;L.Strong;L.Elastic;L.Back;L.SteppedEase;L.Bounce;L.Sine;L.Expo;L.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ni,Lt,ne,Si,Ht,Yi,Pi,Hr=function(){return typeof window<"u"},Ot={},Gt=180/Math.PI,re=Math.PI/180,Jt=Math.atan2,Gi=1e8,Oi=/([A-Z])/g,Xr=/(left|right|width|margin|padding|x)/i,jr=/[\s,\(]\S/,St={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ci=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wr=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Kr=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qr=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Vn=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Bn=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Jr=function(t,e,i){return t.style[e]=i},Qr=function(t,e,i){return t.style.setProperty(e,i)},Zr=function(t,e,i){return t._gsap[e]=i},ts=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},es=function(t,e,i,n,r){var s=t._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},is=function(t,e,i,n,r){var s=t._gsap;s[e]=i,s.renderTransform(r,s)},V="transform",mt=V+"Origin",ns=function(t,e){var i=this,n=this.target,r=n.style;if(t in Ot){if(this.tfm=this.tfm||{},t!=="transform"&&(t=St[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return i.tfm[s]=Et(n,s)}):this.tfm[t]=n._gsap.x?n._gsap[t]:Et(n,t)),this.props.indexOf(V)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(mt,e,"")),t=V}(r||e)&&this.props.push(t,e,r[t])},Nn=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},rs=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,s;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].replace(Oi,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)n[s]=this.tfm[s];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Pi(),r&&!r.isStart&&!i[V]&&(Nn(i),n.uncache=1)}},Yn=function(t,e){var i={target:t,props:[],revert:rs,save:ns};return e&&e.split(",").forEach(function(n){return i.save(n)}),i},Gn,di=function(t,e){var i=Lt.createElementNS?Lt.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Lt.createElement(t);return i.style?i:Lt.createElement(t)},bt=function l(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Oi,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&l(t,ce(e)||e,1)||""},Hi="O,Moz,ms,Ms,Webkit".split(","),ce=function(t,e,i){var n=e||Ht,r=n.style,s=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(Hi[s]+t in r););return s<0?null:(s===3?"ms":s>=0?Hi[s]:"")+t},fi=function(){Hr()&&window.document&&(Ni=window,Lt=Ni.document,ne=Lt.documentElement,Ht=di("div")||{style:{}},di("div"),V=ce(V),mt=V+"Origin",Ht.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gn=!!ce("perspective"),Pi=ht.core.reverting,Si=1)},Je=function l(t){var e=di("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,s;if(ne.appendChild(e),e.appendChild(this),this.style.display="block",t)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=l}catch{}else this._gsapBBox&&(s=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ne.removeChild(e),this.style.cssText=r,s},Xi=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Hn=function(t){var e;try{e=t.getBBox()}catch{e=Je.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Je||(e=Je.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Xi(t,["x","cx","x1"])||0,y:+Xi(t,["y","cy","y1"])||0,width:0,height:0}:e},Xn=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Hn(t))},Ce=function(t,e){if(e){var i=t.style;e in Ot&&e!==mt&&(e=V),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(Oi,"-$1").toLowerCase())):i.removeAttribute(e)}},It=function(t,e,i,n,r,s){var o=new et(t._pt,e,i,0,1,s?Bn:Vn);return t._pt=o,o.b=n,o.e=r,t._props.push(i),o},ji={deg:1,rad:1,turn:1},ss={grid:1,flex:1},Rt=function l(t,e,i,n){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",o=Ht.style,a=Xr.test(e),h=t.tagName.toLowerCase()==="svg",u=(h?"client":"offset")+(a?"Width":"Height"),c=100,f=n==="px",p=n==="%",_,d,g,v;return n===s||!r||ji[n]||ji[s]?r:(s!=="px"&&!f&&(r=l(t,e,i,"px")),v=t.getCTM&&Xn(t),(p||s==="%")&&(Ot[e]||~e.indexOf("adius"))?(_=v?t.getBBox()[a?"width":"height"]:t[u],N(p?r/_*c:r/100*_)):(o[a?"width":"height"]=c+(f?s:n),d=~e.indexOf("adius")||n==="em"&&t.appendChild&&!h?t:t.parentNode,v&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===Lt||!d.appendChild)&&(d=Lt.body),g=d._gsap,g&&p&&g.width&&a&&g.time===st.time&&!g.uncache?N(r/g.width*c):((p||s==="%")&&!ss[bt(d,"display")]&&(o.position=bt(t,"position")),d===t&&(o.position="static"),d.appendChild(Ht),_=Ht[u],d.removeChild(Ht),o.position="absolute",a&&p&&(g=Xt(d),g.time=st.time,g.width=d[u]),N(f?_*r/c:_&&r?c/_*r:0))))},Et=function(t,e,i,n){var r;return Si||fi(),e in St&&e!=="transform"&&(e=St[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ot[e]&&e!=="transform"?(r=Te(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ve(bt(t,mt))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ue[e]&&Ue[e](t,e,i)||bt(t,e)||un(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Rt(t,e,r,i)+i:r},os=function(t,e,i,n){if(!i||i==="none"){var r=ce(e,t,1),s=r&&bt(t,r,1);s&&s!==i?(e=r,i=s):e==="borderColor"&&(i=bt(t,"borderTopColor"))}var o=new et(this._pt,t.style,e,0,1,$n),a=0,h=0,u,c,f,p,_,d,g,v,m,y,b,x;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=bt(t,e)||n,t.style[e]=i),u=[i,n],En(u),i=u[0],n=u[1],f=i.match(Zt)||[],x=n.match(Zt)||[],x.length){for(;c=Zt.exec(n);)g=c[0],m=n.substring(a,c.index),_?_=(_+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(_=1),g!==(d=f[h++]||"")&&(p=parseFloat(d)||0,b=d.substr((p+"").length),g.charAt(1)==="="&&(g=ie(p,g)+b),v=parseFloat(g),y=g.substr((v+"").length),a=Zt.lastIndex-y.length,y||(y=y||ot.units[e]||b,a===n.length&&(n+=y,o.e+=y)),b!==y&&(p=Rt(t,e,d,y)||0),o._pt={_next:o._pt,p:m||h===1?m:",",s:p,c:v-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=a<n.length?n.substring(a,n.length):""}else o.r=e==="display"&&n==="none"?Bn:Vn;return rn.test(n)&&(o.e=0),this._pt=o,o},Wi={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},as=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Wi[i]||i,e[1]=Wi[n]||n,e.join(" ")},hs=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,s=i._gsap,o,a,h;if(r==="all"||r===!0)n.cssText="",a=1;else for(r=r.split(","),h=r.length;--h>-1;)o=r[h],Ot[o]&&(a=1,o=o==="transformOrigin"?mt:V),Ce(i,o);a&&(Ce(i,V),s&&(s.svg&&i.removeAttribute("transform"),Te(i,1),s.uncache=1,Nn(n)))}},Ue={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var s=t._pt=new et(t._pt,e,i,0,0,hs);return s.u=n,s.pr=-10,s.tween=r,t._props.push(i),1}}},Me=[1,0,0,1,0,0],jn={},Wn=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ki=function(t){var e=bt(t,V);return Wn(e)?Me:e.substr(7).match(nn).map(N)},ki=function(t,e){var i=t._gsap||Xt(t),n=t.style,r=Ki(t),s,o,a,h;return i.svg&&t.getAttribute("transform")?(a=t.transform.baseVal.consolidate().matrix,r=[a.a,a.b,a.c,a.d,a.e,a.f],r.join(",")==="1,0,0,1,0,0"?Me:r):(r===Me&&!t.offsetParent&&t!==ne&&!i.svg&&(a=n.display,n.display="block",s=t.parentNode,(!s||!t.offsetParent)&&(h=1,o=t.nextElementSibling,ne.appendChild(t)),r=Ki(t),a?n.display=a:Ce(t,"display"),h&&(o?s.insertBefore(t,o):s?s.appendChild(t):ne.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},pi=function(t,e,i,n,r,s){var o=t._gsap,a=r||ki(t,!0),h=o.xOrigin||0,u=o.yOrigin||0,c=o.xOffset||0,f=o.yOffset||0,p=a[0],_=a[1],d=a[2],g=a[3],v=a[4],m=a[5],y=e.split(" "),b=parseFloat(y[0])||0,x=parseFloat(y[1])||0,C,A,w,M;i?a!==Me&&(A=p*g-_*d)&&(w=b*(g/A)+x*(-d/A)+(d*m-g*v)/A,M=b*(-_/A)+x*(p/A)-(p*m-_*v)/A,b=w,x=M):(C=Hn(t),b=C.x+(~y[0].indexOf("%")?b/100*C.width:b),x=C.y+(~(y[1]||y[0]).indexOf("%")?x/100*C.height:x)),n||n!==!1&&o.smooth?(v=b-h,m=x-u,o.xOffset=c+(v*p+m*d)-v,o.yOffset=f+(v*_+m*g)-m):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!n,o.origin=e,o.originIsAbsolute=!!i,t.style[mt]="0px 0px",s&&(It(s,o,"xOrigin",h,b),It(s,o,"yOrigin",u,x),It(s,o,"xOffset",c,o.xOffset),It(s,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",b+" "+x)},Te=function(t,e){var i=t._gsap||new kn(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,s="px",o="deg",a=getComputedStyle(t),h=bt(t,mt)||"0",u,c,f,p,_,d,g,v,m,y,b,x,C,A,w,M,T,E,O,k,D,P,S,F,R,lt,ut,de,Vt,Ii,Ct,Bt;return u=c=f=d=g=v=m=y=b=0,p=_=1,i.svg=!!(t.getCTM&&Xn(t)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(n[V]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[V]!=="none"?a[V]:"")),n.scale=n.rotate=n.translate="none"),A=ki(t,i.svg),i.svg&&(i.uncache?(R=t.getBBox(),h=i.xOrigin-R.x+"px "+(i.yOrigin-R.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),pi(t,F||h,!!F||i.originIsAbsolute,i.smooth!==!1,A)),x=i.xOrigin||0,C=i.yOrigin||0,A!==Me&&(E=A[0],O=A[1],k=A[2],D=A[3],u=P=A[4],c=S=A[5],A.length===6?(p=Math.sqrt(E*E+O*O),_=Math.sqrt(D*D+k*k),d=E||O?Jt(O,E)*Gt:0,m=k||D?Jt(k,D)*Gt+d:0,m&&(_*=Math.abs(Math.cos(m*re))),i.svg&&(u-=x-(x*E+C*k),c-=C-(x*O+C*D))):(Bt=A[6],Ii=A[7],ut=A[8],de=A[9],Vt=A[10],Ct=A[11],u=A[12],c=A[13],f=A[14],w=Jt(Bt,Vt),g=w*Gt,w&&(M=Math.cos(-w),T=Math.sin(-w),F=P*M+ut*T,R=S*M+de*T,lt=Bt*M+Vt*T,ut=P*-T+ut*M,de=S*-T+de*M,Vt=Bt*-T+Vt*M,Ct=Ii*-T+Ct*M,P=F,S=R,Bt=lt),w=Jt(-k,Vt),v=w*Gt,w&&(M=Math.cos(-w),T=Math.sin(-w),F=E*M-ut*T,R=O*M-de*T,lt=k*M-Vt*T,Ct=D*T+Ct*M,E=F,O=R,k=lt),w=Jt(O,E),d=w*Gt,w&&(M=Math.cos(w),T=Math.sin(w),F=E*M+O*T,R=P*M+S*T,O=O*M-E*T,S=S*M-P*T,E=F,P=R),g&&Math.abs(g)+Math.abs(d)>359.9&&(g=d=0,v=180-v),p=N(Math.sqrt(E*E+O*O+k*k)),_=N(Math.sqrt(S*S+Bt*Bt)),w=Jt(P,S),m=Math.abs(w)>2e-4?w*Gt:0,b=Ct?1/(Ct<0?-Ct:Ct):0),i.svg&&(F=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Wn(bt(t,V)),F&&t.setAttribute("transform",F))),Math.abs(m)>90&&Math.abs(m)<270&&(r?(p*=-1,m+=d<=0?180:-180,d+=d<=0?180:-180):(_*=-1,m+=m<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+s,i.y=c-((i.yPercent=c&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-c)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=N(p),i.scaleY=N(_),i.rotation=N(d)+o,i.rotationX=N(g)+o,i.rotationY=N(v)+o,i.skewX=m+o,i.skewY=y+o,i.transformPerspective=b+s,(i.zOrigin=parseFloat(h.split(" ")[2])||0)&&(n[mt]=Ve(h)),i.xOffset=i.yOffset=0,i.force3D=ot.force3D,i.renderTransform=i.svg?us:Gn?Kn:ls,i.uncache=0,i},Ve=function(t){return(t=t.split(" "))[0]+" "+t[1]},Qe=function(t,e,i){var n=W(e);return N(parseFloat(e)+parseFloat(Rt(t,"x",i+"px",n)))+n},ls=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Kn(t,e)},Nt="0deg",fe="0px",Yt=") ",Kn=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,a=i.z,h=i.rotation,u=i.rotationY,c=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,d=i.scaleY,g=i.transformPerspective,v=i.force3D,m=i.target,y=i.zOrigin,b="",x=v==="auto"&&t&&t!==1||v===!0;if(y&&(c!==Nt||u!==Nt)){var C=parseFloat(u)*re,A=Math.sin(C),w=Math.cos(C),M;C=parseFloat(c)*re,M=Math.cos(C),s=Qe(m,s,A*M*-y),o=Qe(m,o,-Math.sin(C)*-y),a=Qe(m,a,w*M*-y+y)}g!==fe&&(b+="perspective("+g+Yt),(n||r)&&(b+="translate("+n+"%, "+r+"%) "),(x||s!==fe||o!==fe||a!==fe)&&(b+=a!==fe||x?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+Yt),h!==Nt&&(b+="rotate("+h+Yt),u!==Nt&&(b+="rotateY("+u+Yt),c!==Nt&&(b+="rotateX("+c+Yt),(f!==Nt||p!==Nt)&&(b+="skew("+f+", "+p+Yt),(_!==1||d!==1)&&(b+="scale("+_+", "+d+Yt),m.style[V]=b||"translate(0, 0)"},us=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,a=i.rotation,h=i.skewX,u=i.skewY,c=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,d=i.yOrigin,g=i.xOffset,v=i.yOffset,m=i.forceCSS,y=parseFloat(s),b=parseFloat(o),x,C,A,w,M;a=parseFloat(a),h=parseFloat(h),u=parseFloat(u),u&&(u=parseFloat(u),h+=u,a+=u),a||h?(a*=re,h*=re,x=Math.cos(a)*c,C=Math.sin(a)*c,A=Math.sin(a-h)*-f,w=Math.cos(a-h)*f,h&&(u*=re,M=Math.tan(h-u),M=Math.sqrt(1+M*M),A*=M,w*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),x*=M,C*=M)),x=N(x),C=N(C),A=N(A),w=N(w)):(x=c,w=f,C=A=0),(y&&!~(s+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(y=Rt(p,"x",s,"px"),b=Rt(p,"y",o,"px")),(_||d||g||v)&&(y=N(y+_-(_*x+d*A)+g),b=N(b+d-(_*C+d*w)+v)),(n||r)&&(M=p.getBBox(),y=N(y+n/100*M.width),b=N(b+r/100*M.height)),M="matrix("+x+","+C+","+A+","+w+","+y+","+b+")",p.setAttribute("transform",M),m&&(p.style[V]=M)},cs=function(t,e,i,n,r){var s=360,o=X(r),a=parseFloat(r)*(o&&~r.indexOf("rad")?Gt:1),h=a-n,u=n+h+"deg",c,f;return o&&(c=r.split("_")[1],c==="short"&&(h%=s,h!==h%(s/2)&&(h+=h<0?s:-s)),c==="cw"&&h<0?h=(h+s*Gi)%s-~~(h/s)*s:c==="ccw"&&h>0&&(h=(h-s*Gi)%s-~~(h/s)*s)),t._pt=f=new et(t._pt,e,i,n,h,Wr),f.e=u,f.u="deg",t._props.push(i),f},qi=function(t,e){for(var i in e)t[i]=e[i];return t},ds=function(t,e,i){var n=qi({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,a,h,u,c,f,p,_;n.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),s[V]=e,o=Te(i,1),Ce(i,V),i.setAttribute("transform",h)):(h=getComputedStyle(i)[V],s[V]=e,o=Te(i,1),s[V]=h);for(a in Ot)h=n[a],u=o[a],h!==u&&r.indexOf(a)<0&&(p=W(h),_=W(u),c=p!==_?Rt(i,a,h,_):parseFloat(h),f=parseFloat(u),t._pt=new et(t._pt,o,a,c,f-c,ci),t._pt.u=_||0,t._props.push(a));qi(o,n)};tt("padding,margin,Width,Radius",function(l,t){var e="Top",i="Right",n="Bottom",r="Left",s=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(o){return t<2?l+o:"border"+o+l});Ue[t>1?"border"+l:l]=function(o,a,h,u,c){var f,p;if(arguments.length<4)return f=s.map(function(_){return Et(o,_,h)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},s.forEach(function(_,d){return p[_]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(a,p,c)}});var qn={name:"css",register:fi,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var s=this._props,o=t.style,a=i.vars.startAt,h,u,c,f,p,_,d,g,v,m,y,b,x,C,A,w;Si||fi(),this.styles=this.styles||Yn(t),w=this.styles.props,this.tween=i;for(d in e)if(d!=="autoRound"&&(u=e[d],!(rt[d]&&Dn(d,e,i,n,t,r)))){if(p=typeof u,_=Ue[d],p==="function"&&(u=u.call(i,n,t,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=we(u)),_)_(this,t,d,u,i)&&(A=1);else if(d.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",zt.lastIndex=0,zt.test(h)||(g=W(h),v=W(u)),v?g!==v&&(h=Rt(t,d,h,v)+v):g&&(u+=g),this.add(o,"setProperty",h,u,n,r,0,0,d),s.push(d),w.push(d,0,o[d]);else if(p!=="undefined"){if(a&&d in a?(h=typeof a[d]=="function"?a[d].call(i,n,t,r):a[d],X(h)&&~h.indexOf("random(")&&(h=we(h)),W(h+"")||(h+=ot.units[d]||W(Et(t,d))||""),(h+"").charAt(1)==="="&&(h=Et(t,d))):h=Et(t,d),f=parseFloat(h),m=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),c=parseFloat(u),d in St&&(d==="autoAlpha"&&(f===1&&Et(t,"visibility")==="hidden"&&c&&(f=0),w.push("visibility",0,o.visibility),It(this,o,"visibility",f?"inherit":"hidden",c?"inherit":"hidden",!c)),d!=="scale"&&d!=="transform"&&(d=St[d],~d.indexOf(",")&&(d=d.split(",")[0]))),y=d in Ot,y){if(this.styles.save(d),b||(x=t._gsap,x.renderTransform&&!e.parseTransform||Te(t,e.parseTransform),C=e.smoothOrigin!==!1&&x.smooth,b=this._pt=new et(this._pt,o,V,0,1,x.renderTransform,x,0,-1),b.dep=1),d==="scale")this._pt=new et(this._pt,x,"scaleY",x.scaleY,(m?ie(x.scaleY,m+c):c)-x.scaleY||0,ci),this._pt.u=0,s.push("scaleY",d),d+="X";else if(d==="transformOrigin"){w.push(mt,0,o[mt]),u=as(u),x.svg?pi(t,u,0,C,0,this):(v=parseFloat(u.split(" ")[2])||0,v!==x.zOrigin&&It(this,x,"zOrigin",x.zOrigin,v),It(this,o,d,Ve(h),Ve(u)));continue}else if(d==="svgOrigin"){pi(t,u,1,C,0,this);continue}else if(d in jn){cs(this,x,d,f,m?ie(f,m+u):u);continue}else if(d==="smoothOrigin"){It(this,x,"smooth",x.smooth,u);continue}else if(d==="force3D"){x[d]=u;continue}else if(d==="transform"){ds(this,u,t);continue}}else d in o||(d=ce(d)||d);if(y||(c||c===0)&&(f||f===0)&&!jr.test(u)&&d in o)g=(h+"").substr((f+"").length),c||(c=0),v=W(u)||(d in ot.units?ot.units[d]:g),g!==v&&(f=Rt(t,d,h,v)),this._pt=new et(this._pt,y?x:o,d,f,(m?ie(f,m+c):c)-f,!y&&(v==="px"||d==="zIndex")&&e.autoRound!==!1?qr:ci),this._pt.u=v||0,g!==v&&v!=="%"&&(this._pt.b=h,this._pt.r=Kr);else if(d in o)os.call(this,t,d,h,m?m+u:u);else if(d in t)this.add(t,d,h||t[d],m?m+u:u,n,r);else if(d!=="parseTransform"){yi(d,u);continue}y||(d in o?w.push(d,0,o[d]):w.push(d,1,h||t[d])),s.push(d)}}A&&Rn(this)},render:function(t,e){if(e.tween._time||!Pi())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Et,aliases:St,getSetter:function(t,e,i){var n=St[e];return n&&n.indexOf(",")<0&&(e=n),e in Ot&&e!==mt&&(t._gsap.x||Et(t,"x"))?i&&Yi===i?e==="scale"?ts:Zr:(Yi=i||{})&&(e==="scale"?es:is):t.style&&!mi(t.style[e])?Jr:~e.indexOf("-")?Qr:Ti(t,e)},core:{_removeProperty:Ce,_getMatrix:ki}};ht.utils.checkPrefix=ce;ht.core.getStyleSaver=Yn;(function(l,t,e,i){var n=tt(l+","+t+","+e,function(r){Ot[r]=1});tt(t,function(r){ot.units[r]="deg",jn[r]=1}),St[n[13]]=l+","+t,tt(i,function(r){var s=r.split(":");St[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){ot.units[l]="px"});ht.registerPlugin(qn);var Jn=ht.registerPlugin(qn)||ht;Jn.core.Tween;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class wt{constructor(t,e,i,n,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),wt.nextNameID=wt.nextNameID||0,this.$name.id=`lil-gui-name-${++wt.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class fs extends wt{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function _i(l){let t,e;return(t=l.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const ps={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:_i,toHexString:_i},Ee={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},_s={isPrimitive:!1,match:l=>Array.isArray(l),fromHexString(l,t,e=1){const i=Ee.fromHexString(l);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([l,t,e],i=1){i=255/i;const n=l*i<<16^t*i<<8^e*i<<0;return Ee.toHexString(n)}},gs={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,t,e=1){const i=Ee.fromHexString(l);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:l,g:t,b:e},i=1){i=255/i;const n=l*i<<16^t*i<<8^e*i<<0;return Ee.toHexString(n)}},ms=[ps,Ee,_s,gs];function vs(l){return ms.find(t=>t.match(l))}class ys extends wt{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=vs(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=_i(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ze extends wt{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class xs extends wt{constructor(t,e,i,n,r,s){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let m=parseFloat(this.$input.value);isNaN(m)||(this._stepExplicit&&(m=this._snap(m)),this.setValue(this._clamp(m)))},i=m=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+m),this.$input.value=this.getValue())},n=m=>{m.key==="Enter"&&this.$input.blur(),m.code==="ArrowUp"&&(m.preventDefault(),i(this._step*this._arrowKeyMultiplier(m))),m.code==="ArrowDown"&&(m.preventDefault(),i(this._step*this._arrowKeyMultiplier(m)*-1))},r=m=>{this._inputFocused&&(m.preventDefault(),i(this._step*this._normalizeMouseWheel(m)))};let s=!1,o,a,h,u,c;const f=5,p=m=>{o=m.clientX,a=h=m.clientY,s=!0,u=this.getValue(),c=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",d)},_=m=>{if(s){const y=m.clientX-o,b=m.clientY-a;Math.abs(b)>f?(m.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>f&&d()}if(!s){const y=m.clientY-h;c-=y*this._step*this._arrowKeyMultiplier(m),u+c>this._max?c=this._max-u:u+c<this._min&&(c=this._min-u),this._snapClampSetValue(u+c)}h=m.clientY},d=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",d)},g=()=>{this._inputFocused=!0},v=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",v)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(v,m,y,b,x)=>(v-m)/(y-m)*(x-b)+b,e=v=>{const m=this.$slider.getBoundingClientRect();let y=t(v,m.left,m.right,this._min,this._max);this._snapClampSetValue(y)},i=v=>{this._setDraggingStyle(!0),e(v.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=v=>{e(v.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let s=!1,o,a;const h=v=>{v.preventDefault(),this._setDraggingStyle(!0),e(v.touches[0].clientX),s=!1},u=v=>{v.touches.length>1||(this._hasScrollBar?(o=v.touches[0].clientX,a=v.touches[0].clientY,s=!0):h(v),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",f))},c=v=>{if(s){const m=v.touches[0].clientX-o,y=v.touches[0].clientY-a;Math.abs(m)>Math.abs(y)?h(v):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",f))}else v.preventDefault(),e(v.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),_=400;let d;const g=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const y=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(p,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class bs extends wt{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class ws extends wt{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const As=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Cs(l){const t=document.createElement("style");t.innerHTML=l;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Ji=!1,Qn=class{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:r="Controls",closeFolders:s=!1,injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),a&&this.domElement.classList.add("allow-touch-styles"),!Ji&&o&&(Cs(As),Ji=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=s}add(t,e,i,n,r){if(Object(i)===i)return new bs(this,t,e,i);switch(typeof t[e]){case"number":return new xs(this,t,e,i,n,r);case"boolean":return new fs(this,t,e);case"string":return new ws(this,t,e);case"function":return new Ze(this,t,e)}}addColor(t,e,i=1){return new ys(this,t,e,i)}addFolder(t){const e=new Qn({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Ze||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ze)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}};const Ms=Qn;class Ts{constructor(){this.gui=null,window.GUI=null,MODE&&(this.gui=new Ms,window.GUI=this.gui,this.toClose())}toOpen(){window.GUI!=null&&this.gui.open()}toClose(){window.GUI!=null&&this.gui.close()}}class xt{static get Vec2(){return xe}static get Vec3(){return Tt}static get Mat4(){return J}static get Qtn(){return nt}}let xe=class{static create(t=0,e=0){const i=new Float32Array(2);return i[0]=t,i[1]=e,i}static length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}static normalize(t){const e=xe.create(),i=xe.length(t);if(i>0){const n=1/i;e[0]=t[0]*n,e[1]=t[1]*n}return e}static dot(t,e){return t[0]*e[0]+t[1]*e[1]}static cross(t,e){return xe.create(),t[0]*e[1]-t[1]*e[0]}},Tt=class{static create(t=0,e=0,i=0){const n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=i,n}static length(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}static normalize(t){const e=Tt.create(),i=Tt.length(t);if(i>0){const n=1/i;e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n}return e}static dot(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}static cross(t,e){return Tt.create(t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0])}static faceNormal(t,e,i){const n=Tt.create(e[0]-t[0],e[1]-t[1],e[2]-t[2]),r=Tt.create(i[0]-t[0],i[1]-t[1],i[2]-t[2]),s=Tt.create(n[1]*r[2]-n[2]*r[1],n[2]*r[0]-n[0]*r[2],n[0]*r[1]-n[1]*r[0]);return Tt.normalize(s)}},J=class{static create(){return new Float32Array(16)}static identity(t){const e=t??J.create();return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static multiply(t,e,i){const n=i??J.create(),r=t[0],s=t[1],o=t[2],a=t[3],h=t[4],u=t[5],c=t[6],f=t[7],p=t[8],_=t[9],d=t[10],g=t[11],v=t[12],m=t[13],y=t[14],b=t[15],x=e[0],C=e[1],A=e[2],w=e[3],M=e[4],T=e[5],E=e[6],O=e[7],k=e[8],D=e[9],P=e[10],S=e[11],F=e[12],R=e[13],lt=e[14],ut=e[15];return n[0]=x*r+C*h+A*p+w*v,n[1]=x*s+C*u+A*_+w*m,n[2]=x*o+C*c+A*d+w*y,n[3]=x*a+C*f+A*g+w*b,n[4]=M*r+T*h+E*p+O*v,n[5]=M*s+T*u+E*_+O*m,n[6]=M*o+T*c+E*d+O*y,n[7]=M*a+T*f+E*g+O*b,n[8]=k*r+D*h+P*p+S*v,n[9]=k*s+D*u+P*_+S*m,n[10]=k*o+D*c+P*d+S*y,n[11]=k*a+D*f+P*g+S*b,n[12]=F*r+R*h+lt*p+ut*v,n[13]=F*s+R*u+lt*_+ut*m,n[14]=F*o+R*c+lt*d+ut*y,n[15]=F*a+R*f+lt*g+ut*b,n}static scale(t,e,i){const n=i??J.create();return n[0]=t[0]*e[0],n[1]=t[1]*e[0],n[2]=t[2]*e[0],n[3]=t[3]*e[0],n[4]=t[4]*e[1],n[5]=t[5]*e[1],n[6]=t[6]*e[1],n[7]=t[7]*e[1],n[8]=t[8]*e[2],n[9]=t[9]*e[2],n[10]=t[10]*e[2],n[11]=t[11]*e[2],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}static translate(t,e,i){const n=i??J.create();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[0]*e[0]+t[4]*e[1]+t[8]*e[2]+t[12],n[13]=t[1]*e[0]+t[5]*e[1]+t[9]*e[2]+t[13],n[14]=t[2]*e[0]+t[6]*e[1]+t[10]*e[2]+t[14],n[15]=t[3]*e[0]+t[7]*e[1]+t[11]*e[2]+t[15],n}static rotate(t,e,i,n){let r=n??J.create();const s=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);if(!s)return null;let o=i[0],a=i[1],h=i[2];if(s!=1){const R=1/s;o*=R,a*=R,h*=R}const u=Math.sin(e),c=Math.cos(e),f=1-c,p=t[0],_=t[1],d=t[2],g=t[3],v=t[4],m=t[5],y=t[6],b=t[7],x=t[8],C=t[9],A=t[10],w=t[11],M=o*o*f+c,T=a*o*f+h*u,E=h*o*f-a*u,O=o*a*f-h*u,k=a*a*f+c,D=h*a*f+o*u,P=o*h*f+a*u,S=a*h*f-o*u,F=h*h*f+c;return e?t!=r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]):r=t,r[0]=p*M+v*T+x*E,r[1]=_*M+m*T+C*E,r[2]=d*M+y*T+A*E,r[3]=g*M+b*T+w*E,r[4]=p*O+v*k+x*D,r[5]=_*O+m*k+C*D,r[6]=d*O+y*k+A*D,r[7]=g*O+b*k+w*D,r[8]=p*P+v*S+x*F,r[9]=_*P+m*S+C*F,r[10]=d*P+y*S+A*F,r[11]=g*P+b*S+w*F,r}static lookAt(t,e,i,n){const r=n??J.create(),s=t[0],o=t[1],a=t[2],h=e[0],u=e[1],c=e[2],f=i[0],p=i[1],_=i[2];if(s==h&&o==u&&a==c)return J.identity(r);let d,g,v,m,y,b,x,C,A,w;return x=s-h,C=o-u,A=a-c,w=1/Math.sqrt(x*x+C*C+A*A),x*=w,C*=w,A*=w,d=p*A-_*C,g=_*x-f*A,v=f*C-p*x,w=Math.sqrt(d*d+g*g+v*v),w?(w=1/w,d*=w,g*=w,v*=w):(d=0,g=0,v=0),m=C*v-A*g,y=A*d-x*v,b=x*g-C*d,w=Math.sqrt(m*m+y*y+b*b),w?(w=1/w,m*=w,y*=w,b*=w):(m=0,y=0,b=0),r[0]=d,r[1]=m,r[2]=x,r[3]=0,r[4]=g,r[5]=y,r[6]=C,r[7]=0,r[8]=v,r[9]=b,r[10]=A,r[11]=0,r[12]=-(d*s+g*o+v*a),r[13]=-(m*s+y*o+b*a),r[14]=-(x*s+C*o+A*a),r[15]=1,r}static perspective(t,e,i,n,r){const s=r??J.create(),o=i*Math.tan(t*Math.PI/360),h=o*e*2,u=o*2,c=n-i;return s[0]=i*2/h,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=i*2/u,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-(n+i)/c,s[11]=-1,s[12]=0,s[13]=0,s[14]=-(n*i*2)/c,s[15]=0,s}static ortho(t,e,i,n,r,s,o){const a=o??J.create(),h=e-t,u=i-n,c=s-r;return a[0]=2/h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-2/c,a[11]=0,a[12]=-(t+e)/h,a[13]=-(i+n)/u,a[14]=-(s+r)/c,a[15]=1,a}static transpose(t,e){const i=e??J.create();return i[0]=t[0],i[1]=t[4],i[2]=t[8],i[3]=t[12],i[4]=t[1],i[5]=t[5],i[6]=t[9],i[7]=t[13],i[8]=t[2],i[9]=t[6],i[10]=t[10],i[11]=t[14],i[12]=t[3],i[13]=t[7],i[14]=t[11],i[15]=t[15],i}static inverse(t,e){const i=e??J.create(),n=t[0],r=t[1],s=t[2],o=t[3],a=t[4],h=t[5],u=t[6],c=t[7],f=t[8],p=t[9],_=t[10],d=t[11],g=t[12],v=t[13],m=t[14],y=t[15],b=n*h-r*a,x=n*u-s*a,C=n*c-o*a,A=r*u-s*h,w=r*c-o*h,M=s*c-o*u,T=f*v-p*g,E=f*m-_*g,O=f*y-d*g,k=p*m-_*v,D=p*y-d*v,P=_*y-d*m,S=1/(b*P-x*D+C*k+A*O-w*E+M*T);return i[0]=(h*P-u*D+c*k)*S,i[1]=(-r*P+s*D-o*k)*S,i[2]=(v*M-m*w+y*A)*S,i[3]=(-p*M+_*w-d*A)*S,i[4]=(-a*P+u*O-c*E)*S,i[5]=(n*P-s*O+o*E)*S,i[6]=(-g*M+m*C-y*x)*S,i[7]=(f*M-_*C+d*x)*S,i[8]=(a*D-h*O+c*T)*S,i[9]=(-n*D+r*O-o*T)*S,i[10]=(g*w-v*C+y*b)*S,i[11]=(-f*w+p*C-d*b)*S,i[12]=(-a*k+h*E-u*T)*S,i[13]=(n*k-r*E+s*T)*S,i[14]=(-g*A+v*x-m*b)*S,i[15]=(f*A-p*x+_*b)*S,i}static toVecIV(t,e){const i=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],c=t[8],f=t[9],p=t[10],_=t[11],d=t[12],g=t[13],v=t[14],m=t[15],y=e[0],b=e[1],x=e[2],C=e[3],A=new Float32Array(4);return A[0]=y*i+b*o+x*c+C*d,A[1]=y*n+b*a+x*f+C*g,A[2]=y*r+b*h+x*p+C*v,A[3]=y*s+b*u+x*_+C*m,A}static screenPositionFromMvp(t,e,i,n){const r=i*.5,s=n*.5,o=J.toVecIV(t,[e[0],e[1],e[2],1]);if(o[3]<=0)return[NaN,NaN];o[0]/=o[3],o[1]/=o[3],o[2]/=o[3];const a=xe.create();return a[0]=r+o[0]*r,a[1]=s-o[1]*s,a}},nt=class{static create(){return new Float32Array(4)}static identity(t){const e=t??nt.create();return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}static inverse(t,e){const i=e??nt.create();return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i[3]=t[3],i}static normalize(t){const e=nt.create(),i=t[0],n=t[1],r=t[2],s=Math.sqrt(i*i+n*n+r*r);if(s>0){const o=1/s;e[0]=i*o,e[1]=n*o,e[2]=r*o}return e}static multiply(t,e,i){const n=i??nt.create(),r=t[0],s=t[1],o=t[2],a=t[3],h=e[0],u=e[1],c=e[2],f=e[3];return n[0]=r*f+a*h+s*c-o*u,n[1]=s*f+a*u+o*h-r*c,n[2]=o*f+a*c+r*u-s*h,n[3]=a*f-r*h-s*u-o*c,n}static rotate(t,e,i){const n=i??nt.create();let r=e[0],s=e[1],o=e[2];const a=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);if(a!==0){const u=1/a;r*=u,s*=u,o*=u}const h=Math.sin(t*.5);return n[0]=r*h,n[1]=s*h,n[2]=o*h,n[3]=Math.cos(t*.5),n}static toVecIII(t,e,i){const n=i??Tt.create(),r=nt.create(),s=nt.create(),o=nt.create();return nt.inverse(e,o),r[0]=t[0],r[1]=t[1],r[2]=t[2],nt.multiply(o,r,s),nt.multiply(s,e,o),n[0]=o[0],n[1]=o[1],n[2]=o[2],n}static toMatIV(t,e){const i=e??J.create(),n=t[0],r=t[1],s=t[2],o=t[3],a=n+n,h=r+r,u=s+s,c=n*a,f=n*h,p=n*u,_=r*h,d=r*u,g=s*u,v=o*a,m=o*h,y=o*u;return i[0]=1-(_+g),i[1]=f-y,i[2]=p+m,i[3]=0,i[4]=f+y,i[5]=1-(c+g),i[6]=d-v,i[7]=0,i[8]=p-m,i[9]=d+v,i[10]=1-(c+_),i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}static slerp(t,e,i,n){const r=n??nt.create(),s=t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];let o=1-s*s;if(o<=0)r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3];else if(o=Math.sqrt(o),Math.abs(o)<1e-4)r[0]=t[0]*.5+e[0]*.5,r[1]=t[1]*.5+e[1]*.5,r[2]=t[2]*.5+e[2]*.5,r[3]=t[3]*.5+e[3]*.5;else{const a=Math.acos(s),h=a*i,u=Math.sin(a-h)/o,c=Math.sin(h)/o;r[0]=t[0]*u+e[0]*c,r[1]=t[1]*u+e[1]*c,r[2]=t[2]*u+e[2]*c,r[3]=t[3]*u+e[3]*c}return r}};const pe=xt.Vec2,vt=xt.Vec3,Es=xt.Mat4,it=xt.Qtn;class ee{static get DEFAULT_DISTANCE(){return 5}static get DEFAULT_MIN_DISTANCE(){return 1}static get DEFAULT_MAX_DISTANCE(){return 10}static get DEFAULT_MOVE_SCALE(){return 2}constructor(t,e={}){this.target=t,this.distance=e.distance||ee.DEFAULT_DISTANCE,this.minDistance=e.min||ee.DEFAULT_MIN_DISTANCE,this.maxDistance=e.max||ee.DEFAULT_MAX_DISTANCE,this.moveScale=e.move||ee.DEFAULT_MOVE_SCALE,this.position=vt.create(0,0,this.distance),this.center=vt.create(0,0,0),this.upDirection=vt.create(0,1,0),this.defaultPosition=vt.create(0,0,this.distance),this.defaultCenter=vt.create(0,0,0),this.defaultUpDirection=vt.create(0,1,0),this.movePosition=vt.create(0,0,0),this.rotateX=0,this.rotateY=0,this.scale=0,this.isDown=!1,this.prevPosition=pe.create(0,0),this.offsetPosition=pe.create(0,0),this.qt=it.create(),this.qtx=it.create(),this.qty=it.create(),this.mouseInteractionStart=this.mouseInteractionStart.bind(this),this.mouseInteractionMove=this.mouseInteractionMove.bind(this),this.mouseInteractionEnd=this.mouseInteractionEnd.bind(this),this.wheelScroll=this.wheelScroll.bind(this),this.target.addEventListener("mousedown",this.mouseInteractionStart,!1),this.target.addEventListener("mousemove",this.mouseInteractionMove,!1),this.target.addEventListener("mouseup",this.mouseInteractionEnd,!1),this.target.addEventListener("wheel",this.wheelScroll,!1),this.target.addEventListener("contextmenu",i=>{i.preventDefault()},!1)}mouseInteractionStart(t){this.isDown=!0;const e=this.target.getBoundingClientRect();this.prevPosition=pe.create(t.clientX-e.left,t.clientY-e.top)}mouseInteractionMove(t){if(this.isDown!==!0)return;const e=this.target.getBoundingClientRect(),i=e.width,n=e.height,r=t.clientX-e.left,s=t.clientY-e.top,o=1/Math.min(i,n);switch(this.offsetPosition=pe.create(r-this.prevPosition[0],s-this.prevPosition[1]),this.prevPosition=pe.create(r,s),t.buttons){case 1:this.rotateX+=this.offsetPosition[0]*o,this.rotateY+=this.offsetPosition[1]*o,this.rotateX=this.rotateX%1,this.rotateY=Math.min(Math.max(this.rotateY%1,-.25),.25);break;case 2:const a=vt.create(this.offsetPosition[0],-this.offsetPosition[1],0),h=it.toVecIII(a,this.qt);this.movePosition[0]-=h[0]*o*this.moveScale,this.movePosition[1]-=h[1]*o*this.moveScale,this.movePosition[2]-=h[2]*o*this.moveScale;break}}mouseInteractionEnd(t){this.isDown=!1}wheelScroll(t){const e=t.wheelDelta;e>0?this.scale=-.5:e<0&&(this.scale=.5)}update(){const t=Math.PI*2,e=vt.create(1,0,0),i=vt.create(0,1,0);return this.scale*=.7,this.distance+=this.scale,this.distance=Math.min(Math.max(this.distance,this.minDistance),this.maxDistance),this.defaultPosition[2]=this.distance,it.identity(this.qt),it.identity(this.qtx),it.identity(this.qty),it.rotate(this.rotateX*t,i,this.qtx),it.toVecIII(e,this.qtx,e),it.rotate(this.rotateY*t,e,this.qty),it.multiply(this.qtx,this.qty,this.qt),it.toVecIII(this.defaultPosition,this.qt,this.position),it.toVecIII(this.defaultUpDirection,this.qt,this.upDirection),this.position[0]+=this.movePosition[0],this.position[1]+=this.movePosition[1],this.position[2]+=this.movePosition[2],this.center[0]=this.defaultCenter[0]+this.movePosition[0],this.center[1]=this.defaultCenter[1]+this.movePosition[1],this.center[2]=this.defaultCenter[2]+this.movePosition[2],Es.lookAt(this.position,this.center,this.upDirection)}}class Ss{constructor(t,e=!0,i=!0){this.gl=null,this.canvas=null,this.camera=null,this.isClearColor=e,this.isOrbitCamera=i,this.params=t,this.params.color={r:1,g:1,b:1,a:1},this.v3=xt.Vec3,this.m4=xt.Mat4}createWebGLContext(){const t=this.canvas.getContext("webgl");if(t==null)throw new Error("webgl not supported");return t}setSize(t=window.innerWidth,e=window.innerHeight){this.canvas.width=t,this.canvas.height=e}setViewport(t=0,e=0,i=this.canvas.width,n=this.canvas.height){this.gl.viewport(t,e,i,n)}setClearColor(t={r:1,g:1,b:1,a:1}){this.params.color=t,this.gl.clearColor(this.params.color.r,this.params.color.g,this.params.color.b,this.params.color.a),this.gl.clearDepth(1),this.gl.clear(gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)}setCamera(){if(this.isOrbitCamera)this.camera=new ee(this.canvas,{distance:5,min:.1,max:10,move:2});else{const t=this.v3.create(0,0,5),e=this.v3.create(0,0,0),i=this.v3.create(0,1,0);this.camera=this.m4.lookAt(t,e,i)}}resize(t=window.innerWidth,e=window.innerHeight){this.setSize(t,e),this.setViewport()}raf(){this.isClearColor?this.setClearColor():(this.gl.clearDepth(1),this.gl.clear(this.gl.DEPTH_BUFFER_BIT)),this.setViewport(0,0,this.canvas.width,this.canvas.height)}init(t,e=window.innerWidth,i=window.innerHeight){this.canvas=t,this.gl=this.createWebGLContext(this.canvas),this.setSize(e,i),this.setViewport(0,0,this.canvas.width,this.canvas.height),this.isClearColor&&this.setClearColor(),this.setCamera()}}class Di{static plane(t,e,i){const n=t/2,r=e/2,s=[-n,r,0,n,r,0,-n,-r,0,n,-r,0],o=[0,0,1,0,0,1,0,0,1,0,0,1],a=[i[0],i[1],i[2],i[3],i[0],i[1],i[2],i[3],i[0],i[1],i[2],i[3],i[0],i[1],i[2],i[3]];return{position:s,normal:o,color:a,texCoord:[0,0,1,0,0,1,1,1],index:[0,2,1,1,2,3]}}static circle(t,e,i){const n=[],r=[],s=[],o=[],a=[];n.push(0,0,0),r.push(0,0,1),s.push(i[0],i[1],i[2],i[3]),o.push(.5,.5);let h=0;for(let u=0;u<t;u++){const c=Math.PI*2/t*u,f=Math.cos(c),p=Math.sin(c);n.push(f*e,p*e,0),r.push(0,0,1),s.push(i[0],i[1],i[2],i[3]),o.push((f+1)*.5,1-(p+1)*.5),u===t-1?a.push(0,h+1,1):a.push(0,h+1,h+2),++h}return{position:n,normal:r,color:s,texCoord:o,index:a}}static cube(t,e){const i=t*.5,n=[-i,-i,i,i,-i,i,i,i,i,-i,i,i,-i,-i,-i,-i,i,-i,i,i,-i,i,-i,-i,-i,i,-i,-i,i,i,i,i,i,i,i,-i,-i,-i,-i,i,-i,-i,i,-i,i,-i,-i,i,i,-i,-i,i,i,-i,i,i,i,i,-i,i,-i,-i,-i,-i,-i,i,-i,i,i,-i,i,-i],r=1/Math.sqrt(3),s=[-r,-r,r,r,-r,r,r,r,r,-r,r,r,-r,-r,-r,-r,r,-r,r,r,-r,r,-r,-r,-r,r,-r,-r,r,r,r,r,r,r,r,-r,-r,-r,-r,r,-r,-r,r,-r,r,-r,-r,r,r,-r,-r,r,r,-r,r,r,r,r,-r,r,-r,-r,-r,-r,-r,r,-r,r,r,-r,r,-r],o=[];for(let u=0;u<n.length/3;u++)o.push(e[0],e[1],e[2],e[3]);return{position:n,normal:s,color:o,texCoord:[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],index:[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]}}static cone(t,e,i,n){const r=[],s=[],o=[],a=[],h=[],u=i/2;r.push(0,-u,0),s.push(0,-1,0),o.push(n[0],n[1],n[2],n[3]),a.push(.5,.5);let c=0;for(let f=0;f<=t;f++){const p=Math.PI*2/t*f,_=Math.cos(p),d=Math.sin(p);r.push(_*e,-u,d*e,_*e,-u,d*e),s.push(0,-1,0,_,0,d),o.push(n[0],n[1],n[2],n[3],n[0],n[1],n[2],n[3]),a.push((_+1)*.5,1-(d+1)*.5,(_+1)*.5,1-(d+1)*.5),f!==t&&(h.push(0,c+1,c+3),h.push(c+4,c+2,t*2+3)),c+=2}return r.push(0,u,0),s.push(0,1,0),o.push(n[0],n[1],n[2],n[3]),a.push(.5,.5),{position:r,normal:s,color:o,texCoord:a,index:h}}static cylinder(t,e,i,n,r){const s=[],o=[],a=[],h=[],u=[],c=n/2;s.push(0,c,0,0,-c,0),o.push(0,1,0,0,-1,0),a.push(r[0],r[1],r[2],r[3],r[0],r[1],r[2],r[3]),h.push(.5,.5,.5,.5);let f=2;for(let p=0;p<=t;p++){const _=Math.PI*2/t*p,d=Math.cos(_),g=Math.sin(_);s.push(d*e,c,g*e,d*e,c,g*e,d*i,-c,g*i,d*i,-c,g*i),o.push(0,1,0,d,0,g,0,-1,0,d,0,g),a.push(r[0],r[1],r[2],r[3],r[0],r[1],r[2],r[3],r[0],r[1],r[2],r[3],r[0],r[1],r[2],r[3]),h.push((d+1)*.5,1-(g+1)*.5,1-p/t,0,(d+1)*.5,1-(g+1)*.5,1-p/t,1),p!==t&&u.push(0,f+4,f,1,f+2,f+6,f+5,f+7,f+1,f+1,f+7,f+3),f+=4}return{position:s,normal:o,color:a,texCoord:h,index:u}}static sphere(t,e,i,n){const r=[],s=[],o=[],a=[],h=[];for(let u=0;u<=t;u++){const c=Math.PI/t*u,f=Math.cos(c),p=Math.sin(c);for(let _=0;_<=e;_++){const d=Math.PI*2/e*_,g=p*i*Math.cos(d),v=f*i,m=p*i*Math.sin(d),y=p*Math.cos(d),b=p*Math.sin(d);r.push(g,v,m),s.push(y,f,b),o.push(n[0],n[1],n[2],n[3]),a.push(1-1/e*_,1/t*u)}}for(let u=0;u<t;u++)for(let c=0;c<e;c++){const f=(e+1)*u+c;h.push(f,f+1,f+e+2),h.push(f,f+e+2,f+e+1)}return{position:r,normal:s,color:o,texCoord:a,index:h}}static torus(t,e,i,n,r){const s=[],o=[],a=[],h=[],u=[];for(let c=0;c<=t;c++){const f=Math.PI*2/t*c,p=Math.cos(f),_=Math.sin(f);for(let d=0;d<=e;d++){const g=Math.PI*2/e*d,v=(p*i+n)*Math.cos(g),m=_*i,y=(p*i+n)*Math.sin(g),b=p*Math.cos(g),x=p*Math.sin(g),C=1/e*d;let A=1/t*c+.5;A>1&&(A-=1),A=1-A,s.push(v,m,y),o.push(b,_,x),a.push(r[0],r[1],r[2],r[3]),h.push(C,A)}}for(let c=0;c<t;c++)for(let f=0;f<e;f++){const p=(e+1)*c+f;u.push(p,p+e+1,p+1),u.push(p+e+1,p+e+2,p+1)}return{position:s,normal:o,color:a,texCoord:h,index:u}}static icosahedron(t,e){const i=(1+Math.sqrt(5))/2,n=i*t,r=Math.sqrt(1+i*i),s=[1/r,i/r],o=[-t,n,0,t,n,0,-t,-n,0,t,-n,0,0,-t,n,0,t,n,0,-t,-n,0,t,-n,n,0,-t,n,0,t,-n,0,-t,-n,0,t],a=[-s[0],s[1],0,s[0],s[1],0,-s[0],-s[1],0,s[0],-s[1],0,0,-s[0],s[1],0,s[0],s[1],0,-s[0],-s[1],0,s[0],-s[1],s[1],0,-s[0],s[1],0,s[0],-s[1],0,-s[0],-s[1],0,s[0]],h=[e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3],e[0],e[1],e[2],e[3]],u=[];for(let f=0,p=a.length;f<p;f+=3){const _=(Math.atan2(a[f+2],-a[f])+Math.PI)/(Math.PI*2),d=1-(a[f+1]+1)/2;u.push(_,d)}return{position:o,normal:a,color:h,texCoord:u,index:[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}}}let Li=class{constructor(t,e,i){this.gl=t.gl,this.canvas=t.canvas,this.isOrbitCamera=t.isOrbitCamera,this.camera=t.camera,this.drawCount=null,this.uniforms={};const n=this.createFragmentShader(e),r=this.createVertexShader(i);this.program=this.createProgramObject(n,r),this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.v2=xt.Vec2,this.v3=xt.Vec3,this.m4=xt.Mat4,this.qtn=xt.Qtn}createShaderObject(t,e,i){const n=t.createShader(i);if(t.shaderSource(n,e),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS))return n;throw new Error(t.getShaderInfoLog(n))}createFragmentShader(t){const e=this.gl;return this.createShaderObject(e,t,e.FRAGMENT_SHADER)}createVertexShader(t){const e=this.gl;return this.createShaderObject(e,t,e.VERTEX_SHADER)}createProgramObject(t,e){const i=this.gl,n=i.createProgram();if(i.attachShader(n,t),i.attachShader(n,e),i.linkProgram(n),i.deleteShader(t),i.deleteShader(e),i.getProgramParameter(n,i.LINK_STATUS))return i.useProgram(n),n;throw new Error(i.getProgramInfoLog(n))}createIBO(t){const e=this.gl,i=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,i),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Int16Array(t),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),i}updateIBO(t){const e=this.gl;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t)}createVBO(t){const e=this.gl,i=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),i}updateVBO(t,e,i){const n=this.gl;n.bindBuffer(n.ARRAY_BUFFER,t),n.enableVertexAttribArray(e),n.vertexAttribPointer(e,i,n.FLOAT,!1,0,0)}getUniform(t){const e=this.gl,i=this.program,n=e.getUniformLocation(i,t);return e.getUniform(i,n)}createUniform(t,e,i){const n=this.gl,r=this.program;this.uniforms[t]=n.getUniformLocation(r,t)}updateUniform(t,e,i,n=!1){const r=this.gl;switch(e){case"t":r.uniform1i(this.uniforms[t],i);break;case"i":r.uniform1i(this.uniforms[t],i);break;case"f":r.uniform1f(this.uniforms[t],i);break;case"v1":r.uniform1fv(this.uniforms[t],i);break;case"v2":r.uniform2fv(this.uniforms[t],i);break;case"v3":r.uniform3fv(this.uniforms[t],i);break;case"v4":r.uniform4fv(this.uniforms[t],i);break;case"m2":r.uniformMatrix2fv(this.uniforms[t],n,i);break;case"m3":r.uniformMatrix3fv(this.uniforms[t],n,i);break;case"m4":r.uniformMatrix4fv(this.uniforms[t],n,i);break;default:throw new Error("type is not defined")}}createProjection(t=45,e=window.innerWidth/window.innerHeight,i=.1,n=10){return this.m4.perspective(t,e,i,n)}setCulling(t=!0){const e=this.gl;return t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE)}setDepthTest(t=!0){const e=this.gl;t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST)}raf(){this.program!=null&&this.gl.useProgram(this.program)}};class kt{static hex2rgb(t){return t.slice(0,1)==="#"&&(t=t.slice(1)),t.length===3&&(t=t.slice(0,1)+t.slice(0,1)+t.slice(1,2)+t.slice(1,2)+t.slice(2,3)+t.slice(2,3)),[t.slice(0,2),t.slice(2,4),t.slice(4,6)].map(function(e){return parseInt(e,16)})}static rgbToGLSLColor(t){const[e,i,n]=t;return[e/255,i/255,n/255]}static glslColorToHex(t){const e=Math.round(t[0]*255),i=Math.round(t[1]*255),n=Math.round(t[2]*255),r=e.toString(16).padStart(2,"0"),s=i.toString(16).padStart(2,"0"),o=n.toString(16).padStart(2,"0");return`#${r}${s}${o}`}static getClampRandom(t,e){return Math.random()*(e-t)+t}}var Ps=`precision mediump float;
varying float vTime;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uAlpha;
uniform float uLightUp;
uniform vec3 uColor;
uniform vec3 uLightPosition;
uniform mat4 uInverseMatrix;

const vec4 AMBIENT_COLOR = vec4(vec3(0.0), 1.0);
const float DIMMING = 0.0; 
const float POW = 6.0;

void main() {
  vec3 lightVector = uLightPosition - vPosition;
  vec3 inverseLight = normalize(uInverseMatrix * vec4(lightVector, 0.0)).xyz;
  float diffuse = clamp(pow( dot(vNormal, inverseLight), POW), 0.0, 1.0) - DIMMING;
  vec4 dist = vec4(uColor, 1.0) * vec4(vec3(diffuse), 1.0) + AMBIENT_COLOR;
  dist.rgb = dist.rgb * uLightUp;
  gl_FragColor = dist;
  gl_FragColor.a = uAlpha;
}`,Os=`attribute vec3 position;
attribute vec3 normal;
varying float vTime;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uTime;
uniform float uScale;
uniform mat4 uModelMatrix;
uniform mat4 uMvpMatrix;
uniform mat4 uNormalMatrix;

void main() {
  vTime = uTime;
  vPosition   = (uModelMatrix * vec4(position, 1.0)).xyz;
  vNormal = (uNormalMatrix * vec4(normal, 0.0)).xyz;
  gl_Position = uMvpMatrix * vec4(position * uScale, 1.0);
}`;const I=.8,G=-1,Qt={cylinder:{split:6,radius:I,height:1e-7,limitMax:19,postiion:[[0,0,G],[0,I*1.8,G],[0,I*1.8*-1,G],[0,I*1.8*2,G],[0,I*1.8*2*-1,G],[I*1.55,I*.9,G],[I*1.55*-1,I*.9,G],[I*1.55,I*.9*-1,G],[I*1.55*-1,I*.9*-1,G],[I*1.55*2,0,G],[I*1.55*-2,0,G],[I*1.55,I*.9*3,G],[I*1.55,I*.9*-3,G],[I*1.55*-1,I*.9*3,G],[I*1.55*-1,I*.9*-3,G],[I*1.55*2,I*.9*2,G],[I*1.55*-1*2,I*.9*2,G],[I*1.55*2,I*.9*-1*2,G],[I*1.55*-1*2,I*.9*-1*2,G]]}};class ks extends Li{constructor(t,e){super(e,Ps,Os),this.stage=e,this.params=t,this.isCreated=!1,this.mesh={},this.lightPosition={x:0,y:0,z:.1},this.alpha={value:.8},this.color={cylinder:kt.rgbToGLSLColor(kt.hex2rgb("#fff"))},this.lightup={value:0}}createMesh(){const t=this.gl;this.mesh.geometry=Di.cylinder(Qt.cylinder.split,Qt.cylinder.radius,Qt.cylinder.radius,Qt.cylinder.height,[1,1,1,1]),this.mesh.position={array:this.createVBO(this.mesh.geometry.position),location:t.getAttribLocation(this.program,"position"),stride:3},this.mesh.normal={array:this.createVBO(this.mesh.geometry.normal),location:t.getAttribLocation(this.program,"normal"),stride:3},this.mesh.ibo={data:this.createIBO(this.mesh.geometry.index),length:this.mesh.geometry.index.length},this.createUniform("uLightPosition","v3",this.v3.create(this.lightPosition.x,this.lightPosition.y,this.lightPosition.z)),this.createUniform("uColor","v3",this.color.cylinder),this.createUniform("uInverseMatrix","m4",this.m4.identity()),this.createUniform("uModelMatrix","m4",this.m4.identity()),this.createUniform("uMvpMatrix","m4",this.m4.identity()),this.createUniform("uNormalMatrix","m4",this.m4.identity()),this.createUniform("uTime","f",0),this.createUniform("uAlpha","f",this.alpha.value),this.createUniform("uScale","f",0),this.createUniform("uLightUp","f",0),this.isCreated=!0}resize(t){}raf(t,e){const i=e,n=this.stage.gl;if(this.isCreated){super.raf(t);const r=this.m4,s=this.v3,o=this.isOrbitCamera?this.camera.update():this.camera,a=this.createProjection(45,1,.1,10);let h;for(let u=0;u<Qt.cylinder.limitMax;u++){const c=s.create(1,0,0),f=Qt.cylinder.postiion[u];h=r.translate(r.identity(),s.create(f[0],f[1],f[2])),h=r.rotate(h,Math.PI*.5,c);const p=r.multiply(a,o),_=r.multiply(p,h),d=r.transpose(r.inverse(h));this.updateUniform("uColor","v3",this.color.cylinder),this.updateUniform("uLightPosition","v3",[this.lightPosition.x+i.x.current,this.lightPosition.y+i.y.current,this.lightPosition.z]),this.updateUniform("uInverseMatrix","m4",r.identity()),this.updateUniform("uModelMatrix","m4",h),this.updateUniform("uMvpMatrix","m4",_),this.updateUniform("uNormalMatrix","m4",d),this.updateUniform("uTime","f",t),this.updateUniform("uAlpha","f",this.alpha.value),this.updateUniform("uScale","f",1),this.updateUniform("uLightUp","f",0+this.lightup.value),this.updateVBO(this.mesh.position.array,this.mesh.position.location,this.mesh.position.stride),this.updateVBO(this.mesh.normal.array,this.mesh.normal.location,this.mesh.normal.stride),this.updateIBO(this.mesh.ibo.data),n.drawElements(n.TRIANGLES,this.mesh.ibo.length,n.UNSIGNED_SHORT,0)}}}toLightUp(){GSAP.to(this.lightup,{duration:2,value:1})}init(){if(this.setCulling(),this.setDepthTest(),this.createMesh(),GUI!=null){const t=GUI.addFolder("cylinder");t.addColor(this.color,"cylinder").name("color").onChange(e=>{this.color.cylinder=e}),t.add(this.alpha,"value",0,1).name("alpha").onChange(e=>{this.alpha.value=e}),t.add(this.lightup,"value",0,1).name("lightup").onChange(e=>{this.lightup.value=e})}}}var Ds=`precision mediump float;
varying vec3 vNormal;
varying vec3 vPosition;
uniform vec3 uLightPosition;
uniform mat4 uInverseMatrix;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTime;
uniform float uLightUp;

const vec4 AMBIENT_COLOR = vec4(vec3(0.0), 1.0);
const float DIMMING = 0.0; 
const float POW = 6.0;
float random (in vec2 st) {
  return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

float noise (in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
#define OCTAVES 6
float fbm (in vec2 st) {
  
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 0.;
  
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * noise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 position = gl_FragCoord.xy / uResolution.xy;
  position.x *= uResolution.x / uResolution.y;

  vec2 anime1 = vec2(0.0);
  anime1.x = fbm( position * 10.0);
  anime1.y = fbm( position * 10.0 + vec2(1.0));

  vec2 anime2 = vec2(0.0);
  anime2.x = fbm( position * 10.0 + 1.0 * anime1 + vec2(1.7,9.2)+ 0.15 * uTime * 2.0);
  anime2.y = fbm( position * 10.0 + 1.0 * anime1 + vec2(8.3,2.8)+ 0.126 * uTime * 2.0);

  float fbm = fbm(position + anime2);

  vec3 color = mix(uColor1, uColor2, clamp((fbm * fbm) * 4.0,0.0,1.0));
  color = mix(color, uColor3, clamp(length(anime1),0.0,1.0));
  color = mix(color, uColor1, clamp(length(anime2.x),0.0,1.0));
  color = (fbm * fbm * fbm + 0.6 * fbm * fbm + 0.5 * fbm) * color;

  vec3 lightVector = uLightPosition - vPosition;
  vec3 inverseLight = normalize(uInverseMatrix * vec4(lightVector, 0.0)).xyz;
  float diffuse = clamp(pow( dot(vNormal, inverseLight), POW), 0.0, 1.0) - DIMMING;
  vec4 dist = vec4(color, 1.0) * vec4(vec3(diffuse), 1.0) + AMBIENT_COLOR;
  dist.rgb = dist.rgb * uLightUp;
  gl_FragColor =  dist;
}`,Ls=`attribute vec3 position;
attribute vec3 normal;
varying vec3 vNormal;
varying vec3 vPosition;
uniform mat4 uModelMatrix;
uniform mat4 uMvpMatrix;
uniform mat4 uNormalMatrix;

void main() {
  vPosition   = (uModelMatrix * vec4(position, 1.0)).xyz;
  vec3 n = (uNormalMatrix * vec4(normal, 0.0)).xyz;
  vNormal = n;
  gl_Position = uMvpMatrix * vec4(position, 1.0);
}`;class Is extends Li{constructor(t,e){super(e,Ds,Ls),this.stage=e,this.params=t,this.isCreated=!1,this.mesh={},this.lightPosition={x:0,y:0,z:.1},this.color={value1:kt.rgbToGLSLColor(kt.hex2rgb("#0040ff")),value2:kt.rgbToGLSLColor(kt.hex2rgb("#99a0ff")),value3:kt.rgbToGLSLColor(kt.hex2rgb("#00e1ff"))},this.lightup={value:0}}createMesh(){const t=this.gl;this.mesh.geometry=Di.plane(6,6,[1,1,1,1]),this.mesh.position={array:this.createVBO(this.mesh.geometry.position),location:t.getAttribLocation(this.program,"position"),stride:3},this.mesh.normal={array:this.createVBO(this.mesh.geometry.normal),location:t.getAttribLocation(this.program,"normal"),stride:3},this.mesh.ibo={data:this.createIBO(this.mesh.geometry.index),length:this.mesh.geometry.index.length},this.createUniform("uLightPosition","v3",this.v3.create(this.lightPosition.x,this.lightPosition.y,this.lightPosition.z)),this.createUniform("uColor1","v3",this.color.value1),this.createUniform("uColor2","v3",this.color.value2),this.createUniform("uColor3","v3",this.color.value3),this.createUniform("uInverseMatrix","m4",this.m4.identity()),this.createUniform("uModelMatrix","m4",this.m4.identity()),this.createUniform("uMvpMatrix","m4",this.m4.identity()),this.createUniform("uNormalMatrix","m4",this.m4.identity()),this.createUniform("uResolution","v2",[this.params.longer,this.params.longer]),this.createUniform("uTime","f",0),this.createUniform("uLightUp","f",0),this.isCreated=!0}resize(t){}raf(t,e){const i=e,n=this.stage.gl;if(this.isCreated){super.raf(t);const r=this.m4,s=this.v3,o=this.isOrbitCamera?this.camera.update():this.camera,a=this.createProjection(45,1,.1,10),h=s.create(1,0,0);let u=r.translate(r.identity(),s.create(0,0,-1.1));u=r.rotate(u,0,h);const c=r.multiply(a,o),f=r.multiply(c,u),p=r.transpose(r.inverse(u));this.updateUniform("uColor1","v3",this.color.value1),this.updateUniform("uColor2","v3",this.color.value2),this.updateUniform("uColor3","v3",this.color.value3),this.updateUniform("uLightPosition","v3",[this.lightPosition.x+i.x.current,this.lightPosition.y+i.y.current,this.lightPosition.z]),this.updateUniform("uInverseMatrix","m4",r.identity()),this.updateUniform("uModelMatrix","m4",u),this.updateUniform("uMvpMatrix","m4",f),this.updateUniform("uNormalMatrix","m4",p),this.updateUniform("uResolution","v2",[this.params.longer,this.params.longer]),this.updateUniform("uTime","f",t),this.updateUniform("uLightUp","f",0+this.lightup.value),this.updateVBO(this.mesh.position.array,this.mesh.position.location,this.mesh.position.stride),this.updateVBO(this.mesh.normal.array,this.mesh.normal.location,this.mesh.normal.stride),this.updateIBO(this.mesh.ibo.data),n.drawElements(n.TRIANGLES,this.mesh.ibo.length,n.UNSIGNED_SHORT,0)}}toLightUp(){GSAP.to(this.lightup,{duration:2,value:1})}init(){if(this.setCulling(),this.setDepthTest(),this.createMesh(),GUI!=null){const t=GUI.addFolder("plane");t.addColor(this.color,"value1").name("color1").onChange(e=>{this.color.value1=e}),t.addColor(this.color,"value2").name("color2").onChange(e=>{this.color.value2=e}),t.addColor(this.color,"value3").name("color3").onChange(e=>{this.color.value3=e}),t.add(this.lightup,"value",0,1).name("lightup").onChange(e=>{this.lightup.value=e})}}}var Fs=`precision mediump float;
varying vec2 vUv;
uniform float uTime;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  
  
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  
  
  float n_ = 0.142857142857; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); 

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ ); 

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  
  
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),dot(p2,x2), dot(p3,x3) ) );
}
float rand (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}
float anime(float f){
  float speed = 5.0;
  return sin(f * 10.0 + uTime * speed) * 0.5;
}
float noise(vec2 uv){
  float o = anime(rand(uv));
  return o;
}
mat2 rotate(float rad) {
  float c = cos(rad);
  float s = sin(rad);
  return mat2(
    c, s,
    -s, c
  );
}

const float PI =  3.14159265359;

void main() {
  vec3 color = vec3(0.1, 0.1, 0.28);

  vec2 uv = vUv;
  uv = uv * rotate(PI * 0.15);

  float sn = snoise(vec3(uv.x * 400.0, uv.y, uTime * 1.5 + sin(uTime) * 0.5));
  vec4 color1 = vec4(color * vec3(sn), sn);

  float wn = noise(vUv);
  vec4 color2 = vec4(color * abs(vec3(wn)), wn);

  vec4 dist = mix(color1, color2, 0.7);
  gl_FragColor = dist;
}`,zs=`attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
uniform mat4 uMvpMatrix;

void main() {
  vUv = uv;
  gl_Position = uMvpMatrix * vec4(position, 1.0);
}`;class $s extends Li{constructor(t,e){super(e,Fs,zs),this.stage=e,this.params=t,this.isCreated=!1,this.mesh={}}createMesh(){const t=this.gl;this.mesh.geometry=Di.plane(6,6,[1,1,1,1]),this.mesh.position={array:this.createVBO(this.mesh.geometry.position),location:t.getAttribLocation(this.program,"position"),stride:3},this.mesh.uv={array:this.createVBO(this.mesh.geometry.texCoord),location:t.getAttribLocation(this.program,"uv"),stride:2},this.mesh.ibo={data:this.createIBO(this.mesh.geometry.index),length:this.mesh.geometry.index.length},this.createUniform("uMvpMatrix","m4",this.m4.identity()),this.createUniform("uTime","f",0),this.isCreated=!0}resize(t){}raf(t){const e=this.stage.gl;if(this.isCreated){super.raf(t);const i=this.m4,n=this.v3,r=this.isOrbitCamera?this.camera.update():this.camera,s=this.createProjection(45,1,.1,10),o=n.create(1,0,0);let a=i.translate(i.identity(),n.create(0,0,.5));a=i.rotate(a,0,o);const h=i.multiply(s,r),u=i.multiply(h,a);this.updateUniform("uMvpMatrix","m4",u),this.updateUniform("uTime","f",t),this.updateVBO(this.mesh.position.array,this.mesh.position.location,this.mesh.position.stride),this.updateVBO(this.mesh.uv.array,this.mesh.uv.location,this.mesh.uv.stride),this.updateIBO(this.mesh.ibo.data),e.drawElements(e.TRIANGLES,this.mesh.ibo.length,e.UNSIGNED_SHORT,0)}}init(){this.setCulling(),this.setDepthTest(),this.createMesh(),GUI!=null&&GUI.addFolder("cover")}}class Rs{constructor(){this.audio={main:new Audio("assets/audio/main.mp3"),lightup:new Audio("assets/audio/lightup.mp3")},this.audio.main.volume=.5,this.audio.lightup.volume=1}play(t,e=!0){switch(t){case"main":this.audio.main.play(),this.audio.main.loop=e;break;case"lightup":this.audio.lightup.play(),this.audio.lightup.loop=e;break}}pause(t){switch(t){case"main":this.audio.main.pause(),this.audio.main.currentTime=0;break;case"lightup":this.audio.lightup.pause(),this.audio.lightup.currentTime=0;break}}}class Us{constructor(t){this.params=t,this.vector={x:{target:0,current:0},y:{target:0,current:0},ease:.1},this.audio=new Rs,this.stage=new Ss(t,!1,!1),this.stage.init(document.getElementById("webgl-canvas"),t.longer,t.longer),this.cylinder=new ks(t,this.stage),this.plane=new Is(t,this.stage),this.cover=new $s(t,this.stage),this.raf=this.raf.bind(this),window.matchMedia("(hover: hover)").matches?window.addEventListener("mousemove",this.onMove.bind(this),{passive:!0}):window.addEventListener("touchmove",this.onMove.bind(this),{passive:!0})}lerp(t,e,i){return t*(1-i)+e*i}onMove(t){this.vector.x.target=t.touches?t.touches[0].clientX:t.clientX,this.vector.y.target=t.touches?t.touches[0].clientY:t.clientY,this.vector.x.target=2*(this.vector.x.target/this.params.w)-1,this.vector.y.target=2*(this.vector.y.target/this.params.h)-1,this.vector.x.target=this.vector.x.target*2.4,this.vector.y.target=this.vector.y.target*-2.4}raf(){const t=performance.now()*.001,e=this.stage.gl;this.vector.x.current=this.lerp(this.vector.x.current,this.vector.x.target,this.vector.ease),this.vector.y.current=this.lerp(this.vector.y.current,this.vector.y.target,this.vector.ease),e.blendFunc(e.SRC_ALPHA,e.ONE),e.enable(e.BLEND),this.stage.raf(),this.plane.raf(t,this.vector),this.cylinder.raf(t,this.vector),this.cover.raf(t)}resize(t){this.params.w=this.params.w,this.params.h=this.params.h,this.stage.resize(t.longer,t.longer),this.plane.resize(t),this.cylinder.resize(t),this.cover.resize(t)}toEnterAnime(){const t=document.body;this.isOnceClick&&(t.setAttribute("data-clicked","1"),this.isOnceClick=!1,this.audio.play("lightup",!1),setTimeout(()=>{this.audio.play("main"),this.plane.toLightUp(),this.cylinder.toLightUp()},300))}init(){this.plane.init(),this.cylinder.init(),this.cover.init(),this.isOnceClick=!0;const t=document.body;setTimeout(()=>{t.setAttribute("data-status","enter"),window.matchMedia("(hover: hover)").matches?window.addEventListener("click",e=>{this.toEnterAnime()}):window.addEventListener("touchstart",e=>{this.toEnterAnime()})},300)}}window.MODE=!1;window.GSAP=Jn;window.addEventListener("DOMContentLoaded",l=>{new Ts;const t={w:window.innerWidth,h:window.innerHeight,longer:0,shorter:0};t.longer=t.w>t.h?t.w:t.h,t.shorter=t.w<t.h?t.w:t.h;const e=new Us(t);e.init(),GSAP.ticker.add(e.raf),GSAP.ticker.fps(30);const i=()=>{t.w=window.innerWidth,t.h=window.innerHeight,t.longer=t.w>t.h?t.w:t.h,t.shorter=t.w<t.h?t.w:t.h,e.resize(t)};i(),window.addEventListener("resize",i,{passive:!0}),window.matchMedia("(hover: hover)").matches&&(document.oncontextmenu=function(){return!1},document.getElementsByTagName("html")[0].oncontextmenu=function(){return!1},document.body.oncontextmenu=function(){return!1})});
