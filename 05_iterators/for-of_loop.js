// //this can take the length of data in variable by it's own :     This picks the values stored in keys.
// const number = [1,2,3,4,5,6,7,8,9]
// for (const num of number) {
//     //console.log(num);
// }


// const superheroes = 'hello heroes'
// for (const heroes of superheroes) {
//     if (heroes == " "){
//         console.log("---------");
//         continue;
        
//     }
//     console.log(heroes);
// }

//MAP for of loop
const map = new Map()
map.set('usa', 'United States')
map.set('In', 'india')

console.log(map);
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}