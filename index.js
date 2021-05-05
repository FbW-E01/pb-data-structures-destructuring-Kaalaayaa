// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring to complete this task.
const foods = ["banana", "cucumber", "bread", "cakes", "pizza"];
const [food1, food2, ...restOfTheFood] = foods;

const fruit = food1;
const vegetable = food2;
const food = restOfTheFood;

console.log(fruit);
console.log(vegetable);
console.log(food);

// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`. Assign each value to a variable. Print out the values.
const halloweenParty = {
    fran: "witch",
    bobby: "werewolf",
    lili: "vampire"
}
const { fran: person1, bobby: person2, lili: person3} = halloweenParty;
console.log(person1);
console.log(person2);
console.log(person3);


// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
const favoriteArtist = {
    name: "Steve Lacy",
    greatestHit: "Some",
    nationality: "Amercian",
    genre: "Alternative R&B",
};


// * Then, create a function to print all of the band/musician's data. 
function dataOfMusician({name, greatestHit, nationality, genre}){
const msg = `${name} is an ${nationality} singer. He sings ${genre} and his greatest hit is ${greatestHit}`;
console.log(msg);
}
dataOfMusician(favoriteArtist);
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```
