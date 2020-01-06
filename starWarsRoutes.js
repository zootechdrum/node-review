// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
/////////////////Explain how this works
app.get('/api/:characters?', function(req, res){

  var chosen = req.params.characters;
  console.log(chosen)
  
})
//////////////////////////////////////////////////

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  var newCharacter = req.body;

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});