// const array =[0, 1, 2, 3, 4, 5]

// // console.log(array[3])

// // const newarray= new Array(1,2,3,4,5,6,7,8)
// // console.log(newarray[4]);

// // //Methods:-

// // array.push(7)
// // console.log(array);
// // array.pop()
// // console.log(array);
// // array.unshift(7)
// // console.log(array);

// // array.shift()
// // console.log(array)

// // console.log(array.includes(8))
// // console.log(array.indexOf(5))

// // const newarray = array.join()
// // console.log(array);

// // console.log((newarray));
// // console.log(typeof(newarray));

// // // Slice  &&   Splice

// console.log("A", array);
// const newa = array.slice(1,4) // slice picks reference elements from the array , works on the reference of the array.

// console.log(newa);
// console.log("B", array);

// const newb = array.splice(1,3) // splice picks the elements out from the main array, manipulates the original array.
// console.log(newb);
// console.log("c", array); 

// const marvel =["Thor", "Ironam", "Spiderman"]
// const DC = ["Superman", "Batman", "Flash"]

// marvel.push(DC) //push makes changes in the existing array
// console.log(marvel);
// // const all =  marvel.concat(DC) // concat design a new array after combining.
// // console.log(all);

// const all_new = [...marvel,...DC] //spread method used to merge all elements present in the array.
// console.log(all_new);

// const any = [1,2,3,[4,5,6],7,8,[9,0,[12,13]]]
// const new_any = any.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// console.log(new_any)

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));//Creates an array from an iterable object.

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))