// tpyes of data types
// 1. Primitive: 
// string,symbol,number,null,boolean,BigInt,undefined
const num=22
const isloggedIn=true
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
// 2. Non Primitive(reference):
// Array,Objects,functions
const heros=["IronMan","spiderman","captianAmerica"]

let myobj={
    name:"messi",
    age:36

}
const myFunction=function(){
    console.log("hello")
}

// stack memory is for primitive data types..
// Heap memory is for non-primitive data types...