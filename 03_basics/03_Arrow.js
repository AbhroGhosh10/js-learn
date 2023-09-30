const user={
    username:"Abhro",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage();
// user.username="Messi";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let naam="abhro"
//     console.log(this.naam);
// }
// chai();

// const chai=function(){
//     let naam="abhro"
//     console.log(this.naam);
// }
// chai()

// const chai=()=>{
//     let naam ="abhro"
//     console.log(this.naam);
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

// const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"Abhro"})
console.log(addTwo(3,3));