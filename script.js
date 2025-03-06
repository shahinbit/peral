document.addEventListener('DOMContentLoaded', function () {
    // Simulate loading player count
    setTimeout(function () {
        document.getElementById('player-count').textContent = '42 Players'; // Example player count
    }, 2000);

    // Simulate leaderboard loading
    const leaderboard = [
        'Player1 - 50m $',
        'Player2 - 45m $',
        'Player3 - 40m $',
        'Player4 - 38m $',
    ];

    function loadGallery() {
    let gallery = localStorage.getItem("uploadedImages");
    if (gallery) {
        document.getElementById("gallery-container").innerHTML = gallery;
    }
}
window.onload = loadGallery;


    const leaderboardContainer = document.getElementById('leaderboard');
    setTimeout(function () {
        leaderboardContainer.innerHTML = '';
        leaderboard.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = player;
            leaderboardContainer.appendChild(listItem);
        });
    }, 3000);
});
