// singleton = koi bhi constructor se jb banate h toh singleton ek object bnta h.

// object literals

const mysym= Symbol("Key1")
const JsUser={
    name:"abhro",
    [mysym]:"mykey1",
    "full name":"Abhro Ghosh",
    age:22,
    location:"delhi",
    email:"abhro@google.com",
    isLOggedIn:false
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"] )
// console.log(JsUser[mysym]);
// console.log(typeof mysym)

// JsUser.email="abhro@yahoo.com"
// Object.freeze(JsUser)
// JsUser.email="abhro@microsoft.com"

// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello , Js User");
}

JsUser.greeting2=function(){
    console.log(`Hello, Js User ${this["full name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());