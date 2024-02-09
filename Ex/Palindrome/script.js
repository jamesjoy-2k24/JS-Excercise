function palindrome() {
    var a = document.getElementById("pal").value;
    var main = a.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var l = main.length;
    is_pal = true;
    
    for (i = 0; i < l / 2; i++){
        if (main[i] != main[l - 1 - i]) {
            is_pal = false;
            break;
        }
    }
    if (is_pal == true) {
        document.getElementById("result").innerHTML = "It is palindrome";
    }
    else {
        document.getElementById("result").innerHTML = "It is not palindrome";
    }
}



// palindrome = () => {
//     var a = document.getElementById("pal").value;
//     var main = a.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     var l = main.length;
//     var is_pal = true;
//     for (i = 0; i < l / 2; i++){
//         if (main[i] != main[l - 1 - i]) {
//             is_pal = false;
//             break;
//         }
//     }
//     if (is_pal == true) {
//         document.getElementById("result").innerHTML = "It is palindrome";
//     }
//     else {
//         document.getElementById("result").innerHTML = "It is not palindrome";
//     }
// }