let isUserValid=false;
let isEmailValid=false;
let isPasswordValid=false;
let isConfirmValid=false;
const button=document.getElementById("username");
button.addEventListener("blur",() =>user_name());

const user_name = () =>{

    const user=document.getElementById("username").value;

    const user_val=/^[a-zA-Z0-9]{3,15}$/;

    if(user_val.test(user)){
       document.getElementById("valid_user").innerHTML=`Username is valid`;
       document.getElementById("invalid_user").innerHTML = "";
       isUserValid=true;
    }else{
       document.getElementById("invalid_user").innerHTML=`Username is invalid`;
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
        document.getElementById("valid_email").innerHTML=`Email is valid`;
        document.getElementById("invalid_email").innerHTML = "";
        isEmailValid=true;
    }else{
        document.getElementById("invalid_email").innerHTML=`Email is invalid`;
        document.getElementById("valid_email").innerHTML = "";
        isEmailValid=false;
    }
    checkFormValidity();
};

const con=document.getElementById("password");
con.addEventListener("blur",() => password_check());

const password_check = () =>{
    const password_user=document.getElementById("password").value;

    const password_reg=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,}$/;

    if(password_reg.test(password_user)){
        document.getElementById("valid_password").innerHTML=`Password is valid`;
        document.getElementById("invalid_password").innerHTML = "";
        isPasswordValid=true;
    }else{
        document.getElementById("invalid_password").innerHTML=`Password is invalid`;
        document.getElementById("valid_password").innerHTML = "";
        isPasswordValid=false;
    }
    checkFormValidity();
};

const conpwd=document.getElementById("confirmpwd");
conpwd.addEventListener("blur",() => confirmpwd_check());

const confirmpwd_check =() =>{
    const pwd_user=document.getElementById("password").value;
    const confirmpwd_user=document.getElementById("confirmpwd").value;

    if(pwd_user === confirmpwd_user){
        document.getElementById("valid_confirmpwd").innerHTML=`Password is matched`;
        document.getElementById("invalid_confirmpwd").innerHTML = "";
        isConfirmValid=true;
    }else{
        document.getElementById("invalid_confirmpwd").innerHTML=`Password is not matched`;
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