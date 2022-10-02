function select_file(el) {
    if (document.getElementById("selected")) document.getElementById("selected").removeAttribute("id");
    el.setAttribute("id", "selected");
    load_file(el);
    if (document.getElementById("menu_button_pressed")) document.getElementById("menu_button_pressed").removeAttribute("id");
}
function select_file_v2(el) {
    if (document.getElementById("selected")) document.getElementById("selected").removeAttribute("id");
    el.setAttribute("id", "selected");
    load_file_v2(el);
    if (document.getElementById("menu_button_pressed")) document.getElementById("menu_button_pressed").removeAttribute("id");
}
function load_file(el) {
    if (el.classList.length > 1) document.getElementById("main_content").innerHTML = document.getElementsByClassName(el.classList[1])[1].innerHTML;
}
function load_file_v2(el) {
    document.getElementsByClassName("window_content")[0].innerHTML = document.getElementById(el.classList[0]).innerHTML;
}
function dropd_menu() {
    document.getElementsByClassName("learn-pages")[0].setAttribute("id", "menu_button_pressed");
}
function dropd_menu_v2() {
    document.getElementsByClassName("t_window_inner_nav")[0].setAttribute("id", "menu_button_pressed");
}
function reveal_code(el) {
    if (window.innerWidth > 600) {
        document.getElementById("learn-c").style.gridTemplateColumns = "60% calc(40% - 10px)";
        document.getElementById("docs-title").style.width = "calc(60% - 16px)";
    }
    var elements = [
        "editor",
        "term"
    ];
    for(var i = 0; i < 2; i++)document.getElementById("main_" + elements[i] + "_content").innerHTML = document.getElementsByClassName(el.classList[1])[i + 1].innerHTML;
}

//# sourceMappingURL=learn.8f828a40.js.map
