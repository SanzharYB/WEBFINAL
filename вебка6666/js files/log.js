document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    let isValid = true;
    const latinPattern = /^[A-Za-z0-9_\-@.]+$/;
    const hasNumber = /\d/;

    if (username.value.trim() === '') {
        username.placeholder = 'Please enter your username';
        username.classList.add('error');
        isValid = false;
    } else if (!latinPattern.test(username.value.trim())) {
        username.value = '';
        username.placeholder = 'Use only Latin characters';
        username.classList.add('error');
        isValid = false;
    }

    if (password.value.trim() === '') {
        password.placeholder = 'Please enter your password';
        password.classList.add('error');
        isValid = false;
    } else if (password.value.includes(' ')) {
        password.placeholder = 'Password must not contain spaces.';
        password.classList.add('error');
        isValid = false;
    } else if (password.value.length < 6) {
        password.placeholder = 'Password must be at least 6 characters long.';
        password.classList.add('error');
        isValid = false;
    } else if (!hasNumber.test(password.value)) {
        password.placeholder = 'Password must contain at least one number.';
        password.classList.add('error');
        isValid = false;
    } else if (!latinPattern.test(password.value.trim())) {
        password.placeholder = 'Password must contain only Latin characters.';
        password.classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        clearInvalidFields(password);
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.name === username.value.trim() && user.password === password.value.trim());

    if (user) {
        event.preventDefault();
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "profile.html";
    } else {
        alert("User does not exist or password is incorrect.");
        clearFields();
    }
});

function clearFields() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function clearInvalidFields(password) {
    if (password.classList.contains('error')) {
        password.value = '';
    }
}

document.getElementById('username').addEventListener('input', function () {
    if (this.value.trim() !== '') {
        this.classList.remove('error');
    }
});

document.getElementById('password').addEventListener('input', function () {
    if (this.value.trim() !== '') {
        this.classList.remove('error');
    }
});

document.getElementById('googleSignIn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Google Sign In is not implemented yet.');
});

document.getElementById('username').addEventListener('keydown', handleKey);
document.getElementById('password').addEventListener('keydown', handleKey);

function handleKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    } else if (event.key === 'Escape') {
        clearFields();
        document.getElementById('username').classList.remove('error');
        document.getElementById('password').classList.remove('error');
    }
}
