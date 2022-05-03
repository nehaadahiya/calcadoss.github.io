// navbar 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// for closing or opening of navbar on clicking the icon
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}








function validation(){
    var username = document.getElementById('exampleInputName').ariaValueMax;
    var email = document.getElementById('exampleInputEmail').value;
    var number = document.getElementById('exampleInputNumber').value;
    var password = document.getElementById('exampleInputPasssword1').value;
    var cpassword = document.getElementById('exampleInputPassword2').value;
    
    var usercheck = /^[A-Za-z ]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if (usercheck.test(username)){
        document.getElementById('errorname').innerHTML=" ";

    }
    else{
        document.getElementById('errorname').innerHTML = "Please use only alphabets";
        return false;
    }


    if (emailcheck.test(email)){
        document.getElementById('erroremail').innerHTML=" ";

    }
    else{
        document.getElementById('erroremail').innerHTML = "Please follow valid email syntax";
        return false;
    }


    if (numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML=" ";d

    }
    else{
        document.getElementById('errornumber').innerHTML = "Invalid number";
        return false;
    }


    if (passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML=" ";

    }
    else{
        document.getElementById('errorpassword').innerHTML = "Please use a alphabet, numeric, special character";
        return false;
    }
    
    if (cpassword.match( password)){
        document.getElementById('errorcpassword').innerHTML=" ";

    }
    else{
        document.getElementById('errorcpassword').innerHTML = "Password is not matching";
        return false;
    }
}
