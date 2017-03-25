$(document).ready(function() {

  var magicBall = {};
  magicBall.answer = ["Outlook good", "Yes", "try again", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no"];
  var question = prompt("Ask a YES/NO question and I shall respond..");

  //define the method
  magicBall.askQuestion = function(question) {

    //create a random number
    var randomNumber = Math.random();

    //Make random Number between 0 and the nomber of items in array
    var randomNumberArray = randomNumber * this.answer.length;

    //Round down the number to be a whole Number
    var randomIndex = Math.floor(randomNumberArray);

    //Use that number to index a random number from the array
    var randomAnswer = this.answer[randomIndex];
    //console.log(question);
    console.log(randomAnswer);
  };

  magicBall.askQuestion(question);

  $("#questionbutton").click(question);

});
