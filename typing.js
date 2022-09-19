var i = 0;

function Write() {
    var text = "Some text";
    if (i < text.length) {
        var speed = Math.floor(Math.random() * 80) + 30;
        setTimeout(Write, speed);
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
    }
}
