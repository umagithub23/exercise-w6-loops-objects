const pokemons = [
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
  'Blastoise',
  'Metapod',
  'Weedle',
  'Pikachu',
  'Pidgey',
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works
pokemons.forEach((pokemon) => {
  console.log(`Hej! I am ${pokemon}`);
});

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.
let pikachuProfile = {
  name: 'Pikachu',
  element: 'electricity',
  strength: 32,
  color: 'yellow',
  amountOfLegs: 2,
};

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.
console.log(
  `${pikachuProfile.name} is a ${pikachuProfile.element} pokemon with the strength of ${pikachuProfile.strength} whose color is ${pikachuProfile.color} and has ${pikachuProfile.amountOfLegs} legs`,
);

// 4)
// Add the property stillToCatch: true to the Pikachu object.
pikachuProfile.stillToCatch = true;
console.log(pikachuProfile);

// 5)
// change the value of the key strength in the Pikachu object.
pikachuProfile.strength = 50;
console.log(pikachuProfile);

// 6)
// Delete a property from the Pikachu object.
delete pikachuProfile.amountOfLegs;
console.log(pikachuProfile);

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: 'Bulbasaur',
    element: 'grass',
    strength: 18,
    color: 'light-green',
  },
  {
    name: 'Ivysaur',
    element: 'grass',
    strength: 26,
    color: 'medium-green',
  },
  {
    name: 'Venusaur',
    element: 'grass',
    strength: 40,
    color: 'dark-green',
  },
  {
    name: 'Charmander',
    element: 'fire',
    strength: 22,
    color: 'bright-orange',
  },
  {
    name: 'Charmeleon',
    element: 'fire',
    strength: 30,
    color: 'deep-orange',
  },
  {
    name: 'Charizard',
    element: 'fire',
    strength: 45,
    color: 'burnt-orange',
  },
  {
    name: 'Squirtle',
    element: 'water',
    strength: 20,
    color: 'light-blue',
  },
  {
    name: 'Wartortle',
    element: 'water',
    strength: 28,
    color: 'medium-blue',
  },
  {
    name: 'Blastoise',
    element: 'water',
    strength: 44,
    color: 'dark-navy-blue',
  },
  {
    name: 'Metapod',
    element: 'bug',
    strength: 10,
    color: 'yellow-green',
  },
  {
    name: 'Weedle',
    element: 'bug',
    strength: 12,
    color: 'soft-yellow-green',
  },
  {
    name: 'Pikachu',
    element: 'electric',
    strength: 25,
    color: 'yellow',
  },
  {
    name: 'Pidgey',
    element: 'flying',
    strength: 16,
    color: 'lavender-purple',
  },
];

// 8)
// Print out all the NAMES of the pokemons in this new array.
moreAboutPokemons.forEach((pokemon) => {
  console.log(pokemon.name);
});

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.
moreAboutPokemons.forEach((pokemon) => {
  console.log(
    `${pokemon.name} is a ${pokemon.element} pokemon with the strength of ${pokemon.strength} whose color is ${pokemon.color}.`,
  );
});
