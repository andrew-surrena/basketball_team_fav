const teamNames = {
    name: ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors", "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Milwaukee Bucks", "Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards", "Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunder", "Portland Trail Blazers", "Utah Jazz", "Golden State Warriors", "LA Clippers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings", "Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orleans Plicans", "San Antonia Spurs"],
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
let imgTags = document.querySelectorAll('img')
let h1Tags = document.querySelectorAll('h1')
console.log(imgTags.length);
imgTags.setAttribute(teamNames.logo[7])
//for (let i = 0; i < imgTags.length; i++) {
 //   imgTags[i].setAttribute('src', teamNames.logo[i]);
 //   h1Tags[i].textContent = teamNames.name[i]

 // }