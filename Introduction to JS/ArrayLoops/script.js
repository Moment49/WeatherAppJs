//Continuation of array loops
// let n = 20;

// nextPrime: for (let i = 2; i <= n; i++){
//     for( let j = 2; j < i; j++){
//         if( i % j == 0){
//             console.log(`not prime ${i}`);
//             continue nextPrime;         
//         }
//     }    
//     console.log(`This is prime ${i}`);
// }

//Map method
// const para = document.querySelector('#para');
// let newEl = document.createElement('p');

//Mapping through an array and displaying the results
// const items = [
//     {fullName: 'Elvis', age : 23},
//     {fullName: 'Chimdi', age : 130},
//     {fullName: 'Melvin', age : 46},
//     {fullName: 'Ken', age : 29},
//     {fullName: 'Victor', age : 44}
// ]

// items.map((item)=>{
//     newEl.textContent += `${item.fullName}${item.age}\n`;
//     newEl.style.color = 'Red';
// })
// para.appendChild(newEl);



//Filter method
// const scores = [ 23, 43, 99, 77, 66, 100, 24, 47, 55, 42];
// const over18 = scores.filter(myFilter);
// function myFilter(value, index){
//     let newFilter = value > 50;
//     return newFilter
// }
// console.log(over18);

//TEST DRIVEN DEVELOPMENT (TDD)
//Arguments Object
// function func1(a, b, c){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }
// func1(1,2,3);


//Converting arguments into an array using the following methods
/* Array.prototype.slice.call(arguments)
   Array.from(arguments)
   [...arguments]
 */
// function myConcat(separator){
//     const args = Array.prototype.slice.call(arguments, 1);
//     return args.join(separator);
// }
// let myFoods = myConcat('; ', 'eggs', 'beans', 'yam');
// console.log(myFoods)

//Creating HTML LIST USING MULTIPLE ARGUMENTS
// function list(type){
//     let html = `<${type}l><li>`;
//     const args = Array.prototype.slice.call(arguments, 1);
//     // const args = [...arguments]
//     console.log(args)
//     html += args.join('</li><li>');
//     html += `</li></${type}l>`;
//     return html;
// }

// const listHtml = list('u', 'One', 'Two', 'Three', 'Four');
// console.log(listHtml)

// //Working with Rest operator
// function cakes(cake1, cake2, ...remainingcakes){
//     console.log(cake1);
//     console.log(cake2);
//     return console.log(remainingcakes);
// }

// cakes('vanilla', 'strawberry', 'chocolate', 'milk', 'Jam', 'Choco');

//A function to sum Infinite numbers
// function sumAll(...args){
//     let sum = 0;
//     //Loop through the arguments(rest)
//     console.log(args.length)
//     for (const arg of args){
//         sum += arg;
//     }
//     return sum;
// }

// let sumInteger = sumAll(1, 2, 3, 4,10, 36);
// console.log(sumInteger);

// //Using rest parameters in combination with ordinary parameters
// function multiply(multiplier, ...theArgs){
//     return theArgs.map((element)=>{
//        return multiplier * element;
//     })
// }

// let arrMulti = multiply(3, 4, 1, 2, 5);
// console.log(arrMulti);

//Spread operator Array exp
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2)

//String Exp
let str = 'Javascript is awesome';
const arrStr = [...str];
console.log(arrStr);

//Function Exp
function add ( a, b){
    return a + b;
}

const num = [5, 6];
console.log(add(...num));

//Object Exp
const person1 = {
    name: "Elvis",
    course: "Javascript"
};


const person2 = {...person1, course:"Python"};
console.log(person2)
console.log(person1)