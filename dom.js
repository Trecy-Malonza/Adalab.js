const container = document.getElementById('container')
console.log('parent',container.parentElement);
console.log('nextSibling',container.nextElementSibling);
console.log('previousSibling',container.previousElementSibling);
console.log('children',container.children);
console.log('firstchild',container.firstElementChild);
console.log('lastchild',container.lastElementChild);
const html =document.documentElement;
console.log({html});
console.log('body');
console.log('body',document.body);
// UPDATING DOM
const heading = document.getElementById('heading');
heading.innerHTML = 'Introduction to DOM Manipulation'
heading.style.color ='red';

//CREATE DOM
const textChild =document.createElement('p');
container.appendChild(textChild);
textChild.innerHTML = 'This is the new child'
textChild.setAttribute("class",'container-new-child')
textChild.setAttribute('id','paragraph')

//DELETE DOM
heading.remove();

const buttton = document.getElementById('button');
buttton.style.border = 'none'
buttton.style.padding = '10px 15px'
buttton.style.borderRadius = '5px'
buttton.style.cursor = 'pointer'
buttton.style.background ='#0096FF'
buttton.style.color ='#ffffff'

buttton.addEventListener('click',function (){
    buttton.innerHTML
    buttton.style.background ='#50C878'
})

