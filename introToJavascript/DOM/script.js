// //Dom Manipulation
// const container = document.querySelector('#container');
// //selects the first child of #container
// console.dir(container.firstElementChild);
// const controls = document.querySelector('.controls');
// //selects the prior sibling
// console.dir(controls.previousElementSibling);

// //Query selectors
// //element.querySelector(selector);
// //element.querySelectorAll(selectors);

// //Element creation
// const paragraph = document.createElement('p');
// const div = document.createElement('div');
// container.insertBefore(div, controls);
// container.appendChild(paragraph);
// console.log(container);

// //Removing Elements
// //parentNode.removeChild(child)
// container.removeChild(paragraph);
// console.log(container);

// //Alertering Element and Apply styling
// const quote = document.createElement('div');
// quote.textContent = 'THIS IS QUOTE'
// quote.style.color = 'blue';

// //To add several css properties
// quote.style.cssText = 'color: blue; background: black;  fontSize: 30px; padding: 10px 10px;';
// container.insertBefore(quote, controls);

// //div.setAttribute('style', 'color:blue; background:white;');

// //Editing Attributes
// // quote.setAtrribute('id', 'theDiv');
// // const btn = document.querySelector('button');
// // btn.setAttribute('name', 'helloButton');
// // console.log(btn)

// const btnToggle = document.querySelector('#btn');

// function toggler(){  
//     btnToggle.classList.toggle('toggle')
// }

// btnToggle.addEventListener('click', toggler)
    // btnToggle.classList.add('toggle');
    //     const btn = document.querySelector('#hello')
    //     btn.setAttribute( 'disabled', '')
    //     console.log(btn)
    // btnToggle.classList.remove('toggle')
    // btn.removeAttribute( 'disabled')

// quote.getAttribute('id');

// quote.removeAttribute('id')

//Working with Classes
//div.classList.add('new')
//div.classList.remove('new')
//div.classList.toggle('toggle')

//Adding a Text content
//div.textContent = 'Hello world!'

//Adding Html content
//div.innerHtml = '<span>Hello world</span>'

// //Pratice
// const container = document.querySelector('#container')

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is a glorious text';
// container.appendChild(content);
// //Adding a paragraph
// const paragraph = document.createElement('p');
// paragraph.textContent = "Hey I'm red!"
// paragraph.style.cssText = 'color: red;'
// container.insertBefore(paragraph, content)

// //Add h3
// const h3 = document.createElement('h3');
// h3.textContent = "I'm a blue h3!";
// h3.style.cssText = 'color: blue';
// container.insertBefore(h3, paragraph);

// //Add div 
// const div = document.createElement('div');
// div.style.cssText = 'border: 1px solid black; background-color:pink;'

// //Create a h1 inside the div
// const h1 = document.createElement('h1');
// h1.textContent = "I'm in a div";
// const p = document.createElement('p');
// p.textContent = 'ME TOO!';
// div.appendChild(h1);
// div.appendChild(p)
// //Append to the main div
// container.appendChild(div);
// console.log(container)

//EVENTS
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', function(e){
//     console.log(e.target.style.backgroundColor = 'blue')
// })

//Attaching listeners to groups of nodes
const buttons = document.querySelectorAll('button'); //This is a nodelist
console.log(buttons)
buttons.forEach( (button)=>{
    button.addEventListener('click', ()=>{
        alert(button.id);
    })
})