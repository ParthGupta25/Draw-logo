canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    console.log(e.clientX, "clientX", e.clientY, "clientY");
    console.log(canvas.offsetLeft, "canvas.offsetLeft", canvas.offsetTop, "canvas.offsetTop");
    console.log(mouseX, "mouseX", mouseY, "mouseY");

    circle(mouseX, mouseY);
}

function circle(mouseX, mouseY) {
    color = document.getElementById("color_box").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.arc(mouseX, mouseY, 75, 0, 2 * Math.PI);
    ctx.stroke();
}
