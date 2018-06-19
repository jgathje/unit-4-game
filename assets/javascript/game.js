var plant = Math.floor(Math.random() * 12) + 1;
var freddie = Math.floor(Math.random() * 12) + 1;
var cornell = Math.floor(Math.random() * 12) + 1;
var cher = Math.floor(Math.random() * 12) + 1;
var randomNum = Math.floor(Math.random() * 101) + 19;
var wins = 0;
var lose = 0;
var score = 0;
console.log("plant ", plant);
console.log("freddie ", freddie);
console.log("cornell ", cornell);
console.log("cher ", cher);
console.log(randomNum);

$(document).ready(function () {

    $("#randomNum").text("The Computer Number Is: " + randomNum);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + lose);
    $("#score").text("Your Score: " + score);
    $("#title").text("ROCK STAR ROULETTE!");
    $("#video").html('<iframe style="display: block; margin: auto;" width="280" height="157.5" src="https://www.youtube.com/embed/GMdvirU-RBk?&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');

    instructions();

    $("#plant").on("click",
        function () {
            score = score + plant;
            $("#score").text("Your score: " + score)
            click();
        });
    $("#freddie").on("click",
        function () {
            score = score + freddie;
            $("#score").text("Your score: " + score);
            click();
        });
    $("#cornell").on("click",
        function () {
            score = score + cornell;
            $("#score").text("Your score: " + score);
            click();
        });
    $("#cher").on("click",
        function () {
            score = score + cher;
            $("#score").text("Your score: " + score);
            click();
        });

});

function click() {
    if (score == randomNum) {
        alert("You scored front row tickets! Get ready to rock! Press ok to see if you can do it again!");

        $("body").on("click",
            function () {
                document.getElementById("video").style.display = "block"
            }
        )
        wins++;
        $("#wins").text("Wins: " + wins);
        plant = Math.floor(Math.random() * 12) + 1;
        freddie = Math.floor(Math.random() * 12) + 1;
        cornell = Math.floor(Math.random() * 12) + 1;
        cher = Math.floor(Math.random() * 12) + 1;
        randomNum = Math.floor(Math.random() * 101) + 19;
        score = 0;
        $("#score").text("Your Score: " + score);
        $("#randomNum").text("The Computer Number Is: " + randomNum);

    }

    else if (score > randomNum) {
        alert("The show sold out before you got tickets! Click ok to try again!");
        $("body").on("click",
            function () {
                document.getElementById("video").style.display = "block"
            }
        )
        lose++;
        $("losses").text("Loses: " + lose);
        plant = Math.floor(Math.random() * 12) + 1;
        freddie = Math.floor(Math.random() * 12) + 1;
        cornell = Math.floor(Math.random() * 12) + 1;
        cher = Math.floor(Math.random() * 12) + 1;
        randomNum = Math.floor(Math.random() * 101) + 19;
        score = 0;
        $("#score").text("Your Score: " + score);
        $("#randomNum").text("The Computer Number Is: " + randomNum);
    }
}



function instructions() {
    var txt1 = $("<p></p>").text("Each rock star has a random value 1-12 assigned to them.");
    var txt2 = $("<p></p>").text("Click the rock star and see how many points it adds to your score.");
    var txt3 = $("<p></p>").text("Keep clicking until your score equals the computer number.");
    var txt4 = $("<p></p>").text("If you match the computer score, you win!");
    var txt5 = $("<p></p>").text("Go over the number, you lose!")

    $("#instructions").append(txt1, txt2, txt3, txt4);
}