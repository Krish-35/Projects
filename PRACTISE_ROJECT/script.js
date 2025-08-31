const Password = document.getElementById("PASSWORD");
const feedback = document.getElementById("feedback");
const check = document.getElementById("Check");

check.addEventListener("click" , ()=>{
    const password  = Password.value;
    let strength = 0;

    if (password.trim() === "") {
        feedback.textContent = "";
        feedback.style.color = "";
        return;  // stop execution
    }

    if(password.length >= 8) strength++;
    if((/[A-Z]/.test(password))) strength++;
    if((/[a-z]/.test(password))) strength++;
    if((/[0-9]/.test(password))) strength++;
    if((/[!@#$%^&*]/.test(password))) strength++;

    switch(strength){
        case 0:
        case 1:
            feedback.textContent="Weak Password";
            break;
        case 2:
        case 3:
            feedback.textContent="Medium Password";
            break;
        case 4:
        case 5:
            feedback.textContent="Strong Password";
            break;
    }
});