let recentGames = [
    {opponent: "Flames", location: "away", result: "OT Loss", score: "2-1"},
    {opponent: "Sabres", location: "away", result: "Loss", score: "4-1"},
    {opponent: "Canadiens", location: "home", result: "Loss", score: "6-2"},
    {opponent: "Senators", location: "home", result: "Loss", score: "6-2"},
    {opponent: "Canucks", location: "home", result: "OT Loss", score: "5-4"}
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