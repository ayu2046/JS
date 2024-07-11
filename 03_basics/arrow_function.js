// const user = {
//     username:"ayush",
//     price: 2938,
//     welcomemessage: function(){
//         console.log(`${this.username}, Welcome here`);
//         console.log(this);//taking context inside to this function
//     }
    
// }
// user.welcomemessage()
// user.username="aman"
// user.welcomemessage()
// console.log(this);//empty no global context

// function code(){
//     let user_name = "ayushh"
//     console.log(this.user_name);
// }
// code()

// const code = () =>{
//     let user_name = "ayush"
//     console.log(this);
// }
// code()

// const two =(num1, num2) => {
//     return (num1+num2)
// }
// console.log(two(3,4));

const three = (num1, num2)=> {return num1 + num2}
console.log(three(4,5));

//implicit function
// const four = (num1, num2)=> num1 + num2
// console.log(four(5,6));

const four = (num1, num2)=> ({user_name: "ayush"}) //object must be returned inside the parenthesis
console.log(four(3,8))

//I scope {} starts in arrow function you need to return it explicitly
//Otherwise use parenthesis to return implicit