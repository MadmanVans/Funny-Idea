// 问题:无法实现滚动效果
window.onload = function () {
    new IScroll(document.querySelector(".zh_scroll"), {
        scrollX: true,
        scrollY: false,
        bounce: false
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
$(function () {
    var $carousels = $(".carousel");
    var starX, endX;
    var offset = 30;
    // 注册滑动事件
    $carousels.on("touchstart", function (e) {
        starX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on("touchmove", function (e) {
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on("touchend", function (e) {
        var distance = Math.abs(starX - endX);
        if (distance > offset) {
            $(this).carousel(starX > endX ? "next" : "prev");
        }
    });
});