//Comparisons
// let a = 5;
// let b = 6;
// console.log(a > b);
// console.log(a == b);
// console.log(a != b);
// console.log(a < b);

//comparison result
// let result = 5 == 7;
// document.write(result)

//String comparisons
// console.log('Q' > 'A');
// console.log('Elvis' > 'David');
// document.write("Bleet" < "Bleat")

//Comaprisons of different types
// console.log(3 == '03');
// let a = 0;
// console.log(Boolean(a));

// let b = '0';
// console.log(Boolean(b));

// let testBool = a == b;
// console.log(testBool)

// let data1 = 1;
// let data2 = true;
// console.log(data1 == data2)

// console.log( null == undefined);

//Null vs 0
// let  a = 3;
// let b = null;
// console.log(a / b)
// console.log( typeof b)
// console.log(typeof a)

//Conditionals
//if  and else statement(Pratical)
// const greet_btn =document.querySelector('button');

// function greetings(){
//     let hourInput = prompt("Please Enter hours of the day");
//         if (hourInput < 18){
//             let userGreet = `Good day! The time is ${hourInput}:00 hours`;
//             console.log(userGreet);
//         }else{
//             userGreet = `Good Evening! The time is ${hourInput}:00 hours`
//             console.log(userGreet)
//         }
// }
// const greet_btn =document.querySelector('button');
// greet_btn.addEventListener('click', userGreetings);

//Using else if statement
// function userGreetings(){
//     let isNewDay = false;
//     let timeInput = prompt("Enter the time , so I can greet you accordingly");
//         if (timeInput <= 11){
//             let userGreet = `Hello! Good morning, The time is ${timeInput}:00 hours`;
//             console.log(userGreet)
//         }else if (timeInput <=20){
//             userGreet = `Hello! Good day! The time is ${timeInput}:00 hours`;
//             console.log(userGreet)
//         } else if (timeInput == 24){
//             isNewDay = true;
//             userGreet = `Hello! its a new day, The time is 00:00 hours `
//             console.log(userGreet)
//         }else{
//             console.log('Goodevening')
//         }
// }

//Task on If statements
// let demoText = document.getElementById("demo");
// let text;
// if (Math.round(Math.random()) < 0.5){
//   text = "<a href='https://facebook.com'> Visit Facebook</a>";
//   console.log(text)
// }else{
//     text = "<a href='https://whatsapp.com'> Visit Whatsapp</a>"
//     console.log(text)
// }
// demoText.innerHTML = text;

//LOGICAL OPERATORS
//OR ||
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

if(1 || 0){
    console.log("truthy")
}

// let grade = 3.35;

// if(grade >= 3.5 || grade <=3.45 ){
//     console.log("You made a 2 2")
// }

// let hour = 12;
// let isWeekend = true;

// if(hour < 10 || hour > 18 || isWeekend == true ){
//     console.log("The office is closed")
// }
// console.log(1 || 0);
// console.log(null || 0);
// console.log(null || undefined);
// console.log(null || undefined || 0)

//side task Getting first truthy
// let firstName = "";
// let lastName = "";
// let nickName = "Momentum".toUpperCase();


// console.log(firstName || lastName || nickName || "Anonymous");

//Short Circuiting
// let text = "based on circuiting"
// true || console.log("not printed")
// false || console.log(`printed ${text}`)

//AND &&
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// let hour = 12;
// let minute = "30";

// if (hour == 12 && minute == 30){
//     console.log(`The time is ${hour}:${minute}`)
// }

// console.log(0 && 1);
// console.log(1 && 5);
// console.log(0 && "no matter what");
// console.log(undefined && 1 && 4 && 2)
// console.log(1 && 2)

//Same task with AND &&
// let first = "";
// let age = "";
// let isBirthday = false;
// if (first == "" && age == "" && isBirthday){
//     console.log('string is empty')
// }else{
//     console.log("string is filled")
// }

//! NOT OPERATOR
console.log( !false);
console.log( !"not empty")
console.log(!undefined)

console.log(null || 2 || undefined)
console.log(null || 0 || undefined)
console.log(1 && null && 2)
console.log(1 && 2)
console.log( null || 3 && 0 || 0);

//Age range Task
// let age = 14;
// let isPosition = true;
// let office = "President"
// if (age >=14 && age <=60 && office && isPosition){
//     console.log(`Your not too young to run for ${office} `)
// }else{
//     console.log("Please retire")
// }

//Check Range Outside
let age = 10;
if(!(age >=14 && age <= 90)){
    console.log('Too young, Too old')
}
if(age < 14 || age > 90){
    console.log("Too young, too old")
}
console.log(null || 1)