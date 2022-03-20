var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("footer").style.bottom = "-70px"; 
    } else {
        document.getElementById("footer").style.bottom = "5px"
    }
    prevScrollPos = currentScrollPos;
}
