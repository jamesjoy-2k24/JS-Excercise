var color = document.getElementById("colorbtn");
var reset = document.getElementById("reset btn");

function colorChange(){
    color.style.backgroundColor = "black";
    color.style.color = "red";
}
function resetColor(){
    color.removeAttribute("style");
}