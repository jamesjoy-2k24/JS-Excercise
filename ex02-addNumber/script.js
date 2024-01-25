var shows = document.getElementById("show");
var addss = document.getElementById("add");
var add2s = document.getElementById("add2");
var resets = document.getElementById("reset");
var colors = document.getElementById("color");
var results = document.getElementsByTagName("span");
var count = 0;

//Write function to the buttons
function show() {
    results[0].innerHTML = count;
}
function add() {
    count++;
    results[0].innerHTML = count;
}
function add2() {
    count = count + 2;
    results[0].innerHTML = count;
}
function colorChange() {
    results[0].style.color = "red";
}

function reset() {
    count = 0;
    results[0].innerHTML = count;
    results[0].removeAttribute("style");
}
