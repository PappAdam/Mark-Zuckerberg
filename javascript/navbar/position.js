export function swipe_direction() {

    let location = window.location.href.split("/").pop();
    let status = document.getElementById("status_nav");
    let learn = document.getElementById("learn_nav");
    let news = document.getElementById("news_nav");

    if (location === "index.html") {
        console.log(location);
        status.setAttribute("data-transition", "swipe_r");
        learn.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");

    } else if (location === "status.html") {
        console.log(location);
        learn.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");

    } else if (location === "learn.html") {
        console.log(location);
        status.setAttribute("data-transition", "swipe_l");
        news.setAttribute("data-transition", "swipe_r");

    } else {
        console.log(location);
        learn.setAttribute("data-transition", "swipe_l");
        status.setAttribute("data-transition", "swipe_l");
    }
}
