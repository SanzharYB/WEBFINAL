// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {

    // Grab references to form elements
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const googleSignInButton = document.getElementById('googleSignIn');

    // Form submission event listener
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevents form from submitting and refreshing page
        
        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Check if the fields are valid
        let isValid = true;

        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        }

        if (isValid) {
            console.log('Form is valid. Proceed with login.');
            
            // Redirect to home.html after successful login
            window.location.href = 'home.html';
        }
    });

    // Google Sign-In Button Click Event (for demonstration, actual Google Sign-In will need API setup)
    googleSignInButton.addEventListener('click', function () {
        // Placeholder for Google Sign-In action
        alert('Google Sign-In Button clicked. Implement Google Auth API here!');
        // Here, you'd integrate Google Sign-In functionality using the Google API
    });

});
