const c = 2;
const co = 4;
const p = 4;

let chicken = 10;
let cow = 1;
let pig = 1;

//Output in Console
total = () => {
  return chicken * c + cow * co + pig * p;
};
console.log(total());

//Output in Web
function total1() {
  let chickens = document.getElementById("chicken");
  let cows = document.getElementById("cow");
  let pigs = document.getElementById("pig");
  let result = document.getElementById("result");

  chickenss = Number(chickens.value);
  cowss = Number(cows.value);
  pigss = Number(pigs.value);
  r = chickenss * c + cowss * co + pigss * p;

  result.innerHTML = r + " " + "Legs";
};
