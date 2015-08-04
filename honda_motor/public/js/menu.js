$(function() {
    $("ul#dropmenu li").hover(function() {
        $(">ul:not(:animated)", this).slideDown(500);
    }, function() {
        $(">ul", this).slideUp(300);
    });
});