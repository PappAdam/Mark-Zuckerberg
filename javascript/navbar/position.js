function swipe_direction(position) {

    switch (position) {
        case 0:
            document.getElementById("nav0").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav1").setAttribute("data-transition", "swipe_l");
            document.getElementById("nav2").setAttribute("data-transition", "swipe_l");
            document.getElementById("nav3").setAttribute("data-transition", "swipe_l");
        case 1:
            document.getElementById("nav0").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav1").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav2").setAttribute("data-transition", "swipe_l");
            document.getElementById("nav3").setAttribute("data-transition", "swipe_l");
        case 2:
            document.getElementById("nav0").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav1").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav2").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav3").setAttribute("data-transition", "swipe_l");
        case 3:
            document.getElementById("nav0").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav1").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav2").setAttribute("data-transition", "swipe_r");
            document.getElementById("nav3").setAttribute("data-transition", "swipe_r");
    }
}
