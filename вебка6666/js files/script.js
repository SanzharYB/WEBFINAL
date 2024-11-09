    
    const navLinks = document.querySelectorAll('#navbar a'); 
    let currentIndex = 0; 
    
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
            event.preventDefault(); 
        }
    });
    
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

  
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
        if (theme === 'night-theme') {
            themeToggleBtn.textContent = 'Switch to Day Mode';
        } else {
            themeToggleBtn.textContent = 'Switch to Night Mode';
        }
    }


    applySavedTheme();

    
    themeToggleBtn.addEventListener('click', () => {
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