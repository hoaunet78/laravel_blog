//�T�u�f�B���N�g���̒�`
var gNaviSubdir = [
	[],
	[
		"/auto/"
	],
	[
		"/motor/"
	],
	[
		"/power/"
	],
	[
		"/motorsports/"
	],
	[
		"/tech/"
	],
	[
		"/corporate/"
	]
];


var gNaviCurrent = -1;
var gNaviBackgroundX = [
	"0",
	"-161px",
	"-265px",
	"-375px",
	"-485px",
	"-595px",
	"-705px",
];

function gNaviCurrentCheck() {
	for (var i = 0; i < gNaviSubdir.length; i++) {
		for (var j = 0; j < gNaviSubdir[i].length; j++) {
			var subdir = gNaviSubdir[i][j];
			if (location.pathname.substr(0, subdir.length) == subdir) {
				gNaviCurrent = i;
				break;
			}
		}
		if (gNaviCurrent > 0) {
			break;
		}
	}
	
	if (gNaviCurrent > 0) {
		var atag = document.getElementById("gnav_"+gNaviCurrent+"_atag");
		atag.style.backgroundPosition = gNaviBackgroundX[gNaviCurrent] + " -80px";
	}
}

function onGNaviMouseOver(item)
{
	var subnavi = document.getElementById("gnav_"+item+"_subnavi");
	subnavi.style.display = "block";

	if (gNaviCurrent != item) {
		var atag = document.getElementById("gnav_"+item+"_atag");
		atag.style.backgroundPosition = gNaviBackgroundX[item] + " -80px";
	}

}

function onGNaviMouseOut(item)
{
	var subnavi = document.getElementById("gnav_"+item+"_subnavi");
	subnavi.style.display = "none";

	if (gNaviCurrent != item) {
		var atag = document.getElementById("gnav_"+item+"_atag");
		atag.style.backgroundPosition = gNaviBackgroundX[item] + " -20px";
	}
}

gNaviCurrentCheck();


document.write("<script type='text/javascript' src='/js/jquery-1.6.2.min.js'><\/script>");


if(typeof(window.addEventListener) == 'function'){
	document.getElementById("MF_form_phrase").addEventListener("focus", function(){
		this.style.color = "#000000";
		if(this.value == "�������[�h����"){
			this.value = "";
		}
	}, true);
	document.getElementById("MF_form_phrase").addEventListener("blur", function(){
		if(this.value == ""){
			this.style.color = "#999999";
			this.value = "�������[�h����";
		}
	}, true);
} else {
	document.getElementById("MF_form_phrase").attachEvent("onfocus", function(){
		event.srcElement.style.color = "#000000";
//		event.srcElement.style.backgroundPosition = "left 1px";
		if(event.srcElement.value == "�������[�h����"){
			event.srcElement.value = "";
		}
	});
	document.getElementById("MF_form_phrase").attachEvent("onblur", function(){
		if(event.srcElement.value == ""){
			event.srcElement.style.color = "#999999";
			event.srcElement.value = "�������[�h����";
		}
	});
}


