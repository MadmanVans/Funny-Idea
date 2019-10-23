window.onload = function () {
    new IScroll(document.querySelector(".zh_scroll_bar"), {
        scrollX: true,
        scrollY: false
    });
    new IScroll(document.querySelector(".zh_sort_left"), {
        scrollX: false,
        scrollY: true
    });
    new IScroll(document.querySelector(".zh_sort_right"), {
        scrollX: false,
        scrollY: true
    });
}
$(function(){
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('.carousel').carousel()
});