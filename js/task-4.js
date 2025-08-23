const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", validSubmit);


function validSubmit(event) {
    event.preventDefault();
    
    const email = loginForm.elements.email;
    const password = loginForm.elements.password;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    console.log(emailValue);
    console.log(passwordValue);
    

    if (!emailValue || !passwordValue) {
        alert(`All form fields must be filled in`)
        return;
    }

    const loginFormSafe = {
        email: emailValue,
        password: passwordValue,
    }

    console.log(loginFormSafe);

    loginForm.reset()
}