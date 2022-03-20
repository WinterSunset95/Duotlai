var prevScrollPos = window.pageYOffset;
var checkpoint = 400;
var head = document.getElementById('head');
var height = head.offsetHeight + 10;
var body = document.getElementById('body');
body.style.paddingTop = height + "px";
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    //if (prevScrollPos > currentScrollPos) {
    //    document.getElementById("footer").style.bottom = "-70px"; 
    //} else {
    //    document.getElementById("footer").style.bottom = "5px"
    //}
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
