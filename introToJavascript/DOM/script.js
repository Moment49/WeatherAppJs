//Dom Manipulation
const container = document.querySelector('#container');
//selects the first child of #container
console.dir(container.firstElementChild);
const controls = document.querySelector('.controls');
//selects the prior sibling
console.dir(controls.previousElementSibling);

//Query selectors
//element.querySelector(selector);
//element.querySelectorAll(selectors);

//Element creation
const paragraph = document.createElement('p');
const div = document.createElement('div');
container.insertBefore(div, controls);
container.appendChild(paragraph);
console.log(container);

//Removing Elements
//parentNode.removeChild(child)
container.removeChild(paragraph);
console.log(container);

//Alertering
