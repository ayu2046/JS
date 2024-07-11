const num = [1,2,3,4,5,6,7,8,9]
//map function also returns value implicitly
const nums= num.map((n)=> n + 10 )
// console.log(nums);

// chaining
const numb= num
.map((n)=> n * 2 )
.map((n)=> n + 10)
.filter((n)=> n>20)
console.log(numb);