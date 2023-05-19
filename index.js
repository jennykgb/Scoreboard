let homeScore = 0;
let guestScore = 0;
let hScore = document.getElementById('homescore');
let gScore = document.getElementById('guestscore');

function add1home(){
    homeScore += 1;
    hScore.textContent = homeScore;
}

function add2home(){
    homeScore += 2;
    hScore.textContent = homeScore;
}

function add3home(){
    homeScore += 3;
    hScore.textContent = homeScore;
}

function add1guest(){
    guestScore +=1;
    gScore.textContent = guestScore;
}

function add2guest(){
    guestScore +=2;
    gScore.textContent = guestScore;
}

function add3guest(){
    guestScore +=3;
    gScore.textContent = guestScore;
}