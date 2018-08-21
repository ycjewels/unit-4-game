var random_result;
var losses = 0;
var wins =0 ;
var previous = 0;

var startGame = function () {

    $(".crsytals").empty();
    

random_result = Math.floor(Math.random() * 69 ) + 30;

$("#result").html('Random Result: ' + random_result);
for(var i= 0; i < 4; i++){

    var random = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    
        $(".crystals").append(crystal);
    
    }

    $("#previous").html("Total Score" + previous);
}

startGame();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total score: " + previous);
    console.log(previous);

    if (previous > random_result){
        losses++;
        $("#losses").html("You Lose:" + losses );

        previous = 0;
        startGame();
    }
    else if(previous === random_result){
        wins++;
        $("#wins").html("You win!: " + wins);
        previous = 0;
        startGame();
    }

});

/* The code that I first started with 
$(document).ready(function() {

    var random = Math.floor(Math.random()*69+30);
    
    $("#numberToGet").text(random);
    
    var crystalValues = {};
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);
    
    var userTotal= 0;
    var wins = 0;
    var losses = 0;
    
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    
    function reset() {
        random = Math.floor(Math.random()*102+19);
        console.log(random);
        $("#numberToGet").text(random);
        var crystalValues = {};
        crystalValues[1] = Math.floor(Math.random()*12+1);
        crystalValues[2] = Math.floor(Math.random()*12+1);
        crystalValues[3] = Math.floor(Math.random()*12+1);
        crystalValues[4] = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#score").text(userTotal);
    }
    function getCrystalHandler(crystalKey) {
        return function() {
         userTotal = userTotal + crystalValues[crystalKey];
         console.log("New userTotal " + userTotal);
         $("#score").text(userTotal);
     
      
     
     $("#crystal1").on("click", getCrystalHandler(1));
     $("#crystal2").on("click", getCrystalHandler(2));
     $("#crystal3").on("click", getCrystalHandler(3));
     $("#crystal4").on("click", getCrystalHandler(4));
   
     
});

*/