/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Rhino";
animal['name'] = "Sparky";
animal.noises = [];
console.log(animal);





//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "chewing";
noises.push("grunt");
noises.unshift("pfffft");
noises[noises.length] = "roar";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck',
    name:'Jerome',
    noises:['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);
console.log(animals);

var lion = {
    species: 'lion',
    name:'Simba',
    noises:['roar', 'growl', 'purr', 'mew']
};
animals.push(lion);


var hedgehog = {
    species: 'hedgehog',
    name: 'Sonic',
    noises:['fries', 'pies', 'zoom', 'nuggets']
};
animals.push(hedgehog);


console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//this is a list, so we'll use an array

var friends = [];
var rando = function getRandom(arr){
    var min = Math.ceil(0);
    var max = Math.floor(arr.length);
    return arr[Math.floor(Math.random() * (max-min)) + min];
}

// console.log(getRandom(animals));
friends.push(rando);
// console.log(friends);

hedgehog.friends = rando;
animal.friends = rando;
duck.friends = rando;
lion.friends = rando;

/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
