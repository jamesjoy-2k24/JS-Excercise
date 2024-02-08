//make palindrome

function palindrome(str) {
    var newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    var l= newStr.length;

    for (i = 0; i <= l / 2; i++){
        if(newStr[i] != newStr[l-1-i]){
            return false;
        }
    }
    return true;
}

var str = "madam";
var result = palindrome(str);

if (result == true) {
    console.log("It is palindrome");
}
else {
    console.log("It isn't palindrome");
};