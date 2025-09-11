const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-z]/.test(password)) strength++;
    if ((/[a-z]/).test(password)) strength++;
    if ((/[0-9]/.test(password))) strength++;
    if ((/[!@#$%^&*]/.test(password))) strength++;

    switch(strength){
        case 0:
        case 1:
            feedback.textContent="The password is weak";
            break;
        case 2:
        case 3:
            feedback.textContent = "The password is medium";
            break;
        case 4:
        case 5:
            feedback.textContent = "The password is strong";
            break;
    }
    
});