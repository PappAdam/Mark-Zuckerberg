export function swipe_direction() {

    let status = document.getElementById("status_nav");
    let learn = document.getElementById("learn_nav");
    let news = document.getElementById("news_nav");

    if (window.location.href.split("/").pop() === "index.html") {
        console.log(window.location.href.split("/").pop());
        status.setAttribute("data-transition", "swipe_r");
        learn.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");

    } else if (window.location.href.split("/").pop() === "status.html") {
        console.log(window.location.href.split("/").pop());
        learn.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");

    } else if (window.location.href.split("/").pop() === "learn.html") {
        console.log(window.location.href.split("/").pop());
        status.setAttribute("data-transition", "swipe_l");
        news.setAttribute("data-transition", "swipe_r");

    } else {
        console.log(window.location.href.split("/").pop());
        learn.setAttribute("data-transition", "swipe_l");
        status.setAttribute("data-transition", "swipe_l");
    }
}
