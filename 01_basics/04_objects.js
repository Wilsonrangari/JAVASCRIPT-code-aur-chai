// const tinderUser = new Object() //singletone object


//empty object   --> non- singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Wilson"
tinderUser.age = 28

// console.log(tinderUser);


// const regularuser = {

//   email:"some@gmail.com",
//   fullname:{
//     userfullname:{
//       firstname: "Wilson",
//       lastname:"Rangari"
//     }
//   }
// }

// console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2} we dont want this output
//console.log(obj3);
//o/p should be {1:"a", 2:"b", 3:"a", 4:"b"} so use below method
//const obj3 =  Object.assign({}, obj1, obj2)  //--> here {} is like a target and obj1 and obj2 is source
//console.log(obj3);
//another way to split
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//ARRAY OF OBJECTS

const users = [
  {
    id : 1,
    email : "h@gmil.com"
  }, 
  {
    id: 2,
    email : "w@y.com"
  }
]

// console.log(users[1].email); 
// console.log(users[1]);


// Objects destructuring and JSON API -- 4:24:46
const course = {
  coursename: "JS in Hindi",
  price: "999",
  courseInstructor: "Hitesh"
}

//VVIMP
//course.courseInstructor
//another way to get data
//const {courseInstructor} = course  //--> here course object se hame coursInstrctor ki value chahiye bas
//console.log(courseInstructor);
const {courseInstructor: instrctor} = course //--> agar courseInstrcutor bada name lagr ahai to u=you can alias(change) it
console.log(instrctor);












