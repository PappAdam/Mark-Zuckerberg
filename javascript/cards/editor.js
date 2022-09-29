var contents = [ // :n => new line; first part => unfocused sec part => focused (separeted by ;) 
    "id=1;Text when window is not on focus;Text when the :nwindow is on focus",
    "id=2;Szia:nBarnika;Pancser:n:nvagy",
    "id=3;Hahah :nHehe;XDDDDDD :nHUHU",
];

function button_press(button) {
    if (button.classList.contains('fullscreen')) {
        if (document.getElementById("focus")) {
            document.getElementById("focus").removeAttribute("id");
        }
        button.parentElement.parentElement.parentElement.setAttribute('id', 'focus');

    }
    else {
        if (button.parentElement.parentElement.parentElement.id == "focus" && document.getElementById("focus")) {
            document.getElementById("focus").removeAttribute("id");
        }
    }
    setTimeout(fill_content, 250);
}

function fill_content() {
    var elements = document.querySelectorAll('.content');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].parentElement.id == 'focus') {
            elements[i].innerHTML = parse_content(elements[i].id, 0);
        }
        else {
            elements[i].innerHTML = parse_content(elements[i].id, 1);
        }
    }
}


function parse_content(id, focus) {
    var parsed_content = "";
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].includes("id="+id)) {
            var content = contents[i].split(';')[focus+1].split(':n');

            for (var j = 0; j < content.length; j++) {
                parsed_content += "<p>" + content[j] + "</p>";
            }
        }
    }

    return parsed_content;
}