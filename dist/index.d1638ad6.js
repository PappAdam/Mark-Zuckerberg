function should_swipe() {
    var elementh = document.getElementsByClassName("heading")[0];
    if (document.getElementById("2").parentElement.id == "focus") animate_flex();
    else animate_flex();
}
function animate_flex() {
    var boxNode = document.getElementsByClassName("heading")[0];
    TweenLite.set(boxNode, {
        x: "+=0"
    });
    var box = {
        node: boxNode,
        x: boxNode.offsetLeft,
        y: boxNode.offsetTop,
        transform: boxNode._gsTransform
    };
    var lastX = box.x;
    var lastY = box.y;
    console.log(lastX);
    console.log(lastY);
}

//# sourceMappingURL=index.d1638ad6.js.map
