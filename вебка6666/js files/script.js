// Select elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const themeToggleBtns = document.querySelectorAll('#theme-toggle');
const navLinks = document.querySelectorAll('#navbar a');
const body = document.body;
let currentIndex = 0;

// Sidebar toggle logic
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Navigation focus handling
function updateFocus(index) {
    navLinks.forEach((link, i) => {
        link.classList.remove('focused');
        if (i === index) {
            link.classList.add('focused');
            link.focus();
        }
    });
}

updateFocus(currentIndex);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % navLinks.length;
        updateFocus(currentIndex);
        event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        updateFocus(currentIndex);
        event.preventDefault();
    }
});

// Theme toggle logic
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateButtonLabel(savedTheme);
    } else {
        body.classList.add('day-theme');
    }
}

function updateButtonLabel(theme) {
    themeToggleBtns.forEach(btn => {
        if (theme === 'night-theme') {
            btn.textContent = 'Switch to Day Mode';
        } else {
            btn.textContent = 'Switch to Night Mode';
        }
    });
}

applySavedTheme();

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (body.classList.contains('day-theme')) {
            body.classList.replace('day-theme', 'night-theme');
            localStorage.setItem('theme', 'night-theme');
            updateButtonLabel('night-theme');
        } else {
            body.classList.replace('night-theme', 'day-theme');
            localStorage.setItem('theme', 'day-theme');
            updateButtonLabel('day-theme');
        }
    });
});
