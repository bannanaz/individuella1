
function myFunction() {
  var elmnt = document.getElementById("myDIV");
  var x = elmnt.scrollLeft;
}

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const emailError = document.querySelector('#email + span.error');
const fnameError = document.querySelector('#fname + span.error');
const lnameError = document.querySelector('#lname + span.error');


form.addEventListener('submit', function (event) {
// if the email field is valid, we let the form submit

if(!email.validity.valid || fname.validity.valueMissing || lname.validity.valueMissing)
 {
  // If it isn't, we display an appropriate error message
  showError();
  // Then we prevent the form from being sent by canceling the event
  event.preventDefault();
}

});

function showError() {
if(email.validity.valueMissing) {
  // If the field is empty
  // display the following error message.
  emailError.textContent = 'Vänligen ange din e-postadress.';
  // Set the styling appropriately
  emailError.className = 'error active';
} else if(email.validity.typeMismatch) {
  // If the field doesn't contain an email address
  // display the following error message.
  emailError.textContent = 'Vänligen ange en giltig e-postadress.';
  // Set the styling appropriately
  emailError.className = 'error active';
}


if(fname.validity.valueMissing) {
  // If the field is empty
  // display the following error message.
  fnameError.textContent = 'Vänligen ange ditt förnamn.';
  // Set the styling appropriately
  fnameError.className = 'error active';
}

if(lname.validity.valueMissing) {
  // If the field is empty
  // display the following error message.
  lnameError.textContent = 'Vänligen ange ditt efternamn.';
  // Set the styling appropriately
  lnameError.className = 'error active';
}

}


