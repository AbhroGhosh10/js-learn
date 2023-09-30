const userEmail=[]
if (userEmail) {
    console.log("User Email found");
}
else{
    console.log("email not found ");
}

// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN 

// truthy values

// 1, 'false' , " " , "0" , [], {}, function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty")
// }

const emptobj={}

if (Object.keys(emptobj).length===0) {
    console.log("Object is empty")
}


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1=5??10
// val1=null??10
// val1=undefined ?? 12
val1=null ?? 14 ?? 16
console.log(val1)

// Terniary operator
// condition ? true : false;
const iceTeaprice=100
iceTeaprice >=80 ? console.log("more than 80") : console.log("less than 80");