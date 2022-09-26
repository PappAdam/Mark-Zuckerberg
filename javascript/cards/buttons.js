function button_press(button) {
    if (button.classList.contains('fullscreen')) {
        if (document.getElementById("focus")) {
            document.getElementById("focus").removeAttribute("id");
        }
        button.parentElement.parentElement.parentElement.setAttribute('id', 'focus');
    }
    else {
        if (document.getElementById("focus")) {
            document.getElementById("focus").removeAttribute("id");
        }
    }
}