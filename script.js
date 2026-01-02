const recentGames = [
    {opponent: "Oilers", location: "away", result: "Win", score: "6-2"},
    {opponent: "Flames", location: "away", result: "OT Loss", score: "2-1"},
    {opponent: "Sabres", location: "away", result: "Loss", score: "4-1"},
    {opponent: "Canadiens", location: "home", result: "Loss", score: "6-2"},
    {opponent: "Senators", location: "home", result: "Loss", score: "6-2"},
];

document.addEventListener("DOMContentLoaded", () => {
    const recentGamesContainer = document.getElementById("recent-games");
    if (!recentGamesContainer) return; // not on home page

    recentGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.textContent = `Bruins ${game.location === "home" ? "vs." : "@"} ${game.opponent} - ${game.result} ${game.score}`;
        recentGamesContainer.appendChild(gameCard);
        gameCard.classList.add(game.result.toLowerCase().replace(" ", "-"));
    });
});

const playerCards = [
    {id: 1, name: "David Pastrnak", position: "RW", number: 88, country: "Czech Republic", height: "6'0\"", weight: 199},
    {id: 2, name: "Morgan Geekie", position: "C", number: 39, country: "Canada", height: "6'3\"", weight: 212},
    {id: 3, name: "Charlie McAvoy", position: "D", number: 73, country: "USA", height: "6'1\"", weight: 211},
    {id: 4, name: "Jeremy Swayman", position: "G", number: 1, country: "USA", height: "6'3\"", weight: 195},
    {id: 5, name: "Viktor Arvidsson", position: "LW", number: 71, country: "Sweden", height: "5'10\"", weight: 181},
    {id: 6, name: "Michael Eyssimont", position: "C", number: 81, country: "USA", height: "6'0\"", weight: 195},
    {id: 7, name: "Tanner Jeannot", position: "LW", number: 84, country: "Canada", height: "6'2\"", weight: 221},
    {id: 8, name: "Mark Kastelic", position: "C", number: 47, country: "USA", height: "6'4\"", weight: 234},
    {id: 9, name: "Marat Khusnutdinov", position: "C", number: 92, country: "Russia", height: "5'11\"", weight: 184},
    {id: 10, name: "Sean Kuraly", position: "C", number: 52, country: "USA", height: "6'2\"", weight: 208},
    {id: 11, name: "Elias Lindholm", position: "C", number: 28, country: "Sweden", height: "6'1\"", weight: 200},
    {id: 12, name: "Fraser Minton", position: "C", number: 93, country: "Canada", height: "6'2\"", weight: 204},
    {id: 13, name: "Casey Mittelstadt", position: "C", number: 11, country: "USA", height: "6'1\"", weight: 205},
    {id: 14, name: "Alex Steeves", position: "C", number: 21, country: "USA", height: "6'0\"", weight: 199},
    {id: 15, name: "Jeffrey Viel", position: "LW", number: 48, country: "Canada", height: "6'1\"", weight: 214},
    {id: 16, name: "Pavel Zacha", position: "C", number: 18, country: "Czech Republic", height: "6'4\"", weight: 211},
    {id: 17, name: "Jonathon Aspirot", position: "D", number: 45, country: "Canada", height: "6'0\"", weight: 205},
    {id: 18, name: "Jordan Harris", position: "D", number: 43, country: "USA", height: "6'0\"", weight: 189},
    {id: 19, name: "Henri Jokiharju", position: "D", number: 20, country: "Finland", height: "6'0\"", weight: 205},
    {id: 20, name: "Vladislav Kolyachonok", position: "D", number: 74, country: "Belarus", height: "6'2\"", weight: 198},
    {id: 21, name: "Hampus Lindholm", position: "D", number: 27, country: "Sweden", height: "6'4\"", weight: 217},
    {id: 22, name: "Mason Lohrei", position: "D", number: 6, country: "USA", height: "6'5\"", weight: 218},
    {id: 23, name: "Andrew Peeke", position: "D", number: 26, country: "USA", height: "6'3\"", weight: 214},
    {id: 24, name: "Nikita Zadorov", position: "D", number: 91, country: "Russia", height: "6'7\"", weight: 255},
    {id: 25, name: "Joonas Korpisalo", position: "G", number: 70, country: "Finland", height: "6'4\"", weight: 200},
]

document.addEventListener("DOMContentLoaded", () => {
    const forwardsContainer = document.querySelector(".forwards-container");
    const defensemenContainer = document.querySelector(".defensemen-container");
    const goaliesContainer = document.querySelector(".goalies-container");

    playerCards.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.className = "player-card";
        playerCard.dataset.id = player.id;
        playerCard.textContent = `${player.name} (#${player.number}) - ${player.position}`;

        if (["LW", "C", "RW"].includes(player.position)) {
            forwardsContainer.appendChild(playerCard);
        } else if (player.position === "D") {
            defensemenContainer.appendChild(playerCard);
        } else if (player.position === "G") {
            goaliesContainer.appendChild(playerCard);
        }
    });
});

const modal = document.getElementById("playerModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

document.addEventListener("click", (event) => {
  const card = event.target.closest(".player-card");
  if (!card) return;

  const playerId = card.dataset.id;
  const player = playerCards.find(p => String(p.id) === String(playerId));
  if (!player) return;

  modalTitle.textContent = `${player.name} (#${player.number})`;
  modalBody.innerHTML = `
  <div class="player-stats">
    <div>
      <span>Position</span>
      <strong>${player.position}</strong>
    </div>
    <div>
      <span>Country</span>
      <strong>${player.country}</strong>
    </div>
    <div>
      <span>Height</span>
      <strong>${player.height}</strong>
    </div>
    <div>
      <span>Weight</span>
      <strong>${player.weight}</strong>
    </div>
  </div>
`;


  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (event) => {
  // click outside the modal box closes it
  if (event.target === modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});

