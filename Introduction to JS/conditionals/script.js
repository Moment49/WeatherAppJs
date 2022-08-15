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

const changeWeather=()=>{
    let choice = select.value;
    let temperature = 46;
    if(choice === 'sunny'){
        if(temperature < 86){
        para.innerHTML = `It's ${temperature} deg nice \n\
    and sunny outside today. Wear shorts!\n\
    Go to the beach, or the park and get an ice cream`;
        }
    }else if (choice === 'rainy'){
        para.innerHTML = "Rain is falling outside;\n\
        take a rain coat and an umbrella, and don't stay out for too long";  
    }else if (choice === 'snowing'){
        para.innerHTML = "The snow is coming down - it is freezing!;\n\
        Best to stay in with a cup of hot chocolate, or go build a snowbuild"; 
     
    }else if (choice === 'overcast'){
        para.innerHTML = "It isn't raining,; \n\
        but the sky is grey and glommy; it could turn any minute,\n\
        so take a rain coat just in case.";  
    }else{
        para.innerHTML = "Please select a weather type"
    }
}
select.addEventListener('change', changeWeather);
