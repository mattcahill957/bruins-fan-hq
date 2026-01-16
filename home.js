const recentGames = [
    {opponent: "Kraken", location: "home", result: "Win", score: "4-2"},
    {opponent: "Red Wings", location: "home", result: "Win", score: "3-0"},
    {opponent: "Penguins", location: "home", result: "Win", score: "1-0"},
    {opponent: "Rangers", location: "home", result: "Win", score: "10-2"},
    {opponent: "Flames", location: "home", result: "Win", score: "4-1"},
];

document.addEventListener("DOMContentLoaded", () => {
    const recentGamesContainer = document.getElementById("recent-games");

    recentGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.textContent = `Bruins ${game.location === "home" ? "vs." : "@"} ${game.opponent} - ${game.result} ${game.score}`;
        recentGamesContainer.appendChild(gameCard);
        gameCard.classList.add(game.result.toLowerCase().replace(" ", "-"));
    });
});