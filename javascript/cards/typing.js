var i = 0;
var text = "Some text";

function write(id, _text) {
    console.log(_text);
    document.getElementById(id).innerText += _text.substring(0, 1);
    var speed = Math.floor(Math.random() * 80) + 30;
    if (_text.length > 1)
        setTimeout(write, speed, id, _text.substring(1));
}


function h1Write() {
    document.querySelectorAll('h1').forEach(h1 => write(h1.id, text));
}

h1Write();
