// let user=88;
// //Note the coalescing operator checks for a defined variable and returns the vlaue
// console.log(user ?? 0);

//Basic if...else()
let shoppingDone = false;
let childsAllowance;

if(shoppingDone === true){
    childsAllowance = '$' + "" + `${10}` ;
    console.log(childsAllowance)
}else{
    childsAllowance = '$' + "" + `${5}`;
    console.log(childsAllowance)
}


let menuBtn = document.getElementById("menu-btn");
let aside = document.getElementById("menu");
//An event to toggle the navigation
menuBtn.addEventListener("click", ()=>{
    console.log('button clicked')
    menuBtn.classList.toggle('open');
    aside.classList.toggle("hidden")
})

//Create a variable to hold all values
const select = document.getElementById("weather");
const para = document.querySelector('h3');
para.style.color = 'red' 
para.style.textAlign = 'center'
para.style.fontSize = '1.3rem'
const sunny = document.getElementById("sunny");
const rainy = document.getElementById("rainy");
const snow = document.getElementById("snow");

const changeWeather=()=>{
    let choice = select.value;
    let temperature = 46;

    //Using switch statement to test the conditions
    switch (choice || temperature < 86){
        case 'sunny':
            para.innerHTML = `It's ${temperature} deg nice \n\
            and sunny outside today. Wear shorts!\n\
            Go to the beach, or the park and get an ice cream`;
            sunny.style.border = '1px solid white'
            sunny.style.backgroundColor = '#121245'
        
            rainy.style.border = '1px solid white'
            rainy.style.backgroundColor = ''
        
            snow.style.border = '1px solid white'
            snow.style.backgroundColor = ''
            break;
        case 'rainy':
            para.innerHTML = "Rain is falling outside;\n\
            take a rain coat and an umbrella, and don't stay out for too long";
            rainy.style.border = '1px solid white'
            rainy.style.backgroundColor = '#121245'
    
            sunny.style.border = '1px solid white'
            sunny.style.backgroundColor = ''
    
            snow.style.border = '1px solid white'
            snow.style.backgroundColor = ''
            break;
        case 'snowing':
            para.innerHTML = "The snow is coming down - it is freezing!;\n\
            Best to stay in with a cup of hot chocolate, or go build a snowbuild"; 
            snow.style.border = ''
            snow.style.backgroundColor = '#121245'
    
            sunny.style.border = '1px solid white'
            sunny.style.backgroundColor = '' 
    
            rainy.style.border = '1px solid white'
            rainy.style.backgroundColor = ''   
            break;
        default:
            para.innerHTML = "Please select a weather type"

            snow.style.border = ''
            snow.style.backgroundColor = ''
    
            sunny.style.border = '1px solid white'
            sunny.style.backgroundColor = '' 
    
            rainy.style.border = '1px solid white'
            rainy.style.backgroundColor = ''


    }
 
}
select.addEventListener('change', changeWeather);
