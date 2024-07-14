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

const closeModal = document.body
closeModal.addEventListener('click', function(event) {
    const pElement = document.getElementById('error-message');
    pElement.remove()
})


