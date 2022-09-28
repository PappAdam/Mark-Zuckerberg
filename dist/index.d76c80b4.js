function button_press(button) {
    if (button.classList.contains("fullscreen")) {
        if (document.getElementById("focus")) document.getElementById("focus").removeAttribute("id");
        button.parentElement.parentElement.parentElement.setAttribute("id", "focus");
    } else if (button.parentElement.parentElement.parentElement.id == "focus" && document.getElementById("focus")) document.getElementById("focus").removeAttribute("id");
    setTimeout(fill_content, 500);
}
function fill_content() {
    var elements = document.querySelectorAll(".content");
    for(var i = 0; i < elements.length; i++)if (elements[i].parentElement.id == "focus") elements[i].innerHTML = "<p>text</p><p>when</p><p>this window is</p><p>focused</p>";
    else elements[i].innerHTML = "<p>text</p><p>when</p><p>it isn't</p>";
}

//# sourceMappingURL=index.d76c80b4.js.map
