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
function loadExternal() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i=0; i<z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("w3-include-html");
                    includeExternal();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};
window.onload = function () {
    document.getElementById('homeButton').click();
}