var tables = document.getElementsByClassName("tables");
var a1 = document.getElementsByClassName("a1");
var a2 = document.getElementsByClassName("a2");
var a3 = document.getElementsByClassName("a3");
var a4 = document.getElementsByClassName("a4");
var a5 = document.getElementsByClassName("a5");
var a6 = document.getElementsByClassName("a6");
var a7 = document.getElementsByClassName("a7");
var a8 = document.getElementsByClassName("a8");
var a9 = document.getElementsByClassName("a9");
var a10 = document.getElementsByClassName("a10");
var a11 = document.getElementsByClassName("a11");
var a12 = document.getElementsByClassName("a12");
var a13 = document.getElementsByClassName("a13");
var a14 = document.getElementsByClassName("a14");
var a15 = document.getElementsByClassName("a15");
var a16 = document.getElementsByClassName("a16");
var a17 = document.getElementsByClassName("a17");
var a18 = document.getElementsByClassName("a18");
var a19 = document.getElementsByClassName("a19");
var a20 = document.getElementsByClassName("a20");
var a21 = document.getElementsByClassName("a21");

var output = document.getElementById("output");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var result = document.getElementById("result");

const a = 5;
const b = 2;
const r = a | b;

var binary  = a.toString(2).padStart(16, '0');
var binary2 = b.toString(2).padStart(16, '0');
var binary3 = r.toString(2).padStart(16, '0');

output1.innerHTML   = (`A = ${binary}`);
output2.innerHTML   = (`B = ${binary2}`);
output.innerHTML = (`R = ${binary3}`);
result.innerHTML = r.toString(16);

//change every data colors in tables
function colorChange(){
    if (r == 0) {
    a1[0].style.backgroundColor = "black";
    a1[0].style.color = "red";
    }
    else if (r == 1) {
    a2[0].style.backgroundColor = "black";
    a2[0].style.color = "red";
    }
    else if (r == 2) {
    a3[0].style.backgroundColor = "black";
    a3[0].style.color = "red";
    }
    else if (r == 3) {
    a4[0].style.backgroundColor = "black";
    a4[0].style.color = "red";
    }
    else if (r == 4) {
    a5[0].style.backgroundColor = "black";
    a5[0].style.color = "red";
    }
    else if (r == 5) {
    a6[0].style.backgroundColor = "black";
    a6[0].style.color = "red";
    }
    else if (r == 6) {
    a7[0].style.backgroundColor = "black";
    a7[0].style.color = "red";
    }
    else if (r == 7) {
    a8[0].style.backgroundColor = "black";
    a8[0].style.color = "red";
    }
    else if (r == 8) {
    a9[0].style.backgroundColor = "black";
    a9[0].style.color = "red";
    }
    else if (r == 9) {
    a10[0].style.backgroundColor = "black";
    a10[0].style.color = "red";
    }
    else if (r == 10) {
    a11[0].style.backgroundColor = "black";
    a11[0].style.color = "red";
    }
    else if (r == 11) {
    a12[0].style.backgroundColor = "black";
    a12[0].style.color = "red";
    }
    else if (r == 12) {
    a13[0].style.backgroundColor = "black";
    a13[0].style.color = "red";
    }
    else if (r == 13) {
    a14[0].style.backgroundColor = "black";
    a14[0].style.color = "red";
    }
    else if (r == 14) {
    a15[0].style.backgroundColor = "black";
    a15[0].style.color = "red";
    }
    else if (r == 15) {
    a16[0].style.backgroundColor = "black";
    a16[0].style.color = "red";
    }
    else if (r == 16) {
    a17[0].style.backgroundColor = "black";
    a17[0].style.color = "red";
    }
    else if (r == 17) {
    a18[0].style.backgroundColor = "black";
    a18[0].style.color = "red";
    }
    else if (r == 18) {
    a19[0].style.backgroundColor = "black";
    a19[0].style.color = "red";
    }
    else if (r == 19) {
    a20[0].style.backgroundColor = "black";
    a20[0].style.color = "red";
    }
    else if (r == 20) {
    a21[0].style.backgroundColor = "black";
    a21[0].style.color = "red";
    }
    else if (r == 21) {
    a22[0].style.backgroundColor = "black";
    a22[0].style.color = "red";
    }
};
colorChange();
