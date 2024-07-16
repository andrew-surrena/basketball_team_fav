const teamNames = {
    name: ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors", "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Milwaukee Bucks", "Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards", "Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunder", "Portland Trail Blazers", "Utah Jazz", "Golden State Warriors", "LA Clippers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings", "Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orleans Pelicans", "San Antonia Spurs"],
    logo: ["https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg", 
    "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
    "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
 ]
}
console.log(teamNames.logo.length);
console.log(teamNames.name.indexOf("Detroit Pistons"))
const team1 = document.querySelector('.team-1')
const favTeamName = JSON.parse(localStorage.getItem('favName'))
const favTeamLogo = JSON.parse(localStorage.getItem('favLogo'))
console.log(favTeamName);
console.log(favTeamLogo);

// Add team name to html
const addTeam = document.getElementById('fav-team')
const addLogo = document.getElementById('fav-logo')
const addImgElement = document.createElement('img')
const addH1Element = document.createElement('h1')
addH1Element.textContent = `${favTeamName} Team Tracker`;
addH1Element.setAttribute("class", "fav-team")
addImgElement.setAttribute('src', favTeamLogo)
addImgElement.setAttribute('style', 'width: 150px; height:150px')
addLogo.append(addImgElement)
addTeam.append(addH1Element)




const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

for (let i = 0; i < teamNames.name.length; i++) {
    const optionElement = document.createElement('option');
    
    optionElement.textContent = teamNames.name[i]
    optionElement.value = teamNames.name[i]
    
    team1.append(optionElement)
}

const modalTitle = document.querySelector('.add-team')
const titleElement = document.createElement('h1')
titleElement.textContent = favTeamName

modalTitle.setAttribute('class','black-text')


modalTitle.append(`Who did the ${favTeamName} play?`)

const opponent = document.querySelector('.team-1')
const winSelect = document.querySelector('#win-check')
const lossSelect = document.querySelector('#loss-check')
const scoreInput = document.querySelector('#score-input')
const updateRecord = document.querySelector('#submit-button')
let opponents = []
let wins = []
let losses = []
let scores = []
updateRecord.addEventListener('submit', function (event) {

if (winSelect.checked === lossSelect.checked) {
    const errorMessage = document.createElement('p');
    errorMessage.setAttribute('style', 'color: red');
    errorMessage.setAttribute('id', 'error-message');
    errorMessage.textContent = `Please select Yes or No`;
    updateRecord.append(errorMessage)
    event.preventDefault()}

else {
let opponents = JSON.parse(localStorage.getItem('opponents')) || [];
let wins = JSON.parse(localStorage.getItem('wins')) || [];
let losses = JSON.parse(localStorage.getItem('losses')) || [];
let scores = JSON.parse(localStorage.getItem('scores')) || [];
event.preventDefault()
console.log(opponent.value);
console.log(winSelect.checked);
console.log(lossSelect.checked);
console.log(scoreInput.value);
opponents.push(opponent.value)
wins.push(winSelect.checked)
losses.push(lossSelect.checked)
scores.push(scoreInput.value)
console.log(opponent.value);
console.log(winSelect.checked);
console.log(lossSelect.checked);
console.log(scoreInput.value);
localStorage.setItem('opponents', JSON.stringify(opponents))
localStorage.setItem('wins', JSON.stringify(wins));
localStorage.setItem('losses', JSON.stringify(losses))
localStorage.setItem('scores', JSON.stringify(scores))
const confirmation = document.createElement('p')
confirmation.setAttribute("style","color: green")
confirmation.setAttribute('id', 'confirmation')
confirmation.textContent = 'Record Submitted 🎉 Press "Close" to return to tracker'
updateRecord.append(confirmation)
}return})

const closeModal = document.getElementById('close-btn')
closeModal.addEventListener('click', function(event) {
    location.reload();})
    window.onload = function(){

    const removeConfirmation = document.getElementById('confirmation')
    if (removeConfirmation) {
        removeConfirmation.textContent="";
    }
    const removeErrorMessage = document.getElementById('error-message')
    if (removeErrorMessage) {
        removeErrorMessage.textContent="";
        removeErrorMessage.textContent="";
    };

    const opponents = JSON.parse(localStorage.getItem("opponents"))
    const wins = JSON.parse(localStorage.getItem('wins'))
    const scores = JSON.parse(localStorage.getItem('scores'))
    
    let games = [];
    
    for (let i = 0; i < opponents.length; i++) {
        const targetOpponent = opponents[i];
        let gameText = wins[i] === true ? `We Won! 🥳` : `We Lost 😭`;
        let targetScore = scores[i];
        games.push({
            title: `Game ${i+1}`,
            subtitle: `${favTeamName} vs ${targetOpponent}`,
            text: gameText,
            score: targetScore
        });
    }
    
    const parentElement = document.getElementById('game-card');
    
    games.forEach(game => {
        // Create card
        const card = document.createElement('div');
        card.setAttribute('class', 'card m-2 card-size');
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    // Add Game #
    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = game.title;

    // Add opponent
    const cardSubtitle = document.createElement('h6');
    cardSubtitle.setAttribute('class', 'card-subtitle mb-2 text-body-secondary');
    cardSubtitle.textContent = game.subtitle;

    // Add win/loss text
    const cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text fs-3');
    cardText.textContent = game.text;

    // Create another div
    const scoreContainer = document.createElement('div');
    scoreContainer.setAttribute('style', 'display:flex; justify-content:space-evenly; width: 150px;');

    // Create score element
    const scoreLabel = document.createElement('p');
    scoreLabel.setAttribute('class', 'card-text fw-bold fs-5');
    scoreLabel.textContent = 'Score: ';
    const scoreValue = document.createElement('p');
    scoreValue.setAttribute('class', 'card-text fs-5');
    scoreValue.textContent = game.score;

    // Add to webpage
    scoreContainer.appendChild(scoreLabel);
    scoreContainer.appendChild(scoreValue);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(scoreContainer);
    card.appendChild(cardBody);
    parentElement.appendChild(card);
});
    



// count wins & losses
losses = JSON.parse(localStorage.getItem('losses'))
const updateWins = document.getElementById('wins')
const updateLosses = document.getElementById('losses')

function countWins(wins) {
    let numberOfWins = 0;
    for (var i = 0; i < wins.length; i++) {
       if (wins[i] === true) {
          numberOfWins++;
       }
    }
    return numberOfWins;
}

function countLosses(losses) {
    if (!losses) {
        return 0; // Return 0 if losses is null or undefined
    }
    let numberOfLosses = 0;
    for (var i = 0; i < losses.length; i++) {
       if (losses[i] === true) {
          numberOfLosses++;
       }
    }
    return numberOfLosses;
}

// add wins & losses to webpage
let numberOfWins = countWins(wins);
let numberOfLosses = countLosses(losses);

console.log(numberOfWins);
console.log(numberOfLosses);

if (updateWins && numberOfWins != null) {updateWins.innerHTML=`${numberOfWins}`;}
if (updateLosses && numberOfLosses != null) {updateLosses.innerHTML=`${numberOfLosses}`;}
}

                                                