function button_press(button) {
    if (button.classList.contains("fullscreen")) {
        if (document.getElementById("focus")) document.getElementById("focus").removeAttribute("id");
        button.parentElement.parentElement.parentElement.setAttribute("id", "focus");
    } else if (button.parentElement.parentElement.parentElement.id == "focus" && document.getElementById("focus")) document.getElementById("focus").removeAttribute("id");
}

//# sourceMappingURL=index.d76c80b4.js.map
