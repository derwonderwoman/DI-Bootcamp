const gameInfo = [
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

const winners = [];
const usernames = [];
const scores = [];
gameInfo.forEach((item) =>
    {usernames.push(`${item.username}!`)});

gameInfo.forEach((item) => {
    if(item.score > 5){
        winners.push(item.username)
    }
})

gameInfo.forEach((item) => {
        scores.push(item.score)
})

let total_score = scores.reduce((value,val) => {return value + val});
console.log(total_score)
