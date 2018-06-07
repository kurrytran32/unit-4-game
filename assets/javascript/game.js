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
    playerValue:0,
    compNumber:[],
    gemArr: [],

    //function for getting a random number for compNumber
    compRandom: function(){
        randomNumber = Math.floor(Math.random() * 120) + 19;
        this.compNumber.push(randomNumber);
        return randomNumber;
    },

    //random numbers for gems
    gemRandom: function() {
        let randomGem = Math.floor(Math.random() * 12) + 1;
        this.gemArr.push(randomGem);
        return randomGem;
    },

    //reseting game after win or lose
    gameReset: function() {
        this.gemArr.splice(0, this.gemArr.length);
        this.compNumber.splice(0,this.compNumber.length);
        playerValue = 0;
    },

}