/*function add (num1, num2){
    return num1 + num2 ;
}

const total = add(15, 17);
console.log(total);*/

// function add (num1, num2){
//     if(num2 == undefined){
//         num2 =0;
//     }
//     return num1 + num2 ;
// }
/*
function add (num1, num2){
    // num2 = num2 || 0;
    num2 = num2 || 20;
    num1 = num1 || 0;
    return num1 + num2 ;
}*/
//in es6
function add(num1, num2 = 20) { 
    return num1 + num2;
}

const total = add(15);
console.log(total);
const total2 = add(15,1);
console.log(total2);