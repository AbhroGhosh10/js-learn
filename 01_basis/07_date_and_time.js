let myDate=new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)


// let myCratedDate=new Date(2023,2,12);
let myCratedDate=new Date("2023-01-14");
// console.log(myCratedDate);

let myTimeStamp=  Date.now();
// console.log(myTimeStamp)
// console.log(myCratedDate.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
