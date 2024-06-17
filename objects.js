// const cup = {
//     color:"red",
//     size:"small",
//     texture:"smooth",
//     shape:"round",
//     functionality:{
//         drinkType:"tea",
//         temperature:"hot"
//     },
//     drink: function(){
//         console.log("Use me to drink");
//         console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`);
//     }
//     // drink: () =>{
//     //     console.log("Use me to drink");
//     //     console.log(`My main purpose is to drink ${cup.functionality.temperature} ${cup.functionality.drinkType}`);
//     // }
// }
// console.log({color: cup.color});
// console.log("size", cup.size);
// console.log("temperature", cup.functionality.temperature);
// console.log("texture", cup["texture"]);
// cup.model = "glass";
// console.log({cup});
// delete cup.model
// console.log({cup});
// cup.color = "green"
// console.log({cup});
// cup.drink()
// const keys = Object.keys(cup)
// console.log({keys});
// const values = Object.values(cup)
// console.log({values});
// Object.keys(cup).forEach(item=>{
//     console.log({key:item, value:cup[item]});
// })
// const loop = Object.keys(cup).map(item =>{
//     return ({key:item, value:cup[item]});
// })
// console.log({loop});


function countNumbersInArray(array) {
    let counts = {}; 
  
    array.forEach(number => { 
      if (counts[number]) { 
        counts[number]++; 
      } else {
        counts[number] = 1; 
      }
    });
  
    return counts; 
  }
  
  
  const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const countedNumbers = countNumbersInArray(numbers);
  console.log(countedNumbers);

















