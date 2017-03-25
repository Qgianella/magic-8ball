

$(document).ready(function() {


  $("#answer").hide();
  var magicBall = {};
  magicBall.listOfAnswers = ["Outlook good", "Yes", "try again", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no"];


  //define the method
  magicBall.askQuestion = function(question) {

    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#answer").fadeIn(4000);
    //create a random number
    var randomNumber = Math.random();

    //Make random Number between 0 and the nomber of items in array
    var randomNumberArray = randomNumber * this.listOfAnswers.length;

    //Round down the number to be a whole Number
    var randomIndex = Math.floor(randomNumberArray);

    //Use that number to index a random number from the array
    var randomAnswer = this.listOfAnswers[randomIndex];

    $("#answer").text(randomAnswer);



    console.log(question);
    console.log(randomAnswer);
  };

  var onClick = function() {
    $("#answer").hide();

    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

    //wait half a second before showing prompt:
    setTimeout(
      function() {
        //show prompt
        var question = prompt("Ask a YES/NO question and I shall respond..");
        magicBall.askQuestion(question);
      }, 500);

  };

  $("#questionButton").click(onClick);


});
