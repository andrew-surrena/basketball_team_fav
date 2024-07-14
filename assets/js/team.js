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

//const myModal = document.getElementById('myModal')
//const myInput = document.getElementById('myInput')
//myModal.addEventListener('shown.bs.modal', () => {
//    myInput.focus()
//})

// Add team name to html
const addTeam = document.getElementById('fav-team')
const addLogo = document.getElementById('fav-logo')
const addImgElement = document.createElement('img')
const addH1Element = document.createElement('h1')
addH1Element.textContent = `${favTeamName} Team Tracker`;
addH1Element.setAttribute("style", "font-size: 350%")
addImgElement.setAttribute('src', favTeamLogo)
addImgElement.setAttribute('style', 'width: 150px; height:150px')
addLogo.append(addImgElement)
addTeam.append(addH1Element)




const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

//myModal.addEventListener('shown.bs.modal', () => {
//  myInput.focus()
//})

// let aTags = document.querySelectorAll('a')
// console.log(aTags.length);
// ;
//     if (aTags.length !== teamNames.length) {
//         const addA = document.createElement('a');
//         const myDropdownEl = document.querySelector('#myDropdown');
//         myDropdownEl.appendChild(addA);
//     } else {(let i = 0; i < aTags.length; i++) 
//         aTags[i].textContent = teamNames.name[i]}
for (let i = 0; i < teamNames.name.length; i++) {
    const optionElement = document.createElement('option');
    
    optionElement.textContent = teamNames.name[i]
    optionElement.value = teamNames.name[i]
    
    team1.append(optionElement)
}

const modalTitle = document.querySelector('.add-team')
const titleElement = document.createElement('h1')
titleElement.textContent = favTeamName
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
// event.preventDefault()
// console.log(opponent.value);
// console.log(winSelect.checked);
// console.log(lossSelect.checked);
// console.log(scoreInput.value);
if (winSelect.checked === lossSelect.checked) {
    const errorMessage = document.createElement('p');
    errorMessage.setAttribute('style', 'color: red');
    errorMessage.setAttribute('id', 'error-message');
    errorMessage.textContent = `Please select Yes or No`;
    updateRecord.append(errorMessage)
    event.preventDefault()}
// else if (opponents.value !== '') {
//     opponents = JSON.parse(localStorage.getItem('opponents'))
//     wins = JSON.parse(localStorage.getItem('wins'))
//     losses = JSON.parse(localStorage.getItem(losses))
//     scores = JSON.parse(localStorage.getItem(scores))
//     opponents.push(opponent.value)
//     wins.push(winSelect.checked)
//     losses.push(lossSelect.checked)
//     scores.push(scoreInput.value)
//     localStorage.setItem('opponents', JSON.stringify(opponents))
//     localStorage.setItem('wins', JSON.stringify(wins));
//     localStorage.setItem('losses', JSON.stringify(losses))
//     localStorage.setItem('scores', JSON.stringify(scores))
// }
else {
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
}return})

