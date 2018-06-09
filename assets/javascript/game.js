//game starts by showing a random number between 19-120

//game shows pictures of crystals with random hidden values between 1-12

//crystal values are randomised at start of game

//player wins by matching number exactly by choosing the values from crystals

//player loses when playerValue is over the shown random number



//global values


//create object to hold variables
let game = {
    wins: 0,
    losses: 0,
    playerValue: 0,
    compNumber: [],
    gemArr: [],
    randomGem: 0,
    

    //function for getting a random number for compNumber
    compRandom: function () {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        this.compNumber.push(randomNumber);
        return randomNumber;
    },
    //random numbers for gems
    gemRandom: function () {
        //gets random number
        randomGem = Math.floor(Math.random() * 12) + 1;
        return randomGem; 
    },
    gemPush: function () {
        if (this.gemArr.indexOf(this.randomGem) === -1) {
            this.gemArr.push(randomGem);
        } 
        
    },

    //using gemArr to assign pictures the randomGem values
    gemSet: function () {
        this.gemValue1 = document.getElementById("gemPc1");
        this.gemValue2 = document.getElementById("gemPc2");
        this.gemValue3 = document.getElementById("gemPc3");
        this.gemValue4 = document.getElementById("gemPc4");

    },

    gemNum: function () {
        this.gemValue1 = this.gemArr[0];
        this.gemValue2 = this.gemArr[1];
        this.gemValue3 = this.gemArr[2];
        this.gemValue4 = this.gemArr[3];
    },

    winLose: function () {
        if (this.playerValue > this.compNumber[0]) {
            this.losses++;
            alert("Better luck next time bud...");
            this.gameReset();
            this.gameStart();
        }
        if (this.playerValue === this.compNumber[0]) {
            this.wins++;
            alert("Very nice!~~");
            this.gameReset();
            this.gameStart();
        }
    },
    //starting the game
    gameStart: function () {
        
        for (i = 0; i <= 3; i++) {
            this.gemRandom();
            this.gemPush();
        }

        this.compRandom();
        this.gemSet();
        this.gemNum();
        console.log(game.gemArr);
    },
    //reseting game after win or lose
    gameReset: function () {
        this.gemArr.splice(0, this.gemArr.length);
        this.compNumber.splice(0, this.compNumber.length);
        this.playerValue = 0;
        $('#comp').html("<p>Reach: " + game.compNumber + "</p>");
    },
}
//loads certain functions when window loads
window.onload = function () {
    game.gameStart();
    console.log(game.compNumber);
    $('#wins').html("<p>Wins: " + game.wins + "</p>");
    $('#comp').html("<p>Reach: " + game.compNumber + "</p>");
    $('#loss').html("<p>Losses: " + game.losses + "</p>");
    $('#guess').html("<p>Your number: " + game.playerValue + "</p>");
};

//setting which button will have what value when clicked
$("#gemPc1").on('click', function (event) {
    game.playerValue = parseInt(game.playerValue) + parseInt(game.gemValue1);
    console.log(game.playerValue)
    game.winLose();
});
$("#gemPc2").on('click', function (event) {
    game.playerValue = parseInt(game.playerValue) + parseInt(game.gemValue2);
    console.log(game.playerValue);
    game.winLose();
});
$("#gemPc3").on('click', function (event) {
    game.playerValue = parseInt(game.playerValue) + parseInt(game.gemValue3);
    console.log(game.playerValue);
    game.winLose();
});
$("#gemPc4").on('click', function (event) {
    game.playerValue = parseInt(game.playerValue) + parseInt(game.gemValue4);
    console.log(game.playerValue);
    game.winLose();
});
$('.btn').on('click', function () {
    $('#wins').html("<p>Wins: " + game.wins + "</p>");
    $('#comp').html("<p>Reach: " + game.compNumber + "</p>");
    $('#loss').html("<p>Losses: " + game.losses + "</p>");
    $('#guess').html("<p>Your number: " + game.playerValue + "</p>");
});

