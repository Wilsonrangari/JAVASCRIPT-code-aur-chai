
// console.log("w");
// console.log("i");
// console.log("l");
// console.log("s");
// console.log("o");
// console.log("n");


function sayName(){
  console.log("w");
  console.log("i");
  console.log("l");
  console.log("s");
  console.log("o");
  console.log("n");


}
//sayName()

// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
// }

//addTwoNumbers(3, 4)  // o/p ---> 7
//addTwoNumbers(3, "4") // o/p---> 34

//addTwoNumbers(3, "a")   // o/p--> 3a

//addTwoNumbers(3, null)  //0/p --> 3

// const result =  addTwoNumbers(3,5)

// console.log(result);  //here you will get undefined

//how to get value return from function

//  function addtwoNumbers(number1 , number2){
//   let result = number1 + number2
//   return result
// }

// const result = addtwoNumbers(3,5)

// console.log("Result :", result); //now function is returning value

//!username --->(SAME AS) username === undefined


// function calculateCartPrice(num1){

//   return num1
// }

//console.log(calculateCartPrice(200));  //what if you want to pass multiple values to single variable use below (...variableName) operator

function calculateCartPrice(...num1){

     return num1
}
console.log(calculateCartPrice(200, 400 , 500)); // now you will get array [200, 400, 500]}


//---> How to pass function to an object

const user ={

  username: "Wilson",
  price: 199
}

function handleObject(anyobjectName){

  //console.log(`username is  ${anyobjectName.username} and price is ${anyobjectName.price}`);

}

//handleObject(user)

//you can directluy pass the obejct also

handleObject ({
  username: "Ruchi",
  price:400
})

//======================================

const myNewArray = [200, 400, 100, 600]

function returnSecoundValue (getArray){

  return getArray[1]
}

//console.log(returnSecoundValue(myNewArray)); 
//passing array value directly
//console.log(returnSecoundValue([200,400,500]));

//====================================================

//Global and local Scope

// let a = 10
// const b = 20;
// var c =  30

if(true){  //local scope
  let a = 10
  const b = 20;
  var c =  30 // after completing the block still we ar getting var c value which is wrong (Block Scope)
  

}
//console.log(a);
//console.log(b);
//console.log(c);

//=====================Global Scope=========

//function inside function concept
