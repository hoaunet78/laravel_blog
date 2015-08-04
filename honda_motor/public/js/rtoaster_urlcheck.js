
var url_name = location.href.split("/");//URLの文字列を「/」ごとに分割
var dir_name = url_name[3];//URLの「/」で区切られた4番目を取得

var auto_contents = ["ACTY","Fit","FITSHUTTLE","ODYSSEY","ACCESS","auto","STEPWGN","usersvoice","FREED","STEPWGNSPADA","dog","STREAM","LIFE","auto-archive","CR-Z","FREEDSPIKE","ELYSION","SUPERCUB","CR-V","hondafan","INSIGHT","navi","HOT","internavi","VAMOS","ACCORDTOURER","recall","auto-lineup","CIVICTYPE-R","LEGEND","ZESTSPARK","ACCORD","familymeeting","golf","INSPIRE","CYBERMALL","tech","ZEST","hondacars","CIVICHYBRID","HFC","C-CARD","enjoyhonda","movie","green-tax","dealerlocator","virtual-showroom","afterservice","S2000","hybrid","MOBILIOSpike","carbuyersguide","FCX","MOBILIO","auto-parts","sportscar","scooterweb","democar","kids","fundrive","shaken","Thats","car-care","mama","ACCORDEURO-R","wanderdog","outdoor","Fit-ARIA","tokuso","CIVIC","ciao","5nominivan","S-MX","ecogp","INTEGRA","CROSSROAD","AIRWAVE","tabibito","Edix","talkmagazine","childseat","LandL","auto-recycle","greenmachine","eco-assist","auto-environment","auto-ranking","N","Nbox","Nboxplus","N-ONE"];//クルマ関連コンテンツの配列

for (var idx in auto_contents) {
	if ( auto_contents[idx]  == dir_name ) {
			with( document ) {
			write('<script src="//rt.rtoaster.jp/Rtoaster.js" type="text/javascript"></script>');
			write('<script language="JavaScript" type="text/javascript" charset="utf-8" src="/js/rtoaster_base.js"></script>');
		}
	}
}