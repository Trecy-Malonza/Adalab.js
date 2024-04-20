let fruits = ['Mango' ,'Banana' , 'Oranges'];

let arr = new Array(20 ,30);

console.log({fruits});
console.log({arr});

fruits[1] =2;
console.log({fruits})

console.log('last item',fruits.slice(-1));
console.log('several items',fruits.slice(2,3));

//fruits,slice(-1)
//fruits[fruits.length -1]

let addlast = fruits.push('Apple');
console.log({fruits});

let addstart = fruits.unshift('Pineapple');
console.log({fruits});

let removeLast = fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});

let newFruits = fruits.push(['Tomato','Pearl'])
console.log({fruits});


//Given an array of numbers find the sum of all items 
let items =[20,30,40,50,60];
let add = items.reduce((acc , cur)=> acc + cur);
console.log({add});

//given an array of numbers multiply each item in the array by 2

//codiumate: Add more tests
let multiply = items.map(items => items *2);
console.log({multiply});

//Given an array of numbersreturn an array with each element multiplied by itself
//let square = items.forEach(item =>item*item);
//console.log({square});
//let square = items.forEach(item =>{


let square=[];
let total = 0
items.forEach(item =>{
    const multiple = item *item;
    console.log(multiple);
    square.push(multiple)
    total += item
});
console.log({square});
console.log({total});

//destructuring spread operator...

let [num1, num2, num3, ...rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});