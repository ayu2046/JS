const array =[0, 1, 2, 3, 4, 5]

// console.log(array[3])

// const newarray= new Array(1,2,3,4,5,6,7,8)
// console.log(newarray[4]);

// //Methods:-

// array.push(7)
// console.log(array);
// array.pop()
// console.log(array);
// array.unshift(7)
// console.log(array);

// array.shift()
// console.log(array)

// console.log(array.includes(8))
// console.log(array.indexOf(5))

// const newarray = array.join()
// console.log(array);

// console.log((newarray));
// console.log(typeof(newarray));

// // Slice  &&   Splice

console.log("A", array);
const newa = array.slice(1,4) // slice picks reference elements from the array , works on the reference of the array.


console.log(newa);
console.log("B", array);

const newb = array.splice(1,3) // splice picks the elements out from the main array, manipulates the original array.
console.log(newb);
console.log("c", array);