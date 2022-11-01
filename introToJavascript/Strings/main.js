//Strings
let names = "Ibenacho Elvis";
let name_1 = 'Chimdi with single quotes';
let phrase = `can embed my name which is ${name_1} `;

// alert (`Hello ${names} `);
// alert (`The sum of two integers are ${2+4}`)

//Booleans(Logical type)
let isGameOn = true;
let isAliensReady = false;
// console.log(isGameOn)
// console.log(isAliensReady);

//Null Value type
let age = null; //Unknown values are depicted with null
// console.log(age)


//Undefined
let grades; //While this is instantiated as initial values for  unassigned variables
// console.log(grades)

//Typeof Operators
// let bigint = 1233443434324342535345345345345345354335345345345344534n
// console.log( typeof bigint)
// console.log(typeof 10n)
// console.log(typeof Symbol("id"))
// console.log(typeof Math);
// console.log(typeof null)

//Tasks on data types
let name = "Kelly"

// alert(`Hello ${1}`);
// alert(`Hello ${"name"}`);
// alert( `Hello ${name}`);

//More On strings

// const string = 'I\'m a child of God'
// console.log(string)  

// let course = 'Javascript'
// let tutor = 'Mr Elvis'
// let stringExpression = "This is" +" " + tutor +" "+ "he loves " + course; //Method 1
// let stringExpression = `This is ${tutor} he loves ${course}`; //Method 2
// console.log(stringExpression)

//Concatenation in context

const btn_greet = document.querySelector('button');
//Second Method Create the function GreetUser
// function greetUser () {
//     let userInfo = prompt("Tell me your name and I will greet you!!!");
//     let greetings = `Hello! ${userInfo}`;
//     console.log(greetings);
// }

// btn_greet.addEventListener('click', ()=>{ //This eventlistener takes two arguments of the event type and function to be executed
//     let userInfo = prompt("Tell me your name so I can greet you");
//     let userGreet = `Hello ${userInfo}`;
//     console.log(userGreet);
// })


//Second Method Concatenation context
// btn_greet.addEventListener('click', greetUser);

//Using thw Number object
// const myString = "123";
// console.log(typeof myString)
// const myNewString = Number(myString);
// console.log(typeof myNewString)

// const song = "Fight the youth";
// const score = 20;
// const highScore = 30;
// const output = `I like the song ${song} I gave it a score of ${Math.floor(score/highScore * 100)}%. `;
// console.log(output)

//String Methods and Properties
//Length of a string
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length) 

//Slice A string slice()method
// let games = "Soccer Tennis Volleyball"
// let newGames = games.slice(0, 7);
// console.log(newGames)

// let shopItems = "wristWatches, Phones, Bags"
// let newShopItems = shopItems.slice(-26, -6)
// console.log(newShopItems)

//Substring()method
// let shoesColors = "red, brown, gold";
// let newShoeColors = shoesColors.substring();
// console.log(newShoeColors)

//Substr() method
// let list = "bmw, toyota, isuzu";
// let newLists = list.substr(5, 6);
// console.log(newLists)

// let boards = "chess, ludo, checkers";
// let newBoards = boards.substr(-8,)
// console.log(newBoards)

//Replacing a String Content
// let texts = "Please visit M-Tutors Academy";
// let newTexts = texts.replace("/VISIT/i", "go to");
// console.log(newTexts)

// let carBrand = "Toyota"
// let cars = `This is a brand new Toyota with ${12*10} horsepower engine, Toyota is
// the best in the world now. Super Car!!! Super Toyota !!!!!!!!!`
// let newCars = cars.replace( /Toyota/g, "BMW");
// console.log(newCars);

//UpperCase and Lowercase
// let text1 = "Elvis Calm You Will Get There";
// let newText1 = text1.toUpperCase();
// console.log(newText1)

// let lowerText1 = "Trust In God Elvis In All You do";
// let newLowerText1 = lowerText1.toLowerCase();
// let repLowerText1 = newLowerText1.replace(/god/i, "GOD" )
// console.log(`This is the replace text here, ${repLowerText1}`)
// console.log(newLowerText1);

//String Concat();
// let test1 = "Hello";
// let test2 = "world";
// let test3 = test1.concat(" ", test2);
// console.log(test3);

//Trim()
// let test = `       Hello World!
//             `;
// let test2 = test.trim();
// console.log(test2)

//padStart () and padEnd()
// let ages = "7";
// let padded = ages.padStart(4, "x");
// console.log(padded)

// padded = ages.padEnd(4, "y");
// console.log(padded)

// let string = "66";

// let num = Number(string);
// let newNum = toString(num)
// console.log(typeof newNum)

//Extarcting Characters charAt()
// let test = "Hello Elvis";
// let char = test.charAt(0);
// char = test[3];
// console.log(char)

//charCodeAt()
// let char2 = test.charCodeAt(0)
// console.log(char2);

//Converting a string to Array using split()

// let fruit = "Oranges grapes apples guava";
// let fruits = fruit.split("|");

// let upperfruites = fruits[0].toUpperCase();
// console.log(upperfruites)
// console.log(fruits)

//Indexof() and lastIndexof()
// let index = "This is the start a new day";
// let newIndex = index.indexOf("t");
// console.log(newIndex);































