const greetings = ["Hey! This is . . .", "Hi there! I'm . . .",
                 "Welcome! This is . . ."];

function chooseGreeting() {
  var index = Math.floor(Math.random()*greetings.length);
  return greetings[index];
}

document.getElementById("greeting").innerHTML = chooseGreeting();
