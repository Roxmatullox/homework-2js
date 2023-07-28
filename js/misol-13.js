let abc = 123 ;

let c = abc % 10;
let b = (abc-c) % 100 /10
let bc = abc % 100 
let a = (abc-bc)/100

let res = a<b && b<c;

console.log(res);