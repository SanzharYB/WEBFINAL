document.addEventListener('DOMContentLoaded', function () {

    // Grab references to form elements
    const loginForm = document.getElementById('loginForm');
    const googleSignInButton = document.getElementById('googleSignIn');
    const loginEmailInput = document.getElementById("loginEmail");
    const loginPasswordInput = document.getElementById("loginPassword");
    const loginSuccessMessage = document.getElementById("loginSuccessMessage");
    const loginErrorMessage = document.getElementById("loginErrorMessage");

    // Form submission event listener
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Clear previous messages
        loginSuccessMessage.textContent = "";
        loginErrorMessage.textContent = "";

        // Get email and password values
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;

        // Check if email exists and password matches
        const userData = JSON.parse(localStorage.getItem(email));
        if (userData && userData.password === password) {
            loginSuccessMessage.textContent = `Welcome back, ${userData.name}!`;
            localStorage.setItem('loggedInUser', email); // Store logged in user
            window.location.href = 'profile.html'; // Redirect to home page
        } else {
            loginErrorMessage.textContent = "Invalid email or password!";
        }
    });

    // Google Sign-In Button Click Event (for demonstration, actual Google Sign-In will need API setup)
    googleSignInButton.addEventListener('click', function () {
        // Placeholder for Google Sign-In action
        alert('Google Sign-In Button clicked. Implement Google Auth API here!');
        // Here, you'd integrate Google Sign-In functionality using the Google API
    });

});

window.onload = function() {
    // Check if a user is already logged in
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (loggedInUserEmail) {
        // Redirect to home if user is logged in
        window.location.href = 'profile.html';
    } else {
        // Show the register form or login form if not logged in
        showForm('register');
    }
};
