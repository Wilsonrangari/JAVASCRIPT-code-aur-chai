

//object literals

// how to use Symbol
const mySym = Symbol("key")

const JsUser = {
  name : "Wilson",
  //mySym: "mykey1",
  [mySym] : "mykey1", //to represt symbol here in object
  age : 28,
  "Full Name": "Wilson Rangari",
  location: "Jaipur",
  email: "wilsonrangari@gmail.com",
  lastLoginDays:["Monday", "Saturday",["Sunday", "Tuesday"]]
}

// console.log(JsUser.name)
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["age"]);
// const variable=(JsUser.lastLoginDays).flat(Infinity)

// console.log(variable);

//console.log(JsUser["Full Name"]);

//console.log(typeof JsUser.mySum); //Intersting

// console.log( JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "rangariwilson@gmail.com"

// if you freeze object you cant update aanything to object
//Object.freeze(JsUser)

JsUser.email = "rangariwilson@yahoo.com"

console.log(JsUser.email);

console.log(JsUser);


// {
//   name: 'Wilson',
//   age: 28,
//   'Full Name': 'Wilson Rangari',
//   location: 'Jaipur',
//   email: 'rangariwilson@yahoo.com',
//   lastLoginDays: [ 'Monday', 'Saturday', [ 'Sunday', 'Tuesday' ] ],
//   [Symbol(key)]: 'mykey1'
// }

JsUser.greeting = function(){

  console.log(`Hello Wilson, your age is ${this.age}`);
}

//console.log(JsUser);

console.log(JsUser.greeting());