// const tinderUser = new Object() //singletone object


//empty object   --> non- singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Wilson"
tinderUser.age = 28

// console.log(tinderUser);


const regularuser = {

  email:"some@gmail.com",
  fullname:{
    userfullname:{
      firstname: "Wilson",
      lastname:"Rangari"
    }
  }
}

console.log(regularuser.fullname.userfullname.firstname);