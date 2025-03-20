document.addEventListener('DOMContentLoaded', function () {
    // Toggle Menu
    document.getElementById('menu-toggle').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Simulate loading player count
    setTimeout(function () {
        document.getElementById('player-count').textContent = '42 Players'; // Example count
    }, 2000);

    // Leaderboard Data
    const leaderboard = [
        'Player1 - 50m $',
        'Player2 - 45m $',
        'Player3 - 40m $',
        'Player4 - 38m $',
    ];

    const leaderboardContainer = document.getElementById('leaderboard');
    if (leaderboardContainer) {
        setTimeout(function () {
            leaderboardContainer.innerHTML = '';
            leaderboard.forEach(player => {
                const listItem = document.createElement('li');
                listItem.textContent = player;
                leaderboardContainer.appendChild(listItem);
            });
        }, 3000);
    }

    // Load Gallery from LocalStorage
    function loadGallery() {
        const galleryContainer = document.getElementById("gallery-container");
        if (galleryContainer) {
            let gallery = localStorage.getItem("uploadedImages");
            if (gallery) {
                galleryContainer.innerHTML = gallery;
            }
        }
    }

    loadGallery();
});
// Sidebar Toggle
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
