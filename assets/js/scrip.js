let menu = document.querySelector('#btn-menu')
let header = document.querySelector('.header')


menu.onclick = function () {
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}

window.onscroll = function () {
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}

var navbar = document.getElementById("navbar-items");
var btns = navbar.getElementsByClassName("nav");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active1");
        current[0].className = current[0].className.replace(" active1", "");
        this.className += " active1";
    });
}