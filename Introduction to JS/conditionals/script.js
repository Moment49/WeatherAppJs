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

menuBtn.addEventListener("click", ()=>{
    console.log('button clicked')
    menuBtn.classList.toggle('open');
    aside.classList.toggle("hidden")
})