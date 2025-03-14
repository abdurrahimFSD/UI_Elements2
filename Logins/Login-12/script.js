const form = document.querySelector("form");
const emailField = form.querySelector(".email");
const emailInput = emailField.querySelector("input");
const passwordField = form.querySelector(".password");
const passwordInput = passwordField.querySelector("input");

const EMAIL_PATTERN = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Utility function untuk menghapus shake effect
const removeShake = () => {
    emailField.classList.remove("shake");
    passwordField.classList.remove("shake");
};

// Validasi email
const checkEmail = () => {
    const errorTxt = emailField.querySelector(".error-txt");
    if (!emailInput.value.match(EMAIL_PATTERN)) {
        emailField.classList.add("error");
        emailField.classList.remove("valid");
        errorTxt.innerText = emailInput.value ? "Enter a valid email address" : "Email can't be blank";
    } else {
        emailField.classList.remove("error");
        emailField.classList.add("valid");
    }
};

// Validasi password
const checkPassword = () => {
    const minLength = 8;
    if (!passwordInput.value) {
        passwordField.classList.add("error");
        passwordField.classList.remove("valid");
        passwordField.querySelector(".error-txt").innerText = "Password can't be blank";
    } else if (passwordInput.value.length < minLength) {
        passwordField.classList.add("error");
        passwordField.classList.remove("valid");
        passwordField.querySelector(".error-txt").innerText = `Password must be at least ${minLength} characters`;
    } else {
        passwordField.classList.remove("error");
        passwordField.classList.add("valid");
    }
};