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

if (Object.keys(emptobj)===0) {
    console.log
}