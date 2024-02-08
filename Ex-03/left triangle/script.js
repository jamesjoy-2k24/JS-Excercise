function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}

pyramid(5)