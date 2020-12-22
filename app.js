const teaOrder = {
  variety : 'oolang',
  teaName : 'winter sprout',
  origin : 'taiwan',
  price : 12.99,
  hasCaffeine : true,
  quantity : 3
};

const {price, quantity, teaName, ...others} = teaOrder;

const {brewTemp = 175} = teaOrder

//this changes the initial name of the key from 'teaName' to 'tea'
const {teaName : tea} = teaOrder

function checkout(chai){
  const{quantity = 1, price} = chai;
  return quantity * price;
}

checkout(teaOrder)

const order1 = {
  variety : 'green tea',
  teaName : 'silver needle',
  origin : 'taiwan',
  price : 12.99,
  hasCaffeine : true
};

// array destructuring

const students = [
  {name : 'Drake', gpa : 4.6},
  {name : 'Bob', gpa : 4.2},
  {name : 'Sandra', gpa : 3.6},
  {name : 'Rose', gpa : 4.0},
  {name : 'Kane', gpa : 3.9},
];

//its based off of positions
//you can skip positions with commas, the variable names dont matter but the position or index does
const [topStudent, secondBest,,fourthBest] = students;
const [best, ...losers] = students;

//function destructuring
const order2 = {
  variety : 'green tea',
  teaName : 'silver needle',
  origin : 'taiwan',
  price : 12.99,
  hasCaffeine : true,
  quantity : 4
};

//you can access the keys straight from the argument parameters in the function

// you can change quantity to ur own value
//                quantity : qty = 1
function getTotal({quantity, price}){
  return quantity * price
}

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold, silver, bronze]){
  return{
    gold, silver, bronze
  }
}

//swapping variables using destructuring

//make sure let is your variable case
let delicious = 'Mayonnaise';
let disgusting = "Whipped cream";

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

//one line swap
[disgusting, delicious] = [delicious, disgusting];



// ****************************
// exercies work
// ****************************

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;
// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); // 1846



// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); //yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) //your name is Alejandro and you like purple
// getUserData({firstName: "Melissa"}) // your name is Melissa and you like green
// getUserData({}) // your name is undefined and you like green

// let [first, second, third] = ["Maya", "Marisa", "Chi"];
// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
// ]
// console.log(raindrops); // Raindrops on rose
// console.log(whiskers); // whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // [Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings]

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
// console.log(numbers) // 10, 30, 20

// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };
// var a = obj.numbers.a;
// var b = obj.numbers.b;

// cosnt obj = {
//   numbers : {
//     a : 1,
//     b : 2
//   }
// }
// const {a, b} = obj.numbers

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// let arr = [1, 2];
// [arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})