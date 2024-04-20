function add(num1 ,num2){
    const sum = num1 + num2;
    console.log({console:sum});
    return {'sum': sum};
}
console.log(add(2,3));
add(4,5);



let student = 'Agnes'
function item(){
    const names = ['Anne','Eunice'];
    console.log({names});

    let child;
}
item();

child = 'boy';
console.log({child})

//function expressions
const subtract = function (num1, num2){
    console.log(num1-num2);
};
subtract(20,10);

//Arrow functions

const multiply = (num1, num2) => console.log(num1 *num2);
multiply(6, 9);

//IIFEs
(function(){
    console.log('Hello there');
}());


//Hoisting
var person;
console.log({person});
var person = 'human'
console.log('person2...',person);

greet()

function greet(){
console.log('Hi person');
}

hello();
const hello = () => console.log('This is a greeting');