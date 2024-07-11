// for each loop does'nt return anything
// const prog= ["js", "ruby","python","javascript"]

// prog.forEach((element) => {
//     console.log(element);
// });

// const num = [1,2,3,4,5,6,7,8,9,10]
//it returns the value to function only for the conditions which satisfies

// const number = num.filter((num)=> num>5) //implicit return
// const number = num.filter((num)=> {
//     return num>5
// }) //explicit return
// console.log(number);


// // by using for each loop

// const nums=[]
// num.forEach((element) => {
//     if(element>5){
//         nums.push(element)
//     }
// });
// console.log(nums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//   const userbk = books.filter((books)=>books.genre === "Fiction")
// const userbk = books.filter((books)=>books.publish>=2000)
const userbk = books.filter((books)=>books.publish>=1985 && books.genre==="Non-Fiction" || books.edition>=1990 )
  console.log(userbk);
