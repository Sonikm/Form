
// Function will show on sign In page
function signIn(){
  
    let homePage = document.querySelector('.home-page');
    let signInPage = document.querySelector('.signIn-page');

    homePage.style.left = "-1000%"
    signInPage.style.left = "50%";

}

// Function will show on sign Up page
function signUp(){
    let homePage = document.querySelector('.home-page');
    let signUpPage = document.querySelector('.signUp-page');

    homePage.style.left = "-1000%"
    signUpPage.style.left = "50%";
}

// // Function will redirect on sign Up page
function goToSignUp(){
    let signInpage = document.querySelector('.signIn-page');
    signInpage.style.left = "-1000%"
    signUp();
}

 // Function will re-direct on sign In page
 function goToSignIn(){
      
    let signUpPage = document.querySelector('.signUp-page');
    signUpPage.style.left = "-1000%"
    signIn();
}

// This function will validate the form details
function formValidation(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    //  Some required and valid cases
    if(name == ''){
        alert("Name is required");
        return false;
     }
     if(email == ""){
        alert("email is required");
        return false;
     }
     else if(!email.includes('@')){
        alert("Invalid email address");
        return false;
     }
     if(password == ""){
        alert("password is required");
        return false;
     }
     else{
        return true;
     }

}

// Function will show welcome message if form is valied
function welcome1(){
    
    if(formValidation() == true){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        localStorage.setItem('name', name);
        localStorage.setItem('email',email);
        localStorage.setItem('password', password);
    
        window.location.href = 'welcome.html';
    }

}

// Will run after login
function welcome2(){
     let password2 = document.getElementById('password2').value;
     let email2 = document.getElementById('email2').value;

     if(email2 == localStorage.getItem('email') && password2 == localStorage.getItem('password'))
     {
        window.location.href = 'welcome.html';
     }
     else {
        alert('Invalid Email and Password...')
     }
}


// Function to toggle password
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

// Function to toggle password
  const togglePassword2 = document.querySelector('#togglePassword2');
  const password2 = document.querySelector('#password2');

  togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});



