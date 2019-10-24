// 问题:无法实现滚动效果
window.onload = function () {
    new IScroll(document.querySelector(".zh_scroll"), {
        scrollX: true,
        scrollY: false
    });
    new IScroll(document.querySelector(".zh_sortLeft"), {
        scrollX: false,
        scrollY: true
    });
    new IScroll(document.querySelector(".zh_sortRight"), {
        scrollX: false,
        scrollY: true
    });
}
$(function(){
    $('.carousel').carousel()
});