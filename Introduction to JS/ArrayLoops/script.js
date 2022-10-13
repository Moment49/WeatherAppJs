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
const para = document.querySelector('#para');
let newEl = document.createElement('p');

//Mapping through an array and displaying the results
const items = [
    {fullName: 'Elvis', age : 23},
    {fullName: 'Chimdi', age : 130},
    {fullName: 'Melvin', age : 46},
    {fullName: 'Ken', age : 29},
    {fullName: 'Victor', age : 44}
]

items.map((item)=>{
    newEl.textContent += `${item.fullName}${item.age}\n`;
    newEl.style.color = 'Red';
})
para.appendChild(newEl);



//Filter method
const scores = [ 23, 43, 99, 77, 66, 100, 24, 47, 55, 42];
const over18 = scores.filter(myFilter);
function myFilter(value, index){
    let newFilter = value > 50;
    return newFilter
}
console.log(over18);

//TEST DRIVEN DEVELOPMENT (TDD)