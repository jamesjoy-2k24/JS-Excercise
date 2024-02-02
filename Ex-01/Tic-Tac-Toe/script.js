var r = document.getElementById("result");
var ip = document.getElementById("ip");

function check() {
    var a = ip.value;
    try {
        if (isNaN(a)) throw "input is not a number";
        a = Number(a);
        if (a > 100) throw "a is too high";
        if (a < 100) throw "a is too low"
    } catch (err) {
        r.innerHTML = err;
    }
    finally {
        ip.value = "";
    }
};
