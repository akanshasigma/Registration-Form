/**
 * Created by root on 17/10/20.
 */
// ******************** Registration page coding ***************************

var arr = [];
function register(){

    var email = document.forms['myForm']['email'].value;
    var x = email.indexOf('@');
    var y = email.lastIndexOf('.');

    var firstName =document.getElementById('firstNameId').value;
    var lastName = document.getElementById('lastNameId').value;
    var userName = document.getElementById('userNameId').value;
    var emailAddress = document.getElementById('emailId').value;
    var password = document.getElementById('passwordId').value;
    var password_confirm = document.getElementById('password_confirmation').value;
    var phoneNum = document.getElementById('userPhone').value;
    var dob = document.getElementById('datepicker').value;
    var emailAddress_confirm = document.getElementById('emailId_confirmation').value;

// **********************    form validation    *****************************
    if(firstName == ''){

        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Name';

        return;
    }
    else if(lastName == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Last Name';
        return;
    }
    else if(userName == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your User Name';
        return;
    }
    else if(phoneNum == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Phone Name';
        return;
    }
    else if(dob == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Date of Birth';
        return;
    }
    else if(x < 1 || y < x+2 || y+2 >= email.length){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Email like exapmle@gmail.com';
        return;
    }
    else if(emailAddress_confirm == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your confirmation email';
        return;
    }
    else if(emailAddress_confirm !== emailAddress){
        document.getElementById('formvalidation').innerHTML = 'Email Address does not match';
        return;
    }
    else if(password == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Password';
        return;
    }
    else if(password_confirm == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your confirmation password';
        return;
    }
    else if(password_confirm !== password){
        document.getElementById('formvalidation').innerHTML = 'Password does not match';
        return;
    }
    var objFiled = {
        userFirstName : firstName ,
        UserlastName : lastName ,
        userFullName : userName ,
        userEmailAddress : emailAddress ,
        userPassword : password ,
        userPhone : phoneNum ,
        userDob : dob
    };
    arr.push(objFiled);


//******************localStorage ********************************

    localStorage.setItem( "Registration" , JSON.stringify(arr));
    sweetAlert("Done...", "Registration completed" ,"success");


// *****************empty input field *******************************

    document.getElementById('firstNameId').value = '';
    document.getElementById('lastNameId').value = '';
    document.getElementById('userNameId').value = '';
    document.getElementById('emailId').value = '';
    document.getElementById('passwordId').value = '';
    document.getElementById('password_confirmation').value = '';

}
function cleartxt(){
    document.getElementById('formvalidation').innerHTML = '';
}





//=====================sign In page coding ===============================


function siginpage() {
    var registrationData = localStorage.getItem("Registration");
    var getRegistration =  JSON.parse(registrationData);

    for(var i=0; i<getRegistration.length;i++){

        var login_Email = document.getElementById('login-username').value;
        var login_pass = document.getElementById('login-password').value;

        if(getRegistration[i].userEmailAddress != login_Email || getRegistration[i].userPassword != login_pass){
            sweetAlert("Oops..", "Incorrect username or password", "error");
            return;
        }
        else{
            window.location.href = ('index.html');
        }

    }

}
