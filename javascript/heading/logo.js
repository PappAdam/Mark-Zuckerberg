import Tween from 'gsap';

var hcount = 0;

window.addEventListener('resize', function (e) {

    var elementh = document.getElementsByClassName("heading-container")[0];

    if (document.getElementById("2").parentElement.id == "focus" && window.innerWidth > 1200) {

        elementh.style.left = `20px`;
        console.log(window.width);


    } else {

        elementh.style.left = `calc(50% - calc(calc(55vh - 4vw) / 2))`;

    }

})

document.querySelectorAll(".t_window_div")[1].addEventListener('click', function (e) {

    var elementh = document.getElementsByClassName("heading-container")[0];

    if (document.getElementById("2").parentElement.id == "focus" && window.innerWidth > 1200) {

        elementh.style.left = `20px`;
        console.log(window.width);


    } else {

        elementh.style.left = `calc(50% - calc(calc(55vh - 4vw) / 2))`;

    }
})

document.getElementById("horse").addEventListener('click', function (e) {
    hcount++

    if (hcount % 5 == 0) {
        document.getElementById("nyihaha").play();
    }

})

