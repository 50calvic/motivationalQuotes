console.log("FEEL MOTIVATED!!!");
const qoutes = [
  "Do not stop when you are tired, stop when you are done.",
  "Either you run the day or the day runs you.",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  "Just one small positive thought in the morning can change your whole day.",
  "If you’re not positive energy, you’re negative energy",
];

function selectQoute() {
  return qoutes[Math.floor(Math.random() * qoutes.length)];
}

function returnQoute() {
  const userInput = prompt("Need motivation today?");
  if (userInput.toLocaleLowerCase() == "no") {
    return "May your day continue to be awesome";
  } else if (userInput.toLocaleLowerCase() == "yes") {
    return selectQoute();
  } else {
    return "try again? let me know by entering yes or no!";
  }
}

returnQoute();