const closeModal = document.getElementById('close-btn')
closeModal.addEventListener('click', function(event) {
    const pElement = document.getElementById('error-message');
// if (pElement.value !== '') {
// pElement.remove()}
opponents = JSON.parse(localStorage.getItem('opponents'))
wins = JSON.parse(localStorage.getItem('wins'))
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
    let numberOfLosses = 0;
    for (var i = 0; i < losses.length; i++) {
       if (losses[i] === true) {
          numberOfLosses++;
       }
    }
    return numberOfLosses;
}

let numberOfWins = countWins(wins);
let numberOfLosses = countLosses(losses);

console.log(numberOfWins);
console.log(numberOfLosses);

if (updateWins && numberOfWins != null) {updateWins.innerHTML=`${numberOfWins}`;}
if (updateLosses && numberOfLosses != null) {updateLosses.innerHTML=`${numberOfLosses}`;}

    for (let i = 0; i < opponents.length; i++) {
        const game = opponents[i];
    
    
        const createCard = document.createElement('div')
    const cardPlacement = document.getElementById('game-card')
    createCard.setAttribute('class', "card m-2")
    createCard.setAttribute('style', "width: 32.15%")
    createCard.setAttribute('id', `${opponents.indexOf(game[i])}-div`)
    cardPlacement.append(createCard)
    const createCard2 = document.createElement('div')
    const cardPlacement2 = document.getElementById(`${opponents.indexOf(game[i])}-div`)
    createCard2.setAttribute('class', 'card-body')
    createCard2.setAttribute('id', `${opponents.indexOf(game[i])}-h5-element`)
    cardPlacement2.append(createCard2)
    const createCard3 = document.createElement('h5')
    const cardPlacement3 = document.getElementById(`${opponents.indexOf(game[i])}-h5-element`)
    createCard3.setAttribute('class', 'card-title')
    createCard3.setAttribute('id', `${opponents.indexOf(game[i])}-h6-element`)
    // ToDo: add array for game # and link:
    let gameNumber = game.indexOf(game[i])+1
    createCard3.textContent = `Game ${gameNumber}`
    cardPlacement3.append(createCard3)
    const createCard4 = document.createElement('h6')
    const cardPlacement4 = document.getElementById(`${opponents.indexOf(game[i])}-h5-element`)
    createCard4.setAttribute('class', 'card-subtitle mb-2 text-body-secondary')
    createCard4.setAttribute('id', `${opponents.indexOf(game[i])}-third-div`)
    createCard4.textContent = `${favTeamName} vs ${opponents[i]}`
    cardPlacement4.append(createCard4)
    const createCard5 = document.createElement('div')
    const cardPlacement5 = document.getElementById(`${opponents.indexOf(game[i])}-h5-element`)
    createCard5.setAttribute('style', 'display: flex; flex-direction:row ;justify-content: space-between; align-items: center;')
    createCard5.setAttribute('id', `${opponents.indexOf(game[i])}-p-element`)
    cardPlacement5.append(createCard5)
    const createCard6 = document.createElement('p')
    const cardPlacement6 = document.getElementById(`${opponents.indexOf(game[i])}-p-element`)
    createCard6.setAttribute('class', 'card-text fs-3')
    createCard6.setAttribute('id', `${opponents.indexOf(game[i])}-fourth-div`)
    // ToDo: add condition for win/loss
    for (let i = 0; i < wins.length; i++) {
        const targetWin = wins[i];
        if (targetWin === true) {createCard6.textContent = `We Won! 🥳`
        } else { createCard6.textContent = `We Lost 😭`}
    }
    cardPlacement6.append(createCard6)
    const createCard7 = document.createElement('div')
    const cardPlacement7 = document.getElementById(`${opponents.indexOf(game[i])}-fourth-div`)
    createCard7.setAttribute('style', 'display:flex; justify-content:space-evenly; width: 150px;')
    createCard7.setAttribute('id', `${opponents.indexOf(game[i])}-second-p`)
    cardPlacement6.append(createCard7)
    const createCard8=document.createElement('p')
    const addScore=document.createElement('p')
    const cardPlacement8=document.getElementById(`${opponents.indexOf(game[i])}-second-p`)
    createCard8.setAttribute('class', 'card-text fw-bold fs-5')
    createCard8.textContent=`Score:`
    addScore.setAttribute('class', 'card-text fs-5')
    scores = JSON.parse(localStorage.getItem('scores'))
    addScore.textContent=scores
    cardPlacement8.append(createCard8)
    cardPlacement8.append(addScore)
}
})


                                                // <div class="card m-2" style = "width: 32.15%;">
                                                //     <div class="card-body">
                                                //         <h5 class="card-title">Game 1</h5>
                                                //         <h6 class="card-subtitle mb-2 text-body-secondary">Oklahoma City Thunder vs Golden State Warriors</h6>
                                                //         <div style="display: flex; flex-direction:row ;justify-content: space-between; align-items: center;">
                                                //             <p class="card-text fs-3">We won! 🥳</p>
                                                //             <div style="display:flex; justify-content:space-evenly; width: 150px;">
                                                //                 <p class="card-text fw-bold fs-5">Score: </p>
                                                //                 <p class="card-text fs-5"> 123-114</p>
                                                //             </div>
                                                //         </div>
                                                //     </div>
                                                // </div>