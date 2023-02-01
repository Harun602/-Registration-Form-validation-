function checkFirstName(){
  var firstName = $('#firstName').val();
  var regex = /^[a-zA-Z ]{2,15}$/;
  // if(firstName.length >=2 && firstName.length <= 15)
  if(regex.test(firstName)) {
    $('#firstNameError').text(' ');
    return true;
  }else{
    $('#firstNameError').text('First name must be in 2-15 char.');
    return false;
  }
}
$('#firstName').keyup(function(){
  checkFirstName();
});

function checkLastName(){
  var lastName = $('#lastName').val();
  var regex = /^[a-zA-Z ]{2,15}$/;
  if(regex.test(lastName)) {
    $('#lastNameError').text(' ');
    return true;
  }else{
    $('#lastNameError').text('Last name must be in 2-15 char.');
    return false;
  }
}
$('#lastName').keyup(function(){
  checkLastName();
});

function checkEmail() { 
  var emailValue = $('#email').val();
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(regex.test(emailValue)) {
    $('#emailError').text(' ');
    return true;
  }else{
    $('#emailError').text('Email address is not valid.');
    return false;
  } 
}
$('#email').keyup(function() {
  checkEmail();
});

$('#showHide').click(function() {
  // var status = $(this).prop('checked')
  // console.log(status);
  if($(this).prop('checked')){
    $('#password').attr('type', 'text');
  }
  else
  {
    $('#password').attr('type', 'password');
  }
});

function checkConfirmPassword(){
  var password =  $('#password').val();
  var confirmPassword =  $('#confirmPassword').val();
  if(password == confirmPassword){
    $('#confirmPasswordError').text('');
    return true;
  }
  else
  {
    $('#confirmPasswordError').text('Sorry .. Password & confirm password are not Same.');
    return false;
  } 
}
$('#confirmPassword').keyup(function(){
  checkConfirmPassword();
});

function checkPhoneNumber() {
  var phoneNumber = $('#phoneNumber').val();
  var regExp = /^\+?(88)?0?1[3456789][0-9]{8}\b/g
  if(regExp.test(phoneNumber)){
    $('#phoneNumberError').text(' ');
    return true;
  }else{
    $('#phoneNumberError').text('Sorry..Phone number format is invalid.');
    return false;
  }
}
$('#phoneNumber').keyup(function(){
  checkPhoneNumber();
});

function checkDistrict() {
  var districtName = $('#districtName').val();
  if(districtName == null){
    $('#districtNameError').text('Sorry..District Name is invalid.');
    return false;
    
  }else{
    $('#districtNameError'),text('');
    return true;
  }
}

function checkGender() {
  var gender = $('input[name="gender"]:checked').val();
  if(gender == null){
    $('#genderError').text(' Sorry..Please select your gender info.');
    return false;
    
  }else{
    $('#genderError').text(' ');
    return true;
  }
}


$('#registrationForm').submit(function (){
  if(checkFirstName() && checkLastName() && checkEmail() && checkConfirmPassword() && checkPhoneNumber() && checkDistrict() && checkGender())
  {
    return true;
  }
  else
  {
    return false;
  }
});