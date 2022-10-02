
export function swipe_direction() {


    let location = window.location.href.split("/").pop();
    let status = document.getElementById("status_nav");
    let learn = document.getElementById("learn_nav");
    let news = document.getElementById("news_nav");
    let index = document.getElementById("index_nav");

    if (location === "index.html") {
        console.log(location);
        status.setAttribute("data-transition", "swipe_r");
        learn.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");

        // document.getElementsByClassName("highlighted")[0].style.padding = "10px";
        // document.getElementsByClassName("highlighted")[0].style.backgroundColor = "transparent";
        document.getElementsByClassName("highlighted")[0].removeAttribute("class");
        index.setAttribute("class", "highlighted");

    } else if (location === "status.html") {
        console.log(location);
        learn.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");
        document.getElementsByClassName("highlighted")[0].removeAttribute("class");
        status.setAttribute("class", "highlighted");


    } else if (location === "learn.html") {
        console.log(location);
        status.setAttribute("data-transition", "swipe_l");
        news.setAttribute("data-transition", "swipe_r");
        document.getElementsByClassName("highlighted")[0].removeAttribute("class");
        learn.setAttribute("class", "highlighted");

    } else {
        console.log(location);
        learn.setAttribute("data-transition", "swipe_l");
        status.setAttribute("data-transition", "swipe_l");
        document.getElementsByClassName("highlighted")[0].removeAttribute("class");
        news.setAttribute("class", "highlighted");
    }

    // nav_focus(location);
}

// function nav_focus() {
//     document.getElementById("highlighted").removeAttribute('highlighted');
//     document.getElementById(`${location.split(".")[0]}_nav`)

// }