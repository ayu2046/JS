const num = [1,2,3,4]

// const numb= num.reduce(function(acc, curv){
//     console.log(`acc value ${acc} and curv value ${curv}`);
//     return acc + curv
// },0)

const numb = num.reduce((acc, curv) => acc + curv)

console.log(numb);