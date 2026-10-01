const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

const showPassword = document.getElementById("showPassword");


// SHOW / HIDE PASSWORD

showPassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        showPassword.textContent = "Hide";

    } else {

        password.type = "password";

        showPassword.textContent = "Show";

    }

});


// LOGIN VALIDATION

form.addEventListener("submit", (event) => {

    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    successMessage.classList.remove("show");

    let valid = true;


    // EMAIL

    if (email.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!email.value.includes("@")) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;
    }


    // PASSWORD

    if (password.value.trim() === "") {

        passwordError.textContent =
            "Please enter your password.";

        valid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        valid = false;
    }


    // SUCCESS

    if (valid) {

        successMessage.classList.add("show");

        form.reset();

        password.type = "password";

        showPassword.textContent = "Show";

    }

});








