// var date = new Date();
// var day = date.getDay();

// var d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function days() {
//     for (i = 0; i <= 8; i++){
//         if (day == i) {
//             return d[i];
//         }
//     }
// }
// var result = days();
// console.log(result);

findDay = () => {
    var o = document.getElementById("result");
    var u = document.getElementById("date").valueAsDate;
    var date = new Date();
    var day = date.getDay();

    var d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (i = 0; i < 8; i++){
        if (u == day == i) {
            a = d[i];
            o.innerHTML = a;
        }
    }
}
// var result = days();
// console.log(result);