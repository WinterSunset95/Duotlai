var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("footer").style.bottom = "-50px"; 
    } else {
        document.getElementById("footer").style.bottom = "10px"
    }
    prevScrollPos = currentScrollPos;
}
