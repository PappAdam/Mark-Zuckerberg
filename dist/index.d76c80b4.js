var contents = [
    "id=1;Text when window is not on focus;Text when the :nwindow is on focus Loredem!",
    "id=2;Szia:nBarni;|add:=style='color: #678'|Some| very long text in the content div of the terminal window",
    "id=3;Hahah :nHehe;|add:=style='color: red'|Lorem ipsum dolor sit amet consectetur adipisicing elit.| Eveniet numquam nisi illum aut ipsa veritatis voluptas| nulla facere at autem explicabo officiis nam dolorum saepe eaque, et quod minus sint!", 
];
var XPressed = 0;
function button_press(button) {
    if (button.classList.contains("fullscreen")) {
        if (document.getElementById("focus")) document.getElementById("focus").removeAttribute("id");
        button.parentElement.parentElement.parentElement.setAttribute("id", "focus");
    } else {
        XPressed++;
        if (button.parentElement.parentElement.parentElement.id == "focus" && document.getElementById("focus")) document.getElementById("focus").removeAttribute("id");
        else if (XPressed % 10 == 0 && XPressed != 0) alert("Albert Einstein: The definition of insanity is doing the same thing over and over and expecting different results.");
    }
    setTimeout(fill_content, 250);
}
function fill_content() {
    var elements = document.querySelectorAll(".content");
    for(var i = 0; i < elements.length; i++)if (elements[i].parentElement.id == "focus") elements[i].innerHTML = parse_content(elements[i].id, 0);
    else elements[i].innerHTML = parse_content(elements[i].id, 1);
}
function parse_content(id, focus) {
    var parsed_content = "";
    for(var i = 0; i < contents.length; i++)if (contents[i].includes("id=" + id)) {
        var content = contents[i].split(";")[focus + 1].split(":n");
        for(var j = 0; j < content.length; j++){
            var styled = content[j].split("|");
            var style_close = false;
            var s_content = "<p>";
            for(var k = 0; k < styled.length; k++){
                if (styled[k].includes("add:=")) {
                    s_content += "<span " + styled[k].substring(5) + ">";
                    style_close = true;
                } else if (style_close) {
                    s_content += styled[k] + "</span>";
                    style_close = false;
                } else s_content += styled[k];
            }
            parsed_content += s_content + "</p>";
        }
    }
    return parsed_content;
}

//# sourceMappingURL=index.d76c80b4.js.map
