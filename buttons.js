const close = 0;
const fullscreen = 1;
const minimalize = 2;

function button_event() {
    var buttons = [
        document.querySelectorAll('.close'),
        document.querySelectorAll('.fullscreen'),
        document.querySelectorAll('.minimalize'),
    ];

    for (var i = 0; i < buttons.length; i++) {
        for (var j = 0; j < buttons[i].length; j++) {
            switch (i) {
                case fullscreen:
                    buttons[i][j].onclick = function() {
                        alert("ads")
                    }
                    break;
                
                default: //minimalize or close (same shit)
                    buttons[i][j].onclick = function() {
                        alert("Nothing special")
                    }
                    break;
            }
        }
    }
}

button_event()