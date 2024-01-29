var results = document.getElementsByTagName("span");
var count = 0;

//Write function to the buttons
function show() {
    results[0].innerHTML = count;
};
function add() {
    results[0].innerHTML = count++;
};
function add2() {
    results[0].innerHTML = (count = count + 2);
};
function colorChange() {
    results[0].style.color = "red";
};
function reset() {
    results[0].innerHTML = (count = 0);
    results[0].removeAttribute("style");
};