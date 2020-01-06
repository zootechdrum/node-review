var randNum = Math.floor(Math.random() * 10)

if (process.argv[2] == randNum){
  console.log("You win!");
} else {
  console.log("You lose.");
}