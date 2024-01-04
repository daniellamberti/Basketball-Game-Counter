
let homeScore = 0;
let totalHomeScore = 0
let guestScore = 0;
let totalGuestScore = 0;

let totalHomeScoreEl = document.getElementById("homeScore");
let totalGuestScoreEl = document.getElementById("guestScore");


totalHomeScoreEl.textContent = totalHomeScore;
totalGuestScoreEl.textContent = totalGuestScore;

function scorePointsHome(name, num, text) {

    name += num;
    totalHomeScore += name;
    text.textContent = totalHomeScore;


    if (totalHomeScore > totalGuestScore) {
        console.log("Home is winning");
        totalHomeScoreEl.style.backgroundColor = 'greenyellow';
        totalGuestScoreEl.style.backgroundColor = 'black';
    } else if (totalHomeScore < totalGuestScore) {
        totalHomeScoreEl.style.backgroundColor = 'black';
    } else if (totalHomeScore === totalGuestScore) {
        console.log("Equal");
        totalHomeScoreEl.style.backgroundColor = 'black';
        totalGuestScoreEl.style.backgroundColor = 'black';
    }
}

function scorePointsGuest(name, num, text) {
    name += num;
    totalGuestScore += name;
    text.textContent = totalGuestScore;

    if (totalGuestScore > totalHomeScore) {
        console.log("Guest is winning");
        totalGuestScoreEl.style.backgroundColor = 'greenyellow';
        totalHomeScoreEl.style.backgroundColor = 'black';
    } else if (totalGuestScore < totalHomeScore) {
        totalGuestScoreEl.style.backgroundColor = 'black';
    } else if (totalGuestScore === totalHomeScore) {
        console.log("Equal");
        totalHomeScoreEl.style.backgroundColor = 'black';
        totalGuestScoreEl.style.backgroundColor = 'black';
    }
}

function resetHomeScore() {
    totalHomeScore = 0;
    totalHomeScoreEl.textContent = "0";
    totalHomeScoreEl.style.backgroundColor = 'black';
}

function resetGuestScore() {
    totalGuestScore = 0;
    totalGuestScoreEl.textContent = "0";
    totalGuestScoreEl.style.backgroundColor = 'black';
}

