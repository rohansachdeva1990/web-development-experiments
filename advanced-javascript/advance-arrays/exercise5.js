// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];
array.forEach(user => {
    let { username } = user;
    newArray.push(`${username}!`);
});
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
let mappedArray = array.map(user => {
    let { username } = user;
    return `${username}?`;
});
console.log(mappedArray);

//Filter the array to only include users who are on team: red
let filteredArray = array.filter(user => user.team === "red");
console.log(filteredArray);

//Find out the total score of all users using reduce
let totalScore = array
                .map(user => user.score)
                .reduce((total, score)=> total + score, 0);
console.log("Total score", totalScore);

// (1), what is the value of i? 0, 1, 2, 3, 4, 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    //console.log(num, i);
    // alert(num);
    return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let bonusArray = array.map(user => {
    // map returns an array. and here we are updating the object value direclty.
   user.items = user.items.map(item => item + "!");
   return user;
});

console.log(bonusArray);

