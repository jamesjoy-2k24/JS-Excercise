var a = document.createElement("p");
document.body.appendChild(a);
var count = 0;

function show() {
    a.innerHTML = count;
};
function add() {
    count++;
    a.innerHTML = count;
};
function colorChange() {
        a.style.color = "red";
};
function reset() {
    a.removeAttribute("style");
    a.innerHTML = 0;
};