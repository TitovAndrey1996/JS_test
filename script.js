// names = prompt("Ваше ім'я", "Name"); 
// alert ("Ваше ім'я: " + names); 

// const userAge = Number(prompt('Введіть ваш вік:')); 
// console.log(typeof userAge);
// console.log('Вік', userAge);
// const nextAge = add(userAge, 1); 
// console.log(nextAge); 

// if (nextAge >= 18) {
//  console.log('Повнолітній');
// } else {
//  console.log('Неповнолітній');
// }

// function add(a, b) {
//  const sum = a + b;
//  return sum;
// } 

//let counter = 1; 
//while (counter <= 5) {
//  console.log (counter++);
//} 

//let counter = 42; 
//do {
//  console.log (counter); 
//  counter++;
//} while (counter <= 5); 

// for (let i = 100; i >= 42; i--) {
//   if (i % 2 === 0) {
//     console.log (i)
//   } 
// }

// const cars = ['Audi Q7', 'Tesla X', 'BMW M5']; 
// console.log (cars); 
// // console.log (cars[1]); 
// // console.log (cars.length); 
// cars[3] = 'Mercedes'; 
// cars[cars.length] = 'Toyota'; 
// cars.push ('Jaguar'); 
// console.log (cars.length); 

// // for (let i = 0; i < cars.length; i++) {
// //   console.log (cars[i]);
// // }

// for (const car of cars) {
//   console.log (car);
// }

// Grasshopper - Messi goals function

// let laLiga = Number(prompt('laLiga'));
// let delRey = Number(prompt('delRey'));
// let league = Number(prompt('delRey'));

// let sum = goals(laLiga, delRey, league);
// console.log(sum); 

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     // code goes here
//     return (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
//   }

// Return Negative

let numbers = Number(prompt('Number:')); 
numbers = makeNegative(numbers);
console.log(numbers); 

function makeNegative (num) {
    if (num > 0) {
        return -num;
    } else return num;
}