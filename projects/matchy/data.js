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
animal.species = "cat";
animal['name'] = "Garfield";
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises.push("Meow"); 
noises.push("Purr");
noises.unshift("Chirps");
noises[noises.length] = "Growl";
noises.push("Shriek");

console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
console.log(animal.noises);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *      bracket notation
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
    species: 'Duck',
    name: 'Jerome',
    noises: ['Quack', 'Honk', 'Sneeze', 'Woosh'] 
};

animals.push(duck);
console.log(animals);

var dog = {
    species: 'Dog',
    name: 'Momo',
    noises: ['Woof', 'Growl']
};

animals.push(dog);
console.log(animals);

var bird = {
    species: 'bird',
    name: 'Big Bird',
    noises: ['Chirps', 'Whistle']
};

animals.push(bird);
console.log(animals);

console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// array for list of friends since listing a collection of friends
var friends = [];

function getRandom(animals) {
    return Math.floor(Math.random() * Math.floor(animals.length));
}

var randFriend = getRandom(animals);
var randAnimal = getRandom(animals);

while (randFriend === randAnimal) {
    randAnimal = getRandom(animals);
}

friends.push(animals[randFriend].name);
console.log(friends);

animals[randAnimal].friends = friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
