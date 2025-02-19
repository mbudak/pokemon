// Your initial data here
// Write your code below data.

let data = {
  abilities: [
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    },
  ],
  height: 7,
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    {
      move: {
        name: 'razor-wind',
        url: 'https://pokeapi.co/api/v2/move/13/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
      ],
    },
  ],

  name: 'bulbasaur',
  order: 1,
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  types: [
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
  ],
  weight: 69,
};

// 1. Get the height and weight of Pokemon and return them in String format
console.log(`height: ${data.height.toString()}, weight: ${data.weight.toString()}`)

// 2. Store the result of Step 1 and again convert height and weight to integer. Then calculate Pokemons BMI. Assume that weight and height are in in kg and meters consequently.
// Formula for BMI : BMI = kg/m2
let pokemonHeight = parseInt(data.height);
let pokemonWeight = parseInt(data.weight);
let BMI = pokemonWeight / (pokemonHeight * pokemonHeight)
console.log('h', pokemonHeight, 'w', pokemonWeight, 'BMI', BMI);

// 3. Store the name of Pokemon to a new variable. 
// Then using new varibale calculate the length (word count) of Pokemons name and make it an upper case.
var newPokemon = Object.assign({}, data)
var wordCount = newPokemon.name.split(' ').length;
console.log(`wordCount: ${wordCount} and Name is UpperCase : ${newPokemon.name.toUpperCase()}`);

// 4. Make sure name contains word "bulba"
let checkBulba = data.name.indexOf('bulba');
console.log('checkBulba in name and position', data.name, checkBulba);


// 5. Now cut first 2 characters of name and store as a new variable. 
// Also get last 2 charaters of name and store as a new variable. 
// At the end add this 2 variables and return a new name that consists of first 2 and last 2 characters of original name.
// HINT: try to use string method

let removedFirstTwoCharOfName = data.name.substring(2, data.name.length);
console.log(`Removed First Two Char is : ${removedFirstTwoCharOfName}`);

let lastTwoCharacterOfTheName = data.name.substring(data.name.length - 2, data.name.length);
console.log(`Last Two Chars of the name is ${lastTwoCharacterOfTheName}`);

// 6. Now store new name variable into an array. And console to the result.
let aName = [];
aName.push(data.name);
console.log('aName', aName);

// 7. Console log the names of each "type" that is inside types array in original data. 
// Make sure you see "poison" and "grass" as a result.
data.types.forEach(item => {
  if (item.type.name === "poison") {
    console.log('poison found');
  }
  if (item.type.name === "grass") {
    console.log('grass found');
  }
  // console.log('item', item.type.name);
});

// 8 Make sure/check abilites is an array type. Abilites can be found from same data object.
var checkIsArray = Array.isArray(data.abilities);
console.log('isArray', checkIsArray);

// 9. From abilities array get the last ability (object) and console the name of it.
// zero index
console.log('Last Name of the abilities', data.abilities[data.abilities.length - 1].ability.name);

// 10. Now take that last ability (object) and again put it back to abilities array.
// default values
console.log('original abilities length', data.abilities.length);
// make a copy
var tempObject = data.abilities[data.abilities.length -1];
console.log('copied object is, ', tempObject)

// Remove the last object
data.abilities.pop(data.abilities.length -1);
console.log('last ability removed and new length is ', data.abilities.length);

// Put it back
data.abilities.push(tempObject);
// Check if it is there
console.log('Check it if it is put it back', data.abilities.length);

// 11. Loop throgh the stats data and console the base_stat values
data.stats.forEach(item => {
  console.log('base stat: ', item.base_stat);
})

// 12. Store Step 11 values into new array and filter and console the values that above 47.
var base_stats = [];
data.stats.forEach(item => {
  base_stats.push(item.base_stat);
});

base_stats.filter(item => item > 47).forEach(item => {
  console.log('filtered above 47 -> ', item);
})

// 13. Reverse an array that contained base_stat values and return a string combining all these values.
console.log('reverse and converted to string', base_stats.reverse().join(", "));

// 14. From base_stat values array return shallow copy only 2 first values as an array.
var forShallowCopy = [...data.stats];
shallowCopyFirst2Values = [];
forShallowCopy.forEach(item => {
  shallowCopyFirst2Values.push(
    { 
      "base_stat": item.base_stat, 
      "effort": item.effort
    });
});
console.log("Shallow Copy List", shallowCopyFirst2Values);

// 15. From base_stat values array replace first number with your name. HINT: Modify the original array
data.stats[0].stat.name = "Murat";
console.log('here', data.stats[0].stat.name);

// 16. Console log keys and values of data object. 
// HINT: return values can be an array or a string type. Use Object, Array methods or loop
for (var key in data) {
  console.log("key " + key + " has value " + data[key]);
}

// 17. From data show avatar, name, height and weight on the DOM.
// To do that copy and paste below code: Don't worry we will learn DOM

const avatar = document.querySelector('#pokemon-avatar');
const pok_name = document.querySelector('#pokemon-name');
const info = document.querySelector('#info');
const name = data.name;
const height = data.height;
const weight = data.weight;
const url = data.sprites.front_default;
avatar.src = url;
pok_name.innerHTML = name;
info.innerHTML = `
  <span> Height ${height}</span> -
  <span> Weight ${weight}</span>
`;