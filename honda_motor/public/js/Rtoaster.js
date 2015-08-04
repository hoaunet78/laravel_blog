/**
 * @(#)Rtoaster.js
 * Copyright (c) 2006-2015 BrainPad, Inc. All right reserved.
 * @version 1.8.7
 * @see <a href="http://www.rtoaster.com/">Rtoaster web site</a>
 */
if(typeof Rtoaster==="undefined"){var Rtoaster={host:"rt.rtoaster.jp",path:"/",timeout:2000,callback:void 0};(function(S,W){var A="object",B="string",C=W.console,D=W.document,E=[],F="function",G="charAt",H=[],I="indexOf",J="style",K="script",L=W.location,M="toLowerCase",N="length",O="lastIndexOf",P=L.protocol,Q="substring",R="visibility",T={F:0},U=/*@cc_on!@*/0||D.documentMode?2048:8192,V=void 0,X=!1,Y=typeof decodeURIComponent===F?decodeURIComponent:unescape,Z=typeof encodeURIComponent===F?encodeURIComponent:escape,_A=function(k,e,m){C&&C.error&&C.error("["+k+"] "+e.name+": "+e.message+(_B(m)?"":"\n"+m))},_B=function(s){return!s||!s[N]||s==="null"||s==="undefined"},_C=function(){return D.cookie.split("; ")},_D=function(s){return _B(s)?"":Y(s)},_E=function(s){return _B(s)?"":Z(s)},_F=function(e,i,o){for(i=E[N]-1;i>=0;i--)if((o=E[i]).E===e)return o},_G=function(k){if(!_B(k)){var a=_C(),m=_E(k)+"=",i=a[N]-1,c,b,e;for(;i>=0;i--)if(!(c=a[i])[I](m)){b=m[N],e=c[N];if(c[G](b)==="\"")b++;if(c[G](e-1)==="\"")e--;return _D(c[Q](b,e))}}return""},_I=setTimeout,_J=function(a,d){d=d||"\n";var r="",i=0,n=a[N],s;for(;i<n;i++){if(!_B(s=a[i]))r+=(_B(r)?"":d)+s}return r},_L=function(p,c,u,h,e){c=D.charset||"UTF-8",u=S.path+p+"&c="+c;if(u[N]<=U)try{h=D.getElementsByTagName(K)[0],e=D.createElement(K),e.type="text/javascript",e.charset=c,e.src=P+"//"+S.host+u,e.onload=e.onreadystatechange=function(_,b,n){if(b||_N(e)){try{e.onreadystatechange=e.onload=V}catch(_){}if(n=e.parentNode)n.removeChild(e);e=V}};h.parentNode.insertBefore(e,h);return 1}catch(_){}},_M=function(){return _G("_rt.uid")},_N=function(t,s){s=(t||D).readyState;return!s||s==="loaded"||s==="interactive"||s==="complete"},_O=function(t,e,c){if(t.addEventListener)t.addEventListener(e,c,X);else if(t.attachEvent){if(!T.O){T.O=[];_O(W,"unload",function(l,i,f,o){l=T.O;for(i=l[N]-1;i>=0;i--){f=l[i],o=f[0];try{o.detachEvent(f[1],f[2])}catch(_){}f[0]=f[2]=V}T.O=V})}e="on"+e;t.attachEvent(e,c);T.O[T.O[N]]=[t,e,c]}},_R=function(a,b,i,n,k,v){if(!T.F)S.track();if(T.F===1){T.F=2;for(i=0,n=a[N];i<n;i++)if(!_B(k=a[i]))if(v=_F(k))v.D=1;else E[E[N]]={"E":k,"D":1};if(!E[N])return _Z();var c=0,f=S.timeout,t=f/10,x=function(r,l,e,j,m,o){if(T.F===2){if(!D.body)return _I(x,1);if(r=S.trackingTime){T.F=3,l=_B(T.M);if(!l||!(l=_B(T.M=_E(_M())))){for(j=0,m=E[N];j<m;j++)if((o=E[j]).D&&D.getElementById(o.E))e=_J([e,o.E],","),o.D=V;if(_B(e))l=1;else T.X=_I(function(){_Z()},f)}if(l||!_L("r/?a="+T.A+"&l="+T.L+"&m="+T.M+"&e="+_E(e)+"&p="+_E(_J([T.C,T.E,T.P]))+"&t="+r+"&i="+T.I))_Z()}else if(++c<t)_I(x,10);else _Z()}},d=D.documentElement,g="DOMContentLoaded";if(b||_N())return x();if(T.F===2){if(D.addEventListener){D.addEventListener(g,function(){D.removeEventListener(g,arguments.callee,X);x()},X)}else if(D.attachEvent){D.attachEvent(g="onreadystatechange",function(){if(_N()){D.detachEvent(g,arguments.callee);x()}});if(d.doScroll&&W==W.top)(function(){try{d.doScroll("left");x()}catch(_){_I(arguments.callee,1)}})()}_O(W,"load",x)}}},_S=function(p,c){if(p&&!_B(p.key)){c=_E(p.key)+"=";if(!_B(p.value))c+=_E(p.value);if(!_B(p.domain))c+="; domain="+p.domain;if(!_B(p.path))c+="; path="+p.path;if(!_B(p.expires))c+="; expires="+p.expires;if(p.secure)c+="; secure";D.cookie=c}},_T=function(s,p,b){if(!s||!p||typeof s!==typeof p){var c=_C(),f=function(v,t,d,l,j,k,g){if(v){t=typeof v;if(t===B){d="/";if(v[G](0)!==d){if(_B(l=L.pathname))l=d;else if(l[G](l[N]-1)!==d)if((j=l[O](d))===-1)l+=d;else l=l[Q](0,j+1);v=l+v}T.L=_E(P+"//"+L.host+v)}else if(t===A)for(k in v)if(_V(g=v[k]))a=_J([a,k+"="+g])}},i=c[N]-1,o,a;for(;i>=0;i--)if(!(o=c[i])[I]("_rt."))a=_J([a,_D(o)]);if(b)a=_J([a,T.N]);f(s);f(p);return _L("t/?a="+T.A+"&l="+T.L+"&r="+_E(D.referrer)+"&m="+T.M+"&p="+_E(a)+"&i="+T.I)}},_U=function(v){if(!_B(v))_S({"key":"_rt.sid","value":v,"domain":T.R,"path":"/"})},_V=function(s,t){t=typeof s;return t===B||t==="number"||t==="boolean"},_W=function(e,f){f=S.callback;if(f&&typeof f===F)try{f(e)}catch(_){_A("callback->"+e,_)}},_X=function(t,c){if(_B(c))return 1;var d="content->"+t.id,e=function(v){if(_B(v))return"";var b=[D.open,D.close,D.clear,D.write,D.writeln],q="",f=function(a,k,m){for(k=0,m=a[N];k<m;k++)q+=a[k]};D.open=D.close=D.clear=function(){};D.write=function(){f(arguments)};D.writeln=function(){f(arguments);q+="\n"};try{W.execScript?W.execScript(v):W["eval"].call(W,v)}catch(_){_A(d,_,v)}D.open=b[0];D.close=b[1];D.clear=b[2];D.write=b[3];D.writeln=b[4];return q},g=function(u,o){try{o=new XMLHttpRequest()}catch(_){var m=".XMLHTTP",h="Msxml2"+m,v=[h+".6.0",h+".3.0","Microsoft"+m],k;for(k in v){try{o=new ActiveXObject(v[k]);break}catch(_){o=V}}}if(o){o.open("GET",u,X);o.send(null);return o.responseText}},j=function(v){return v==="\n"||v==="\r"},w=function(v){return v==="\t"||v==="\f"||v===" "||j(v)},z=function(v){return v==="-"||w(v)},i=0,r,n,y;while((i=c[I]("<",i))!==-1){var l=i+1,p=c[G](l),s=V,x=i;if(p==="!"||p==="/"){if(p==="!"&&c[G](++l)==="-"&&c[G](++l)==="-")if(c[G](++l)===">")i=l+1;else{r=c[I]("-->",l);if(r===-1)break;i=r+3}else{r=c[I](">",l);if(r===-1)break;i=r+1}continue}r=c[I](">",l);if(r===-1)break;i=r+1;if(r-l<6||(!w(p=c[G](l+6))&&p!==">")||c[Q](l,l+6)[M]()!==K)continue;n=c[Q](l+6,r),l=0;while((l=n[I]("=",l))!==-1){p=n[G](++l);if((p==="\""||p==="'")&&(r=n[I](p,++l))!==-1){if(w(n[G](l-6))&&n[Q](l-5,l-2)[M]()==="src"){s=g(n[Q](l,r));break}l=r+1}}r=i;while((l=c[I]("</",r))!==-1&&(r=c[I](">",l+2))!==-1){if(c[Q](l+2,r)[M]()===K)break;r++}if(r===-1)break;y=r+1;if(!s){while(w(c[G](i)))i++;r=l,l=i;if(c[G](i)==="<"&&c[G](++i)==="!"){while(!j(c[G](++i)));l=i+1}s=c[Q](l,r)}c=c[Q](0,x)+e(s)+c[Q](y),i=x}if(!_B(c))try{t.innerHTML=c;_W(t.id);return 1}catch(_){_A(d,_,c)}},_Z=function(t,i,e,o,c){if(T.F!==4){if(!t){T.F=4;for(i=H[N]-1;i>=0;i--){o=H[i],c=o.E&&D.getElementById(o.E);if(c&&(e=c.parentNode)){e.removeChild(c);e[J][R]=o.V;c=V}else if(o.P&&(e=D.getElementById(o.P)))e[J][R]=o.V}H=[]}else if((e=D.getElementById(t)))e[J].display="block";e=V;_W(t)}};S.getParameter=function(p){var q=L.search,l,r;if(_B(p))return q;l=q[I](p);if(l>0&&(l===1||q[G](l-1)==="&")&&q[G](l+=p[N])==="="){r=q[I]("&",++l);return _D(r===-1?q[Q](l):q[Q](l,r))}};S.init=function(a,m){if(_B(m))m=_M();T.A=_E(a),T.F=0,T.I=Math.random(),T.L=_E(L.href),T.M=_E(m),T.C=T.E=T.P=V};S.hide=function(t){if(T.F<3){var h=H[N],e,i,o;if(t)e=D.getElementById(t);else if(!_N()){i="rt:c"+h;D.write("<span id=\""+i+"\" style=\"display:none\"></span>");if(o=D.getElementById(i))e=o.parentNode}if(e){H[h]={"E":i,"P":e.id,"V":e[J][R]};e[J][R]="hidden";if(!h)_O(W,"load",function(){if(!T.F||T.F<2)_Z()});e=V}}};S.item=function(p){if(p){var a,s="item",e="_code=",t=typeof p,i,n,v;if(t===B)T.N=T.P=s+e+p;else if(t===A){if(p instanceof Array){for(i=0,n=p[N];i<n;)if(_V(v=p[i++]))a=_J([a,s+i+e+v])}else for(i in p)if((!i[I](s)||i==="subtotal")&&_V(v=p[i]))a=_J([a,i+"="+v]);T.N="",T.P=a}}};S.track=function(s,p){if(!_B(T.A))if(!T.F){T.F=1;if(!_T(s,p,1))_Z()}else _T(s,p,0)};S.category=function(){var a=arguments,n=a[N],p,c,i,v;if(n===1){if(_V(p=a[0])){T.C="c="+p;return}n=0;if(p instanceof Array)a=p,n=a[N]}if(n>0){for(i=0;i<n;)if(_V(v=a[i++])&&!_B(v))c=_J([c,"c"+i+"="+v]);T.C=c}};S.price=function(l,u){var p;if(parseFloat(l)>=0)p="pf="+l;if(parseFloat(u)>=0)p=_J([p,"pt="+u]);T.E=p};S.recommend=function(){_R(arguments,0)};S.recommendNow=function(){_R(arguments,1)};S.click=function(e){if(!_B(e)){var o=_F(e);if(o&&o.T){_U(o.S);return!0}}return X};S.observe=function(f){if(_N())_I(f,10);else _O(W,"load",f)};S.show=function(p){if(T.F===3&&p&&!_B(p.element)){var o=_F(p.element),t=D.getElementById(p.element);if(!o)o={"E":p.element},E[E[N]]=o;if(!T.R){T.R=p.domain;if(T.X){clearTimeout(T.X);T.X=V}}o.S=p.sid,o.T=p.event;if(t&&_X(t,p.content)&&o.T){var m="mousedown",k="keydown",f=function(e){e=e||W.event;if(!e)return;switch(e.type){case k:if(e.keyCode!=13)return;case m:_U(o.S)}};_O(t,m,f);_O(t,k,f)}t=V}};S.flush=_Z;S.Cookie={get:_G,set:_S,remove:function(p){p=p||{};p.expires="Thu, 01-Jan-1970 00:00:00 GMT";_S(p)}}})(Rtoaster,window)}