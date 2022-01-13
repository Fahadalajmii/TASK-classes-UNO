/**
 * Instructions:
 * • Always try to refresh the browser, or use live server
 * • Open the inspect window on chrome to see if there are any logs
 *
 *
 *
 * Steps:
 * 1. (100 points) Create a class Card that takes 2 properties `number`, and `color`
 * 2. (100 points) Create the constructor inside the class `Card` that initializes color and number
 * 3. (100 points) after creating the class, create 4 objects from the class Card for Green, Blue, Red, and Yellow cards, give them any numbers.
 * 4. (50 points) console.log every single object.
 * 5. (200 points) Add a method to class Card called `image()` that doesn't take any parameter, and it returns a string that represent the image path stored corresponding to card info
 *    The image path is as follows `./images/COLOR_NUMBER.png`
 *    Examples:
 *  - `./images/Blue_9.png`
 *  - `./images/Yellow_7.png`
 *  - `./images/Red_4.png`
 *  - `./images/Blue_8.png`
 * 6. (100 points) Add 3 cards to the array `cards` defined below by using `.push` method on the cards array
 *    Check the browser, you will see four cards!
 * 7. (1000 Points!)- great now you noticed that you created 4 objects manually, but that shouldn't be the case.
 *      the Uno deck includes 80 numbers (0-9 from each color)
 *
 *      it has four colors ["Yellow","Red","Blue","Green"]
 *    - Comment out the objects that you created
 *    - you should fill the cards dynamically, instead of the ones we created object by object,
 *      you need to use loops and fill the cards deck in a loop (Hint: You should use `for` loops, )
 *
 */
let cards = []; // You will use this array in step 6

// Continue the code here 👇🏻
class Cards {
  Number = 0;
  color = "yellow";
  constructor(Number, color) {
    this.Number = Number;
    this.color = color;
  }
  image() {
    return `./images/${this.color}_${this.Number}.png`;
  }
}
const mycard1 = new Cards(0, "Blue");
console.log(mycard1);
const mycard2 = new Cards(0, "Green");
console.log(mycard2);
const mycard3 = new Cards(0, "Red");
console.log(mycard3);
const mycard4 = new Cards(0, "Yellow");
// console.log(mycard4);
// cards.push(mycard1);
// cards.push(mycard2);
// cards.push(mycard3);
// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "Blue");
//   cards.push(mycard1);
// }
mycolors = ["Blue", "Green", "Red", "Yellow"];
mycolors.forEach((mycolor) => {
  for (let i = 0; i < 10; i++) {
    const mycard1 = new Cards(i, mycolor);
    cards.push(mycard1, mycard1);
  }
});

// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "mycolors");
//   cards.push(mycard1, mycard1);
// }
// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "Green");
//   cards.push(mycard1);
// }
// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "Yellow");
//   cards.push(mycard1);
// }
// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "Blue");
//   cards.push(mycard1);
// }
// mycolors = ["Blue", "Green", "Red", "Yellow"];

// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "Red");
//   cards.push(mycard1);
// }
// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "Green");
//   cards.push(mycard1);
// }
// for (let i = 0; i < 10; i++) {
//   const mycard1 = new Cards(i, "Yellow");
//   cards.push(mycard1);
// }

/**
 *
 * Don't touch this code
 * This function is going to render the cards array to the HTML page,
 */
function render(array) {
  document.getElementById("cards-container").innerHTML = array
    .map(cardComponent)
    .join("");
}

render(cards);
