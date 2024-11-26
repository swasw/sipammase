// Function to toggle the visibility of the menu with smooth animation
function toggleMenu() {
    const menu = document.getElementById('menu');
    
    if (menu.style.display === 'block') {
        // Animate closing (fade out and slide up)
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            menu.style.display = 'none'; // Actually hide the menu after the animation ends
        }, 300); // Matches the transition duration (300ms)
    } else {
        // Show the menu with fade-in and slide down
        menu.style.display = 'block';
        setTimeout(() => {
            menu.style.opacity = '1';
            menu.style.transform = 'translateY(0)';
        }, 10); // Delay to ensure the transition starts smoothly
    }
}

// Close the menu if clicked outside of it
window.onclick = function(event) {
    const menu = document.getElementById('menu');
    const btn = document.querySelector('.menu-btn');
    
    if (!btn.contains(event.target) && !menu.contains(event.target)) {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300); // Hide after the animation completes
    }
};
function navigateTo(url) {
    window.location.href = url;  // This will redirect the user to the specified URL
}
