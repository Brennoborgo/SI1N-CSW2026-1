var issoeumaStrig = "Isso e uma string";
let issoeumnumero = 42;
const issoeuumbolleano = true;
let issotambemeumastring = "42";

if (issoeumaStrig === issotambemeumastring) {
    console.log(" As strings são iguais ");
} else {
    console.log("As strings são diferentes");
}
console.log(issoeumnumero + issotambemeumastring);
console.log(issoeumnumero + issoeumnumero);


var global = " eu sou uma variavel global ";
{
    let local = "eu sou a variavel local"
    console.log(global);
    console.log(local);
}
console.log(global);

let float1 = 0.06;
let float2 = 0.01;
let sum = float1 + float2;
console.log(sum.toPrecision(2));


for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
for (let i = 0; i < 5; i++) {
    console.log(i)
    console.log(i * 2);
    console.log(i * 2 + 1)
}
let j = 0
while (j < 5) {
    console.log(j * 2 + 1);
    j++;
}
console.log(Math.PI)
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++;) {
        if (num % 1 === 0) return false;
    } Return true}
     
    for (let i=1; i <= 100; i++){
        isPrime ? console.log(i) : null
    }
    








var x = 10
if (x > 5) {
    console.log("x is greater than 5");
} else if (x < 5) {
    console.log(" x is less than 5")
}
else {
    console.log(" x is equal to 5")
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};
for (let i = 0; i < 10; i += 2) {
    console.log(i);
};
var y = 0;
while (y < 10) {
    console.log(y);
    y++;
};
y = 1;
while (y < 10) {
    (y % 2 !== 0) ? console.log(y) : null;
    y++;
}
