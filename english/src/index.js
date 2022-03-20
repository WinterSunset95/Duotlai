var prevScrollPos = window.pageYOffset;
var head = document.getElementById('head');
var checkpoint = head.offsetHeight;
var height = head.offsetHeight + 10;
var tabs = document.getElementById('tabs');
tabs.style.paddingTop = height + "px";
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("bodyitem");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += "active";
}
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
openTab(onclick, 'home');