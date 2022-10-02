// var contents = [ // :n => new line; first part => unfocused sec part => focused (separeted by ;) 
//     'id=1<-->some text<--><p><span style=\'color: #85807a\'>{</span></p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>   "made by":</span> <span style=\'color: #85807a\'>{</span></p><p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>        "name":</span> "Csizmadia Barnabas",</p><p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>        "github-user":</span> "SeenLenz"</p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #85807a\'>}</span></p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>    "title":</span> "Status",</p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>    "descr":</span> "Rise of the rust programming language",</p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>   "used sources":</span> "areweyet pages"</p><p><span style=\'color: #85807a\'>}</span></p>',
//     'id=2<--><--><p><span style=\'color: #85807a\'>{</span></p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>   "made by":</span> <span style=\'color: #85807a\'>{</span></p><p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>        "name":</span> "Papp Adam",</p><p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>        "github-user":</span> "PappAdam"</p><p>&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #85807a\'>}</span> </p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>    "title":</span> "Learn",</p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>    "descr":</span> "Learning resources for rust",</p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>   "used sources":</span> "rust book, and my knowledge"</p><p><span style=\'color: #85807a\'>}</span></p>',
//     'id=3<-->Hahah :nHehe<--><p><span style=\'color: #85807a\'>{</span></p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>   "made by":</span> <span style=\'color: #85807a\'>{</span></p><p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>        "name":</span> "Papp Zsombor",</p><p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>        "github-user":</span> "PappZsombor"</p><p>&emsp;&emsp;&emsp;&emsp;&emsp;<span style=\'color: #85807a\'>}</span> </p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>    "title":</span> "News",</p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>    "descr":</span> "News and releases",</p><p>&emsp;&emsp;&emsp;&emsp;<span style=\'color: #00798C\'>   "used sources":</span> "rusts official website"</p><p><span style=\'color: #85807a\'>}</span></p>',
// ];
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
} // function fill_content() {
 //     var elements = document.querySelectorAll('.content');
 //     for (var i = 0; i < elements.length; i++) {
 //         if (elements[i].parentElement.id == 'focus') {
 //             elements[i].innerHTML = parse_content(elements[i].id, 0);
 //         }
 //         else {
 //             elements[i].innerHTML = parse_content(elements[i].id, 1);
 //         }
 //     }
 // }
 // function parse_content(id, focus) {
 //     var parsed_content = "";
 //     for (var i = 0; i < contents.length; i++) {
 //         if (contents[i].includes("id=" + id)) {
 //             var content = contents[i].split('<-->')[focus + 1].split(':n');
 //             for (var j = 0; j < content.length; j++) {
 //                 var styled = content[j].split("|");
 //                 var style_close = false;
 //                 var s_content = "<p>";
 //                 for (var k = 0; k < styled.length; k++) {
 //                     if (styled[k].includes('add:=')) {
 //                         s_content += "<span " + styled[k].substring(5) + ">";
 //                         style_close = true;
 //                     }
 //                     else if (style_close) {
 //                         s_content += styled[k] + "</span>";
 //                         style_close = false;
 //                     }
 //                     else {
 //                         s_content += styled[k];
 //                     }
 //                 }
 //                 parsed_content += s_content + "</p>";
 //             }
 //         }
 //     }
 //     return parsed_content;
 // }

//# sourceMappingURL=index.d76c80b4.js.map
