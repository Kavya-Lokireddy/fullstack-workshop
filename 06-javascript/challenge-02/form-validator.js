let isUserValid=false;
let isEmailValid=false;
let isPasswordValid=false;
let isConfirmValid=false;
let button=document.getElementById("username");
button.addEventListener("blur",user_name);

function user_name(){

    let user=document.getElementById("username").value;

    let user_val=/^[a-zA-Z0-9]{3,15}$/;

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
}

let email=document.getElementById("email");
email.addEventListener("blur",email_validate);

function email_validate(){
    let email_user=document.getElementById("email").value;

    let email_reg=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
}

let con=document.getElementById("password");
con.addEventListener("blur",password_check);

let conpwd=document.getElementById("confirmpwd");
conpwd.addEventListener("blur",confirmpwd_check);

function password_check(){
    let password_user=document.getElementById("password").value;

    let password_reg=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,}$/;

    if(password_reg.test(password_user)){
        document.getElementById("valid_password").innerHTML="Password is valid";
        document.getElementById("invalid_password").innerHTML = "";
        isPasswordValid=true;
    }else{
        document.getElementById("invalid_password").innerHTML="Password is invalid";
        document.getElementById("valid_password").innerHTML = "";
        isPasswordValid=false;
    }
    checkFormValidity();
}

function confirmpwd_check(){
    let pwd_user=document.getElementById("password").value;
    let confirmpwd_user=document.getElementById("confirmpwd").value;

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
}

function checkFormValidity(){
    const submitbtn=document.getElementById("submitBtn");
    if(isUserValid && isEmailValid && isPasswordValid && isConfirmValid){
        submitbtn.disabled=false;
    }else{
        submitbtn.disabled=true;
    }
}