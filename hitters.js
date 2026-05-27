let score = 0, guess, previous_score = 0, user_guess, high_score = 0;

function playSound(sound){
    var audio = new Audio(sound);
    audio.play();
}

function cg() {
    let computerGuess = Math.random() * 1000;

    if (computerGuess > 0 && computerGuess < 250) {
        guess = 1;
    } else if (computerGuess >= 250 && computerGuess < 500) {
        guess = 2;
    } else if (computerGuess >= 500 && computerGuess < 750) {
        guess = 4;
    } else if (computerGuess >= 750 && computerGuess < 1000) {
        guess = 6;
    }

    return guess;
}

function ug(user_guess) {
    document.getElementById('demo1').innerHTML = `Computer guess is: ${guess}`;
    document.getElementById('demo').innerHTML = `Live Score: ${score}`;

    if (guess === user_guess) {
        
        alert(`Computer guess is ${guess} and your guess also ${user_guess}.\nSo, YOU OUT.\nYour total score is ${score}`);
        
        previous_score = score;

        if (score > high_score) {
            high_score = score;
        }

        score = 0;

        document.getElementById('demo').innerHTML = `Live Score: ${score}`;
        guess = 0;

        playSound('c:/Users/naras/Downloads/out.mp3');
    } else {
        score += user_guess;

        document.getElementById("demo").innerHTML = `Live Score: ${score}`;

        if(user_guess == 1 || user_guess == 2) {
            playSound("c:/Users/naras/Downloads/single.mp3");
        } else if(user_guess == 4){
            playSound("c:/Users/naras/Downloads/four.mp3");
        } else if(user_guess == 6){
            playSound("c:/Users/naras/Downloads/sixer.mp3");
        }
    }
}

function restart(){
    let msg = confirm(" Do you want to restart the game? ");
    if(msg){
        score = 0;
        document.getElementById('demo').innerHTML = `Live Score: ${score}`;
    }
}
