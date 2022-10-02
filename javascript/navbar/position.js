
import gsap from 'gsap';

export function swipe_direction() {


    let location = window.location.href.split("/").pop();
    let status = document.getElementById("status_nav");
    let learn = document.getElementsByClassName("learn_nav");
    let news = document.getElementById("news_nav");
    let index = document.getElementById("index_nav");

    if (location === "index.html") {
        nav_focus(index);
        status.setAttribute("data-transition", "swipe_r");
        for (var i = 0; i < learn.length; i++) {
            learn[i].setAttribute("data-transition", "swipe_r");
        }
        news.setAttribute("data-transition", "swipe_r");

    } else if (location === "status.html") {

        nav_focus(status);
        learn.setAttribute("data-transition", "swipe_r");

        news.setAttribute("data-transition", "swipe_r");

    } else if (location === "learn.html") {
        nav_focus(learn);
        status.setAttribute("data-transition", "swipe_l");
        news.setAttribute("data-transition", "swipe_r");

    } else {

        nav_focus(news);
        learn.setAttribute("data-transition", "swipe_l");

        status.setAttribute("data-transition", "swipe_l");

    }

}

function nav_focus(site) {
    var tl = gsap.timeline();
    var old = document.getElementsByClassName("highlighted")[0];

    gsap.to(old, {
        duration: .3,
        backgroundColor: "#4d4a46",
        padding: "10px",
    });

    gsap.to(site, {
        duration: .3,
        backgroundColor: "#353330",
        padding: "10px 20px 10px 20px",
        borderRadius: "5px"
    })

    old.removeAttribute('class');


    site.setAttribute("class", "highlighted");

};