const user = {

  username: "Wilson",
  price: 999,


  welcomeMessage: function(){

    console.log(`${this.username}, welcome to wensite`);
    console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "Ruchi"

// user.welcomeMessage()

//console.log(this); //you will get empty objects

// function chai (){

//   let username ="Wilson"
//   console.log(this.username);

// }

// chai()

//====================

// const chai = function (){

//   let username ="Wilson"
//   console.log(this.username);

// }

// chai()

//=========================Arrow Fnction

const chai = () => {

  let username ="Wilson"
  console.log(this);

}

//chai()

//===============================

// const addTwo = (num1, num2) => {

//   return num1+num2

// }

// console.log(addTwo(3,4));

//==================================Implicit return====if single line ka statement return hora hai  to no need of return statement 
//Currely barces use hog ato return  statemnet use hoga
//if parenthesis bracket use () hua to return state,emt nahi use hoga

//const addTwo = (num1, num2) =>  num1+num2

// const addTwo = (num1, num2) =>  (num1+num2)

const addTwo = (num1, num2) =>  ({username:"Wilson"})

  
console.log(addTwo(3,4));