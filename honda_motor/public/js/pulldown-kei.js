// JavaScript Document

$(function(){

//EV 
    $("ul.menu li.ev").mouseover(function(){
		$("ul.menu li.ev img").attr("src","../images/sidenavi_ev_on.gif");
	}).mouseout(function(){
		$("ul.menu li.ev img").attr("src","../images/sidenavi_ev_off.gif");
	});
		
//�v���O�C���n�C�u���b�h 
    $("ul.menu li.phev").mouseover(function(){
		$("ul.menu li.phev img").attr("src","../images/sidenavi_phev_on.gif");
	}).mouseout(function(){
		$("ul.menu li.phev img").attr("src","../images/sidenavi_phev_off.gif");
	});
	
//�n�C�u���b�h 
    $("ul.menu li.hybrid").mouseover(function(){
		$("ul.menu li.hybrid img").attr("src","../images/sidenavi_hyb_on.gif");
	}).mouseout(function(){
		$("ul.menu li.hybrid img").attr("src","../images/sidenavi_hyb_off.gif");
	});

//�~�j�o��
    $("ul.menu li.minivan").mouseover(function(){
		$("ul.menu li.minivan img").attr("src","../images/sidenavi_minivan_on.gif");
	}).mouseout(function(){
		$("ul.menu li.minivan img").attr("src","../images/sidenavi_minivan_off.gif");
	});

//�R���p�N�g
    $("ul.menu li.compact").mouseover(function(){
		$("ul.menu li.compact img").attr("src","../images/sidenavi_compact_on.gif");
	}).mouseout(function(){
		$("ul.menu li.compact img").attr("src","../images/sidenavi_compact_off.gif");
	});
	
//�Z�_��
    $("ul.menu li.sedan").mouseover(function(){
		$("ul.menu li.sedan img").attr("src","../images/sidenavi_sedan_on.gif");
	}).mouseout(function(){
		$("ul.menu li.sedan img").attr("src","../images/sidenavi_sedan_off.gif");
	});
	
//���S��
    $("ul.menu li.wagon").mouseover(function(){
		$("ul.menu li.wagon img").attr("src","../images/sidenavi_wagon_on.gif");
	}).mouseout(function(){
		$("ul.menu li.wagon img").attr("src","../images/sidenavi_wagon_off.gif");
	});
	
//�X�|�[�c�^SUV
    $("ul.menu li.sports-suv").mouseover(function(){
		$("ul.menu li.sports-suv img").attr("src","../images/sidenavi_sports-suv_on.gif");
	}).mouseout(function(){
		$("ul.menu li.sports-suv img").attr("src","../images/sidenavi_sports-suv_off.gif");
	});
	
//�y
//   $("ul.menu li.kei").mouseover(function(){
//		$("ul.menu li.kei img").attr("src","../sidenavi-images/sidenavi_kcar_on.gif");
//	}).mouseout(function(){
//		$("ul.menu li.kei img").attr("src","../sidenavi-images/sidenavi_kcar_off.gif");
//	});
	
	
	$("ul.sub").hide();
    $("ul.menu li").hover(function(){
            $("ul:not(:animated)",this).slideDown("fast")
        },
        function(){
            $("ul",this).slideUp("fast");
    })
});


