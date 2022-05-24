function validate() {
  var userName = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  checkusername(userName);
  checkemail(email);
  checkpassword(password);
  checkconfirmpassword( password,confirmpassword);
}
function checkusername(userName) {
  if (userName.length > 7) {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("errorusername").innerHTML = "";
  } else {
    document.getElementById("errorusername").innerHTML = "User Name must be 8 letters long";
    document.getElementById("username").classList.add("error");
  }
}

function checkemail(email) {
    if (email.length > 7 && email.includes('@gmail.com')) {
        document.getElementById("email").classList.add("success");
        document.getElementById("email").classList.replace("error", "success");
        document.getElementById("erroremail").innerHTML = "";
    } else {
        document.getElementById("erroremail").innerHTML = "Email must include @gmail.com ,8 letters long";
        document.getElementById("email").classList.add("error");
    } 
}
function checkpassword(password) {
    if (password.length > 7 && password.includes('.')){
      document.getElementById("password").classList.add("success");
      document.getElementById("password").classList.replace("error", "success");
      document.getElementById("errorpassword").innerHTML = "";
    } else {
      document.getElementById("errorpassword").innerHTML = "User Name must be 8 letters long and should include '.' ";
      document.getElementById("password").classList.add("error");
    }

}
function checkconfirmpassword(password , confirmpassword) {
    if(password==confirmpassword && password.length>0){
        document.getElementById("confirmpassword").classList.add("success");
        document.getElementById("confirmpassword").classList.replace("error", "success");
        document.getElementById("errorconfirmpassword").innerHTML = "";
    }
    else{
        document.getElementById("errorconfirmpassword").innerHTML = "Passord not Matched";
        document.getElementById("confirmpassword").classList.add("error");
    }
}
