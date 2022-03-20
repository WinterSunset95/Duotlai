var prevScrollPos = window.pageYOffset;
var head = document.getElementById('head');
var checkpoint = head.offsetHeight;
var height = head.offsetHeight + 10;
var tabs = document.getElementById('tabs');
tabs.style.paddingTop = height + "px";
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("backToTop").style.bottom = "-70px"; 
    } else {
        document.getElementById("backToTop").style.bottom = "15px"
    }
    if (currentScrollPos <= checkpoint) {
        opacity = 1 - currentScrollPos/checkpoint;
        scale = 1 - currentScrollPos/1000;
        percent = 50 + currentScrollPos/20;
    }
    else {
        opacity = 0;
        scale = 1
    }
    prevScrollPos = currentScrollPos;
    document.getElementById('head').style.opacity = opacity;
    document.getElementById('head').style.transform = "scale(" + scale + ")";
}
