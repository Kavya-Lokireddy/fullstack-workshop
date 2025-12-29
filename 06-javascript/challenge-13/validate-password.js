let isUserValid=false;
let isEmailValid=false;
let isPasswordValid=false;
let isConfirmValid=false;

const button=document.getElementById("username");
button.addEventListener("blur",() => user_name());

const user_name = () =>{

    const user=document.getElementById("username").value;

    const user_val=/^[a-zA-Z0-9]{3,15}$/;

    if(user_val.test(user)){
       document.getElementById("valid_user").innerHTML="Username is valid";
       document.getElementById("invalid_user").innerHTML = "";
       isUserValid=true;
    }else{
       document.getElementById("invalid_user").innerHTML="Username is invalid";
       document.getElementById("valid_user").innerHTML = "";
       isUserValid=false;
    }
    checkFormValidity();
};

const email=document.getElementById("email");
email.addEventListener("blur",() => email_validate());

const email_validate = () =>{
    const email_user=document.getElementById("email").value;

    const email_reg=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email_reg.test(email_user)){
        document.getElementById("valid_email").innerHTML="Email is valid";
        document.getElementById("invalid_email").innerHTML = "";
        isEmailValid=true;
    }else{
        document.getElementById("invalid_email").innerHTML="Email is invalid";
        document.getElementById("valid_email").innerHTML = "";
        isEmailValid=false;
    }
    checkFormValidity();
};

const con=document.getElementById("password");
con.addEventListener("input",() => password_check());


const password_check = () =>{

    const pwd=document.getElementById("password").value;
    const result=validatePassword(pwd);

    document.getElementById("password_score").innerHTML=`Strength: ${result.score}/100`;

    if(result.isValid){
        document.getElementById("valid_password").innerHTML="Password is strong";
        document.getElementById("invalid_password").innerHTML = "";
        isPasswordValid=true;
    }else{
        document.getElementById("invalid_password").innerHTML= result.errors.join(", ");
        document.getElementById("valid_password").innerHTML = "";
        isPasswordValid=false;
    }
    checkFormValidity();
};

const validatePassword = (pwd) => {
    let score = 0;
    const errors = [];
    const suggestions = [];

    const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

    // Length check
    if (pwd.length >= 8) {
        score += 20;
    } else {
        errors.push("Too short (min 8 characters)");
        suggestions.push("Increase password length");
    }

    if (pwd.length >= 12) {
        score += 10;
    }

    // Uppercase
    if (/[A-Z]/.test(pwd)) {
        score += 15;
    } else {
        errors.push("No uppercase letter");
        suggestions.push("Add an uppercase letter");
    }

    // Lowercase
    if (/[a-z]/.test(pwd)) {
        score += 15;
    } else {
        errors.push("No lowercase letter");
        suggestions.push("Add a lowercase letter");
    }

    // Number
    if (/\d/.test(pwd)) {
        score += 15;
    } else {
        errors.push("No number");
        suggestions.push("Add a number");
    }

    // Special character
    if (/[!@#$%^&*()_+\-=]/.test(pwd)) {
        score += 15;
    } else {
        errors.push("No special character");
        suggestions.push("Add a special character");
    }

    // Common password check
    if (commonPasswords.includes(pwd)) {
        score -= 30;
        errors.push("Common password");
        suggestions.push("Avoid common passwords");
    }

    // Bonus for strong mix
    if (
        pwd.length >= 12 &&
        /[A-Z]/.test(pwd) &&
        /[a-z]/.test(pwd) &&
        /\d/.test(pwd) &&
        /[!@#$%^&*()_+\-=]/.test(pwd)
    ) {
        score += 10;
    }

    // Limit score between 0 and 100
    score = Math.max(0, Math.min(score, 100));

    const isValid = score >= 70;

    return {
        isValid,
        score,
        errors,
        suggestions
    };
};

const conpwd=document.getElementById("confirmpwd");
conpwd.addEventListener("blur",() => confirmpwd_check());


const confirmpwd_check = () =>{
    const pwd_user=document.getElementById("password").value;
    const confirmpwd_user=document.getElementById("confirmpwd").value;

    if(pwd_user === confirmpwd_user){
        document.getElementById("valid_confirmpwd").innerHTML="Password is matched";
        document.getElementById("invalid_confirmpwd").innerHTML = "";
        isConfirmValid=true;
    }else{
        document.getElementById("invalid_confirmpwd").innerHTML="Password is not matched";
        document.getElementById("valid_confirmpwd").innerHTML = "";
        isConfirmValid=false;
    }
    checkFormValidity();
};

const checkFormValidity = () =>{
    const submitbtn=document.getElementById("submitBtn");
    if(isUserValid && isEmailValid && isPasswordValid && isConfirmValid){
        submitbtn.disabled=false;
    }else{
        submitbtn.disabled=true;
    }
};