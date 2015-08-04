// JavaScript Document

<!--
var Appversion = navigator.appVersion.charAt(0);
var Appname = navigator.appName.charAt(0);
var Safari = navigator.userAgent.indexOf("Safari") != -1;
var Opera = navigator.userAgent.indexOf("Opera") != -1;
var IE = navigator.userAgent.indexOf("MSIE") != -1;
var IE7 = navigator.userAgent.indexOf("MSIE 7.0") != -1;
var FireFox = navigator.userAgent.indexOf("FireFox") != -1;

with( document ){
	if(navigator.appVersion.indexOf("Mac") > -1){
		if(Safari){
			write("<link rel='stylesheet' href='/css/mac_saf.css' type='text/css'>");
		}else if(FireFox){
			write("<link rel='stylesheet' href='/css/mac_saf.css' type='text/css'>");
		}else if(IE && !Opera){
			write("<link rel='stylesheet' href='/css/mac_saf.css' type='text/css'>");
		}else if(Opera){
			write("<link rel='stylesheet' href='/css/mac_saf.css' type='text/css'>");
		}else{
			write("<link rel='stylesheet' href='/css/mac_saf.css' type='text/css'>");
		}
	}else{
		if(FireFox){
			write("<link rel='stylesheet' href='/css/win_ie.css' type='text/css'>");
		}else if(IE7){
			write("<link rel='stylesheet' href='/css/win_ie.css' type='text/css'>");
		}else if(IE && !Opera){
			write("<link rel='stylesheet' href='/css/win_ie.css' type='text/css'>");
		}else if(Opera){
			write("<link rel='stylesheet' href='/css/win_ie.css' type='text/css'>");
		}else{
			write("<link rel='stylesheet' href='/css/win_ie.css' type='text/css'>");
		}
	}
	write("</link>");
}


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


//-->