function select_file() {
    var elements = document.getElementsByClassName("pages");
    for(var i = 0; i < elements.length; i++)elements[i].onlick = function() {
        console.log(elements[i]);
    };
}
select_file();

//# sourceMappingURL=index.8f828a40.js.map
