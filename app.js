const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("Hey there! Welcome to this assignment");
});

app.get("/speak/:animal", (req, res) => {
  let animalName = req.params.animal;
  const sounds = {
    pig: " oink",
    dog: "woof woof",
    cow: " moo-moo",
    cat: "I hate you humans"
  };

  let sound = sounds[animalName]
  console.log(sound);
  console.log(req.params.animal);
  res.send(`the ${animalName} says ${sound} `);
});



app.get("/repeat/:message/:times", (req, res) =>{
    const message = req.params.message
    const times = req.params.times
    let result = " ";

    for(let i = 0; i < times; i++){
        result += message
    }

    res.send(result)
})








const PORT = 3000;
app.listen(PORT, () => {
  "Server started on port " + PORT;
});
