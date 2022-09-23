//An array of cars
// const cars = ['Saab', 'Volvo', 'Bmw'];
// console.log(cars);

//Acessing array elements
// let car = cars[0];
// cars[0] = 'Honda'
// console.log(cars)
// document.getElementById('demo').innerHTML = cars

//Creating/updating an array
// const bikes = [];
// bikes[0] = 'toyota';
// bikes[1] = 'mercedes';
// bikes[2] = 'Volkswagen'
// console.log(bikes)

//Array as Objects
// const person = ['Elvis', 'Ibenacho', 25];
// console.log( typeof person)
// console.log(person[0]);

//Objects
// const persons = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 46
// }
// console.log(persons.firstName);

//Array composites
// myArray =[];
// myArray[0] = Date.now;
// myArray[1] = 'myFunction';
// myArray[2] = 'myCars';
// console.log(myArray)

//Array Properties and Methods
//Length Property
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length)
//Accessing the First and Last Array Elements
// let fruit = fruits[0];
// console.log(fruit)
// let fruit = fruits[fruits.length - 1]
// console.log(fruit)

//Looping Array Elements using Standard for_Loop and forEach method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = "<ul>"
// for(let i = 0; i < fruits.length; i++){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>"
// document.getElementById("demo").innerHTML = text;

//Using forEach(), This calls a function for each of the array items
// let text = "<ul>"
// fruits.forEach( (fruit)=>{    
//     text += "<li>" + fruit + "</li>"
// })
// text += "</ul>"

// document.getElementById('demo').innerHTML = text;

// //Array push()
// const shopItems = ["babyWears", "keys", "napKins", "clothes", "teaSpoon"];
// shopItems.push("teaCup")
// //Using length to add an Item to array
// shopItems[shopItems.length] = "melons"
// console.log(shopItems)
// //Check for items in array

// shopItems.forEach((shopItem)=>{
//     console.log(shopItem)
// });

// const digits = [4, 6, 8, 10];

// digits.forEach((digit)=>{
//     return console.log(digit + 5);
// });

//Associative arrary
// const persons = [];
// persons[0] = 'John';
// persons[1] = 'Doe';
// persons[2] = 45;
// persons.length;
// console.log(persons)

/* const towers = []; //Dont use this to define an array(Associative array) 
using named indexes
*/
// towers['tower1'] = 'Pissa'
// towers['tower2'] = 'Hannoi'
// towers['tower3'] = 'babel'
// console.log(towers)

//Javascript Arrays
// const points = new Array(3) //Dont use this to define an array
// const point = [3]
// console.log(point)
// console.log(points)
// console.log(Array.isArray(towers));
// console.log(point instanceof Array)

//Converting arrays to string toString() & join()
// const products = ["babyLotion", "cream", "pampers", "headWarmer"];
// document.getElementById("demo").innerHTML = products.toString()
// document.getElementById("demo").innerHTML = products.join(' * ')

// //Array Pop() // removes Returns the value of the popped item (End)
// let popItem = products.pop()
// document.getElementById('demo_2').innerHTML=`The Popped Item from the array is
//  ${popItem}`
// console.log(popItem)

// //Array Push() //adds Returns the new length with  the new item(END)
// const items = ["milk", "milo", "sugar", "coffee"];
// console.log(items.push("Kiwi"));
// console.log(items)

// //Array shift() //removes Returns value shifted out with a lower Index (START)
// const movies = ["God's not dead", "Lookup", "GOT"];
// console.log(movies.shift());
// console.log(movies)

// //Array unshift() //add Returns the new array length(START)
// const games = ["Ps4", "Ps5", "Ps3"];
// console.log(games.unshift("Nintendo"));
// console.log(games)

// const genre = ["cartoon", "sci-fic", "anime", "horror", "action"];
// genre[0] = "hollywood";

// //Using Array array length to append new elements
// genre[genre.length] = "Nollywood"; 
// console.log(genre);

// //Array Delete
// console.log(delete genre[0]);
// // console.log(genre[0] = "hollywood")
// console.log(genre.shift())
// console.log(genre)
// // console.log( genre.unshift("hollywood"))
// // console.log(genre);

// //Array Concat(); //The concat can take more than one arguments
// const myGirls = ["Cecile", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myAdopted = ["Charles", "Kelvin", "Jude"]

// const myChildren = myGirls.concat(myBoys, myAdopted);
// console.log(myChildren)

// //Concat taking string values
// const cookies = ["short-bread", "belloxi"];
// const myCookiesUpdate = cookies.concat("Short-cake");
// console.log(myCookiesUpdate)

//Splice() and Slice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

//Using Splice to remove Elements
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
// console.log(fruits);

