// add(2)(3); // 5;
// add(1)(2); // 3 

// 1

// function add(a){
//      return function(b){
//         return a+b;
//     };
// }

// console.log(add(2)(3));

// 2

// const add = (a) => {
//     return (b) => a+b;
//     };
// console.log(add(2)(3));


// const add = (a) => (b) => a+b;
// console.log(add(2)(3));



/*
შევქმნათ ფუნქცია რომელიც მიიღებს N რაოდენობის არგუმენტებს (number-ებს). 
ამ ფუნქციამ უნდა დააბრუნოს ფუნქცია, რომელიც მიიღებს ერთ n არგუმენტს.
მეორე ფუნქციამ უნდა დააბრუნოს პირველი ფუნქციის არგუმენტების გა-n-მაგებული მნიშვნელობების ჯამი.
*/

// const multipliedSum = (...args) => {
//     return (n) => {
//         return n*args.reduce((acc,curr) => (acc+=curr), 0)
//     };
// };

// console.log(multipliedSum(1, 2, 3, 4)(2)); // => 20
// console.log(multipliedSum(1, 2)(3)); // => 9
// console.log(multipliedSum(0)(20)); // => 0


// function addSuffix(suffix){
//     return (word) => `${word}${suffix}`
// }
 
// const addSuffix = (suffix) =>(word) => `${word}${suffix}`;


// const addLy = addSuffix('ly');

// console.log(addLy('hopeless')); // hopelessly
// console.log(addLy('total')); // totally

// const addLess = addSuffix('less');

// console.log(addLess('fear')); // fearless
// console.log(addLess('ruth')); // ruthless

// // write function addSuffix which returns a function to add suffixes (see examples)



/*
დაწერეთ ფუნქცია, რომელსაც ერთ ობიექტად გადავცემთ რამდენიმე ობიექტს (დამერჯილს).
ამ ფუნქციამ უნდა დააბრუნოს ობიექტი, რომელსაც მხოლოდ ის property-ები ექნება, რომელთა 
value-ებიც ლუწი იყო საწყის ობიექტებში. პლუს ამას, ამ property-ების key-ები გავაორმაგოთ,
ანუ თუ იყო "a", გახდეს "aa". ასევე გავაორმაგოთ მნიშვნელობები, ანუ თუ იყო 2 გახდეს 4
(მაგალითი ვნახოთ უკეთ გასაგებად)
*/

// Use ES6 as much as you can

// const first = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// const second = {
//   d: 4,
//   e: 5,
//   f: 6
// };

// const third = {
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11
// };

/*
// result should be this
{
  bb: 4,
  dd: 8,
  ff: 12,
  hh: 16,
  jj: 20
}

*/

// function doTheMagic(obj) {
//   return Object.entries(obj).reduce((acc,[key, value])=>{
//       if (value % 2 === 0) {
//           return {...acc, [`${key}${key}`]: value * 2}
//       }
//       return acc;
//   }, {});
// }
//  console.log(doTheMagic({...first, ...second, ...third}));


// let a = 3;
// let b = 4;
// console.log("a:", a);
// console.log("b:", a);



// let temp = a;
// a = b;
// b = temp;

// console.log("a:", a);
// console.log("b:", a);

// This is variable value swapping. "a" becomes "b" and "b" becomes "a"

// Do the same thing with ES6 array destructuring