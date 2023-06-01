//Arrow function
// console.log("hello world");
//  const greet = (count) =>{
//     console.log("hello world ",count);

//  }
// greet(0);
// const square = (num) => {
//    return  num*num;
// }
// console.log(square(2));

//Callback function

// const calculate = (a , b , operation) =>{
//     return operation(a,b);
// }
// function op(a,b){
//     return a+b;
// }
// console.log(calculate(5, 5 , op));

// function multiply(a,b){
//     return a*b;
// }
// const mul = calculate(8, 8, multiply);
// console.log(mul);

// // ArrayCallback function

//  const a =[4,1,6,-2,-2,-3,6];
// const firstNeg = (num)=>{
//     return num<0;
// }
// const res = a.findIndex(firstNeg);
// console.log(res);

// a.forEach((element , index) =>{
//     console.log("array num is ", element , "with index ", index);
// })

//Asynchronus function

console.log("hello");
setTimeout(function(){
    console.log("this is a setTimeOut function");
},2000);
console.log("world"); 