// //Array Slice
// const foods = ["rice", "beans", "yam", "plantain"];
// const foodItem = foods.slice(1, 3);
// console.log(foodItem);
// console.log(foods)

//Automatic toString()
// const foods = ["rice", "beans", "yam", "plantain"];
// const demo = document.getElementById("demo_3");
// demo.innerHTML = foods.toString("");

//Sorting Arrays
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// console.log(fruits.reverse());

//Numerical sorting
// const points = [40, 50, 33, 23, 54, 100, 78, 50, 63, 77];

// //A function to sort numbers alphabetically and numerically
// let alphaBtn = document.getElementById("btn1");
// let numericBtn = document.getElementById("btn2");

// //Function to sort the Numbers Alphabetically
// function getAlphaSort(){
//    let alphaSort = points.sort()
//     //Updating the function to the DOM
//     document.getElementById("demo_3").innerHTML = `This is Alphabetical sorting of No: ${alphaSort}`;
// }
// alphaBtn.addEventListener("click", getAlphaSort);

// //Function to sort the Numbers Numerically
//   function getNumericSort(){
//     let numSort = points.sort((a, b)=>{
//         return a - b;
//     })
//     document.getElementById("demo_3").innerHTML = `This is Numerical sorting of No:
//     in acesending order of preference ${numSort}`;
// }
// numericBtn.addEventListener("click", getNumericSort);

// //Sorting Array in random Order
// const grades = [40, 50, 60, 1, 53, 43, 99];

// console.log(grades.sort(()=>{
//     return 0.5 - Math.random()
// }))

//Fisher Yates Method of Random generation
// const points = [40, 50, 33, 23, 54, 100, 78, 55, 63, 77];
// for (let i = points.length - 1; i > 0; i--){
//     let j = Math.floor(Math.random() * i);
//     let k = points[i];
//     points[i] = points[j];
//     points[j] = k;   
// }

//Finding the Highest/Lowest Array Value
const points = [20, 68, 200, 56, 89, 77, 90];
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let title = document.querySelector('h2');  
console.log(title.appendChild(para1).innerHTML = `This is the Max value of array ${myArrayMax(points)}`);
console.log(title.appendChild(para2).innerHTML = `This is the Min value of array ${myArrayMin(points)}`);


function myArrayMax(arr){
    return Math.max.apply(null, arr);
}

function myArrayMin(arr){
    return Math.min.apply(null, arr);
}

//Find Max
// function arrayMax(arr){
//     let len = arr.length;
//     let max = -Infinity;
//     while (len > 0) {
//         if(arr[len] > max){
//             max = arr[len];
//         }
//         len --;
//     }
//     return max;
// }

// function arrayMin(arr){
//     let len = arr.length;
//     let min = Infinity;
//     while(len--){
//         if(arr[len] < min){
//             min = arr[len]
//         }
//     }
//     return min;
// }
// console.log(arrayMin(points));
// console.log(arrayMax(points));

//Array of objects
const cars = [
    {type: "Volvo", year: 2016},
    {type: "Saab", year: 2001},
    {type: "Bmw", year: 2010}
];

console.log(cars.sort( function(a,b){//sorting arrays based on key pairs
    return a.year - b.year
}))

let carSort = cars.sort( function(a, b){ //sort by characters (Alphbet)
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if(x < y){
        return -1;
    }else if(x > y){
        return 1;
    }
    return 0;
});
console.log(carSort)































































/*Praticing Array and methods*/

// const genre = ["cartoon", "sci-fic", "anime", "horror", "action"]
// let poppedItem = genre.pop() + " ";

// // console.log(`This is the popped Item: ${poppedItem.charAt(0).toUpperCase() + poppedItem.slice(1)}`)
// // console.log(genre)
// //Converting it to string
// poppedItem = poppedItem + genre.pop() + " ";
// poppedItem = poppedItem +  genre.pop() + " ";
// poppedItem = poppedItem + genre.pop() + " ";
// poppedItem = poppedItem +  genre.pop() ;


// // console.log(poppedItem.toUpperCase())
// // console.log(`This is the empty popped array ${genre}`)

// // genre.push(poppedItem)
// // console.log(`This is the pushed single array ${genre}`)
// // console.log(genre)

// //Convert the popped items(string) to array and then push
// // let arrayConvert = poppedItem.split(" ")
// // console.log(arrayConvert)
// // console.log(genre)

// // let newArray = arrayConvert.shift();
// // let newArray2 = arrayConvert.shift();
// // let newArray3 = arrayConvert.shift();
// // let newArray4 = arrayConvert.shift();
// // let newArray5 = arrayConvert.shift();
// // console.log(newArray)
// // console.log(genre.push(newArray, newArray2, newArray3, newArray4, newArray5))
// // console.log(genre)



