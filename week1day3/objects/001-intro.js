
// var person_1 = {
//   name: 'Jane Doe',
//   email: 'jane@example.com',
//   hobbies: ['basketball', 'coding']
// };

// var person_2 = {
//   name: 'Sam Doe',
//   email: 'sam@example.com',
//   hobbies: ['tennis'],
//   profession: 'Software Architect'
// };

// var people = [person_1, person_2];

// console.log(people[1].profession);

// ------------------------------------------------------------------

// var cars = [{
//   model: 'Civic',
//   price_per_day: 50
// }, {
//   model: 'BMW',
//   price_per_day: 100
// }, {
//   model: 'Benz',
//   price_per_day: 95
// }, {
//   model: 'Toyota',
//   price_per_day: 60
// }];

// var affordable_cars = [];

// for (var i = cars.length - 1; i >= 0; i--) {
//   if (cars[i].price_per_day <= 75) affordable_cars.push(cars[i].model)
// }
// console.log(affordable_cars)

// ------------------------------------------------------------------

// var person = {
//   name: 'Sam Cooke',
//   greet: function () {
//     console.log(`Hi my name is ${this.name}`);
//   }
// }

// var person_2 = {
//   name: 'Sam Cooke2',
//   greet: function () {
//     console.log(`Hi my name is ${this.name}`);
//   }
// }

// person_2.greet();

// ------------------------------------------------------------------


var isWorthIt = function(threshold) {
  return (this.price / this.hours <= threshold)
};

var courses = [{
  title: 'Coding 101',
  hours: 20,
  price: 500,
  isWorthIt: isWorthIt
}, {
  title: 'Coding 201',
  hours: 50,
  price: 300,
  isWorthIt: isWorthIt
}];

console.log(courses[0].isWorthIt(45));

