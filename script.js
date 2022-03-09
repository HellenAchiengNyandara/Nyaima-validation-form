ar email_error=document.getElementById("email_error");
var pass_error=document.getElementById("pass_error");

email.addEventListener("textinput",email_verify)
password.addEventListener("textinput",password_verify)
function validate(){
    if (email.value.length <9){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
}
if (password.value.length <6){
    password.style.border="1px solid red";
    pass_error.style.display="block";
    password.focus();
   
}
function email_verify(){
    if (email.value.length>=8)
    email.style.border="1px solid silver";
    email_error.style.display="none";
    return true
}
function password_verify(){
    if (password.value.length>=8)
    password.style.border="1px solid silver";
    pass_error.style.display="none";
    return true
}
