function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,500,2000))

const user={
    name:"Abhro",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    name:"Messi ",
    price:322
})

const myNewArray=[200,400,100,300]

function returnSecondValue(getArray){
    return getArray[1];

}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,30,500]))