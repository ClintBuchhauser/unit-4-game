$(document).ready(function () {

    // Generate random number
    var randNum = Math.floor(Math.random() * 102 + 19);
    $('#randNum').text(randNum);

    // Generate crystal values
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);

    // Set wins, losses, and score to zero
    var wins = 0;
    var losses = 0;
    var score = 0;

    // Log the random number
    console.log('Random Number:', randNum);
    // console.log('Crystal 1:', crystal1);
    // console.log('Crystal 2:', crystal2);
    // console.log('Crystal 3:', crystal3);
    // console.log('Crystal 4:', crystal4);

    // Put wins and losses on page
    $('#wins').text(wins);
    $('#losses').text(losses);

    // Function to reset the random number, crystal values, and player score
    function reset() {
        randNum = Math.floor(Math.random() * 102 + 19);
        $('#randNum').text(randNum);
        console.log('Random Number:', randNum);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        score = 0;
        $('#score').text(score);
        // console.log('Crystal 1:', crystal1);
        // console.log('Crystal 2:', crystal2);
        // console.log('Crystal 3:', crystal3);
        // console.log('Crystal 4:', crystal4);
    }

    // Function for winning a round - adds a win and calls the reset function
    function winner() {
        console.log("You won!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    // Function for losing a round - adds a loss and calls the reset function
    function loser() {
        console.log("You lose!");
        losses++;
        $('#losses').text(losses);
        reset();
    }

    // Crystal 1 click function - adds crystal's value to score and checks for a win or loss
    $(".game").on("click", "#crystal1", function () {
        score = score + crystal1;
        $("#score").text(score);
        console.log('Score:', score);
        if (score == randNum) {
            winner();
        }
        else if (score > randNum) {
            loser();
        }
    });

    // Crystal 2 click function - adds crystal's value to score and checks for a win or loss
    $(".game").on("click", "#crystal2", function () {
        score = score + crystal2;
        $("#score").text(score);
        console.log('Score:', score);
        if (score == randNum) {
            winner();
        }
        else if (score > randNum) {
            loser();
        }
    });

    // Crystal 3 click function - adds crystal's value to score and checks for a win or loss
    $(".game").on("click", "#crystal3", function () {
        score = score + crystal3;
        $("#score").text(score);
        console.log('Score:', score);
        if (score == randNum) {
            winner();
        }
        else if (score > randNum) {
            loser();
        }
    });

    // Crystal 4 click function - adds crystal's value to score and checks for a win or loss
    $(".game").on("click", "#crystal4", function () {
        score = score + crystal4;
        $("#score").text(score);
        console.log('Score:', score);
        if (score == randNum) {
            winner();
        }
        else if (score > randNum) {
            loser();
        }
    });

});