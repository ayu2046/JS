//Primitive: Number, String, Boolean, Null, Undefined, Symbol, Bigint

//Reference - Non-primitive: Arrays, Objects, Functions

//====================================================================================================

//stack(Primitive),   Heap(non-Primitive)

// let myprojectname = "Django"
// let anothername = myprojectname
// anothername = "java"

// console.log(myprojectname)
// console.log(anothername)

let userone={
    email: "ayush@gmail.com" ,
    upi: "awasthi@ybl"
}

let usertwo = userone
// usertwo.upi="ayush@ybl"

console.log(userone.upi);
console.log(usertwo.upi)