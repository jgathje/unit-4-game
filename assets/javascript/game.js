var plant = Math.floor(Math.random() * 12) + 1;
var freddie = Math.floor(Math.random() * 12) + 1;
var cornell = Math.floor(Math.random() * 12) + 1;
var cher = Math.floor(Math.random() * 12) + 1;
var randomNum = Math.floor(Math.random() * 101) + 19;
var wins = 0;
var score = 0;
console.log("plant ", plant);
console.log("freddie ", freddie);
console.log("cornell ", cornell);
console.log("cher ", cher);
console.log(randomNum);

$(document).ready(function () {

    $("#randomNum").text("The Computer Number Is: " + randomNum);
    $("#wins").text("Wins: " + wins);
    $("#score").text("Your Score: " + score);
    $("#title").text("ROCK STAR ROULETTE!");

    $("#plant").on("click",
        function () {
            hide();
            score = score + plant;
            $("#score").text("Your score: " + score)
            click();
        });
    $("#freddie").on("click",
        function () {
            hide();
            score = score + freddie;
            $("#score").text("Your score: " + score);
            click();
        });
    $("#cornell").on("click",
        function () {
            hide();
            score = score + cornell;
            $("#score").text("Your score: " + score);
            click();
        });
    $("#cher").on("click",
        function () {
            hide();
            score = score + cher;
            $("#score").text("Your score: " + score);
            click();
        });

});

function click() {
    if (score == randomNum) {
        alert("YOU WIN! Click anywhere to restart!");

        $("body").on("click",
            function () {
                document.getElementById("champion").style.display = "block"
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
        alert("YOU LOSE! Click anywhere to restart!");
        $("body").on("click",
            function () {
                document.getElementById("fault").style.display = "block"
            }
        )
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

function hide() {
    $("body").on("click",
            function () {
                document.getElementById("champion").style.display = "none"
            }
        )
    $("body").on("click",
    function () {
        document.getElementById("fault").style.display = "none"
    }
)
}
