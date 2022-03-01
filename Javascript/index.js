tap = document.querySelector('.menu-btn');
toggle = document.querySelector('.toggle');
cross = document.querySelector('#cross');
tap.addEventListener('click', () => {
    toggle.style.right = "0px";
});
cross.addEventListener('click', () => {
    toggle.style.right = "-400px"
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