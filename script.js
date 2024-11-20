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

// let numbers = Number(prompt('Number:')); 
// numbers = makeNegative(numbers);
// console.log(numbers); 

// function makeNegative (num) {
//     if (num > 0) {
//         return -num;
//     } else return num;
// }

// const nums = [1, 8, 45, 88, 12]
// nums [5] = 101; 
// nums [nums.length] = 202; 
// nums.push (89); 
// // nums.sort (compare); 
// nums.sort ((a,b) => a - b); 
// console.log(nums); 
// console.log(nums.length); 
// const numsDouble = nums.map ((num) => num * 2); 
// console.log(numsDouble); 
// const numsEven = nums.filter ((num) => num % 2 === 0);
// console.log(numsEven); 
// const sum = nums.reduce ((acc, num) => acc + num, 0); 
// console.log(sum); 


// function compare (a, b) {
//     return a - b; 
// } 

// const AudiQ7 = {
//     make: 'Audi', 
//     model: 'Q7', 
//     price: 60000, 
//     beep: function () {
//         console.log(this.make + ' Beep!');
//     },
//     drive: function () {
//         console.log(this.make + ' Drive!');
//     },
// }

// console.log(AudiQ7); 
// AudiQ7.beep(); 
// AudiQ7.drive(); 
// console.log(AudiQ7.model); 

// class Car {
//     constructor (make, model, price) {
//         this.make = make; 
//         this.model = model; 
//         this.price = price;
//     }
//     beep () {
//         console.log(this.make + ' Beep!'); 
//     }
//     drive () {
//         console.log(this.make + ' Drive!'); 
//     }
// }

// const BmwX5 = new Car ('BMW', 'X5', 50000); 
// console.log(BmwX5); 

// const jeepRenegade = new Car ('JEEP', 'Renegade', 15000);
// console.log(JSON.stringify(jeepRenegade)); 
// jeepRenegade.price = 16000; 
// console.log(jeepRenegade); 

// const jsonCar = `
// {
// "make": "Audi", 
// "model": "Q7", 
// "price": 60000
// }`; 

// const car = JSON.parse(jsonCar); 
// console.log(car); 


// let count = 0;
// let prevUserI = 44;
// const currentUserI = prevUserI + count++;
// console.log(currentUserI); 

let x = 1; 

function f() {
    let x = 2; 
    console.log(x);
}

f(); 
