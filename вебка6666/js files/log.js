function showForm(formType) {
    document.getElementById("registerForm").style.display = formType === 'register' ? 'block' : 'none';
    document.getElementById("loginForm").style.display = formType === 'login' ? 'block' : 'none';
}

function registerUser() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;
    const regSuccessMessage = document.getElementById("regSuccessMessage");
    const regErrorMessage = document.getElementById("regErrorMessage");

    regSuccessMessage.textContent = "";
    regErrorMessage.textContent = "";

    if (localStorage.getItem(email)) {
        regErrorMessage.textContent = "Email is already registered!";
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    localStorage.setItem(email, JSON.stringify({ name: name, password: password }));
    regSuccessMessage.textContent = "Registration successful! You can now log in.";
    return false; 
}

function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const loginSuccessMessage = document.getElementById("loginSuccessMessage");
    const loginErrorMessage = document.getElementById("loginErrorMessage");

    loginSuccessMessage.textContent = "";
    loginErrorMessage.textContent = "";

    // Check if email exists and password matches
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
        loginSuccessMessage.textContent = `Welcome back, ${userData.name}!`;
        localStorage.setItem('loggedInUser', email); // Store logged in user
        showForm('login'); // Switch to login form
        return false; // Prevent form submission
    } else {
        loginErrorMessage.textContent = "Invalid email or password!";
        return false; // Prevent form submission
    }
}

function logout() {
    localStorage.removeItem('loggedInUser'); // Clear logged in user
    document.getElementById("loginSuccessMessage").textContent = "You have logged out successfully!";
    showForm('login'); 
}

window.onload = function() {
    if (localStorage.getItem('loggedInUser')) {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        const userData = JSON.parse(localStorage.getItem(loggedInUserEmail));
        document.getElementById("loginSuccessMessage").textContent = `Welcome back, ${userData.name}!`;
        showForm('login'); 
    } else {
        showForm('register');
    }
}