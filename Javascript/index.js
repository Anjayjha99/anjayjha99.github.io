tap = document.querySelector('.menu-btn');
toggle = document.querySelector('.toggle');
cross = document.querySelector('#cross');
tap.addEventListener('click', () => {
    toggle.style.right = "0px";
});
cross.addEventListener('click', () => {
    toggle.style.right = "-400px";
});

let typed = new Typed(".typing", {
    strings: ["Anjay Kant Jha", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400
})
var indexbtn = document.getElementById("index-btn");
var indexnav = document.getElementById("index-nav");
var index = document.getElementById("index");

indexnav.style.right = "-250px";
indexbtn.onclick = function () {
    if (indexnav.style.right == "-250px") {
        indexnav.style.right = "0";
        index.src = "images/close.png";
    }
    else {
        indexnav.style.right = "-250px";
        index.src = "images/menu.png";
    }
}