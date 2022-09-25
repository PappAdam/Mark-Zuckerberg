function button_press(button) {
    if (button.classList.contains('fullscreen')) {
        button.parentElement.parentElement.parentElement.setAttribute('style', 'width: 650px; height: 70vh');
    }   
    else {
        button.parentElement.parentElement.parentElement.setAttribute('style', 'width: 600px; height: 47vh');
    }
}
