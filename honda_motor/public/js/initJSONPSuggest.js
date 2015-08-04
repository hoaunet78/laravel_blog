/**
 * Copyright 2006-2008 MARS FLAG Corporation. All rights reserved.
 *
 * http://www.marsflag.com/
 */
function initJSONPSuggest(A,M){M=M||window.jQuery;if(!window.GALFSRAM){window.GALFSRAM={}}var G=A.interface_url||"suggest.x";var H=A.handler_name||"parent.suggest_ctxt";var K=A.callback||"load_suggest";var I=A.selected_bgcolor||"#ddd";var F=A.max||10;var C;var L=function(s){if(C){return }try{s=s||window.event;if(s&&s.type=="readystatechange"&&this.readyState!="complete"){return }B.onload=B.onreadystatechange=null;var V=B.contentWindow||window.frames[A.suggest_frame||"suggest_frame"];var O=V.document;var k=false;if(!A.show_data_graph){A.array_styles=A.array_styles||[];A.array_styles[A.array_styles.length]=".suggest_data_graph {display:none}"}if(A.array_styles){O.write('<style type="text/css"><!-- '+A.array_styles.join("")+"--></style>")}O.write('<body><div id="suggest_area"></div></body>');O.close();O.body.scroll="no";var d=O.getElementById("suggest_area");d.onselectstart=d.oncontextmenu=function(){return false};if(A.clone_styles){for(var r=0;r<A.clone_styles.length;r++){J.css(A.clone_styles[r],A.input_jquery.css(A.clone_styles[r]))}}var q="suggest_data_";var c=H;var P=c.replace(/^[^.]*\.(.*)$/,"$1");if(!GALFSRAM[P]){GALFSRAM[P]={}}var p=function(){J.css("visibility","visible")};var u=function(){J.css("visibility","hidden")};var t=function(e,i){if(!arguments.length){var x=O.getElementsByTagName("TABLE")[0];e=x.offsetWidth;i=x.offsetHeight;if(E){e+=3;i++}}B.style.width=e+"px";B.style.height=i+"px"};GALFSRAM[P]["resize_suggest"]=t;var v=function(){return J.css("visibility")=="visible"};var S=function(e){return O.getElementById(e)};var N=window.onresize;window.onresize=function(){g();if(N){N()}};var g=function(){var e=A.input_jquery[0];var i=YAHOO.util.Dom.getXY(e);B.style.left=i[0]+"px";B.style.top=(i[1]+e.offsetHeight)+"px";B.style.width=e.offsetWidth+"px"};GALFSRAM[K]=function(e){k=false;if(!e||e.length==0){if(!A.no_result_mess){return }k=true}g();var i={prefix:q,handler:c,handler:"parent.GALFSRAM."+P,data:e};if(k){i.data=[{word:A.no_result_mess,point:-1}]}suggest_tmpl(i,d);setTimeout("GALFSRAM."+P+"['resize_suggest']()",0);m=e;R=-1;p()};var Q=function(e){if(e.match(/^\s*$/)){return false}var x=["callback=GALFSRAM."+K,"q="+encodeURIComponent(e),"ie=utf8","max="+F];if(A.array_queries){x=x.concat(A.array_queries)}var i=G+"?"+x.join("&");jsonp.load("jsonp_suggest",i,"UTF-8");return i};var a=A.input_jquery.val();var m=[];var R=-1;var j=function(e){if(typeof e!="undefined"){h();R=e}if(m[R]){var x=S(q+R);x.backgroundColorOrg=x.style.backgroundColor;x.style.backgroundColor=I}};GALFSRAM[P]["focus"]=j;var h=function(){if(m[R]){var e=S(q+R);e.style.backgroundColor=e.backgroundColorOrg}};var Y=function(){if(R<0){R=0}else{h();R++}if(R>=m.length){R=-1;return }j()};var X=function(){if(R<0){R=m.length-1}else{h();R--;if(R==-1){return }}j()};var n=function(){var e=m[R];if(e){if(A.input_jquery.val()!=e.word){A.input_jquery.val(e.word);a=e.word;Q(e.word+" ");return false}}return true};var f;GALFSRAM[P]["suggest_mousedown"]=function(i){if(k){return }f=(new Date()).getTime()};GALFSRAM[P]["suggest_click"]=function(i){if(k){return false}A.input_jquery[0].focus();if(n()){A.input_jquery[0].form.submit()}else{return false}};var W={"9":"tab","16":"shift","17":"ctl","27":"esc","18":"alt","19":"pause/break","20":"caps lock","33":"pageup","34":"pagedown","35":"end","36":"home","37":"left","38":"up","40":"down","44":"print screen","45":"ins"};var l=false;var U=function(x){var i=x.keyCode;l=x.shiftKey;if(i==13&&R!=-1){return false}if(W[i]){return false}return true};var o=function(){var e=A.input_jquery.val();if(a==e){return }a=e;if(e==""){m=[];u()}else{Q(e)}};var w;var T=function(){if(!w){w=setInterval(o,100)}};var Z=function(){if(!w){return }clearInterval(w);w=null};var b={keyup:function(i){(U(i)!=false)&&o()},keypress:function(i){(U(i)!=false)&&T()},keydown:function(x){var i=x.keyCode;l=x.shiftKey;switch(i){case 9:if(!v()){return true}if(l){X()}else{Y()}break;case 40:Y();break;case 38:X();break;case 27:u();break;case 13:if(!n()){break}default:(U(x)!=false)&&T();return }return false},blur:function(x){var i=(new Date()).getTime();if(f+100>i){return }Z();u()},focus:function(i){if(m.length==0&&!k){return }p()}};if(window.opera||(navigator.userAgent.indexOf("Gecko")>=0&&navigator.userAgent.indexOf("KHTML")==-1)){A.input_jquery.keypress(b.keypress)}else{A.input_jquery.keyup(b.keyup)}A.input_jquery.keydown(b.keydown).blur(b.blur).focus(b.focus);if(D){clearInterval(D)}C=true}catch(s){}};var D;var E=navigator.userAgent.match(/AppleWebKit\/4\d\d/);if(typeof (A.input_jquery)=="string"){A.input_jquery=M(A.input_jquery)}if(!A.input_jquery||!A.input_jquery[0]){return }A.input_jquery.attr("autocomplete","off");var B=document.createElement("IFRAME");var J=M(B);B.name=B.id=A.suggest_frame||"suggest_frame";B.frameBorder=0;B.scrolling="no";J.css("position","absolute").css("visibility","hidden").css("zIndex",10000).css("top","0px").css("height","0px").css("width",A.input_jquery[0].offsetWidth+"px").css("border","0px");B.onload=B.onreadystatechange=L;B.src="about:blank";M(document.body).append(B);if(E){D=setInterval(L,100)}};