function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");
    successMessage.textContent = "";
    errorMessage.textContent = "";

    if (localStorage.getItem(email)) {
        errorMessage.textContent = "Email is already registered!";
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    localStorage.setItem(email, JSON.stringify({ name: name, password: password }));

    successMessage.textContent = "Registration successful!";
    return true;
}