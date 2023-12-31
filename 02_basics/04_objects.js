// const tinderUser=new Object();  -->singleton object

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Ronaldo"
tinderUser.isLoggedIn=false;

// console.log(tinderUser)
const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"Abhro",
            lastname:"Ghosh"
        }
    }
}
// console.log(regularUser.fullname.username.firstname);

const obj1={1: "a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))