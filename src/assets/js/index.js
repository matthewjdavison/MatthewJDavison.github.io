const navToggle = document.querySelector('.navigation-button');
const openClass = 'nav-open';
navToggle.addEventListener('click', (e) => {
    document.body.classList.toggle(openClass);
})

const homeButton = document.querySelector('#nav__home');
homeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.scroll({top: 0, behavior: 'smooth'});    
})

// ====================================================== //
// ======================== Form ======================== //
// ====================================================== //

const form = document.querySelector('.contact__form')
const nameField = form.querySelector('.contact__name');
const emailField = form.querySelector('.contact__email');
const subjectField = form.querySelector('.contact__subject');
const messageField = form.querySelector('.contact__message');
const submitButton = form.querySelector('.contact__submit');


function fieldTouched(e) {
    const formElement = e.children[0];
    const errorMessage = e.children[1];
    let errorMessageText = "Invalid: ";
    formElement.classList.add('touched');
    if(!formElement.checkValidity()){
        errorMessage.style.color = 'red';
        formElement.style.borderColor='red';
        
        console.log(formElement.style);
        // console.log(formElement.validity);

                 
            if (formElement.validity.badInput == true) {
                errorMessageText += "Bad input. "
            }
            else if (formElement.validity.customError == true) {
                errorMessageText += "Custom Error."
            }
            else if (formElement.validity.patternMismatch == true) {
                errorMessageText += "Failed to meet regex."
            }
            else if (formElement.validity.rangeOverflow == true) {
                errorMessageText += "Range Overflow. "
            }
            else if (formElement.validity.rangeUnderflow == true) {
                errorMessageText += "Range Underflow."
            }
            else if (formElement.validity.stepMismatch == true) {
                errorMessageText += "Step Mismatch. "
            }
            else if (formElement.validity.tooLong == true) {
                errorMessageText += "Too Long. "
            }
            else if (formElement.validity.tooShort == true) {
                errorMessageText += "Too Short. "
            }
            else if (formElement.validity.typeMismatch == true && formElement.type == 'email') {
                errorMessageText += "Please enter a valid email address"
            }      
            else if (formElement.validity.typeMismatch == true && formElement.type == 'text') {
                errorMessageText += "Please enter text."
            }      
            else if (formElement.validity.valueMissing == true) {
                errorMessageText += "Please fill in the field."
            }    

        console.log(formElement.validity);
        errorMessage.innerHTML = errorMessageText;
        errorMessage.style.visibility = 'visible';
    }
    // console.log(formElement);
}
const fields = [nameField, emailField, subjectField, messageField];
fields.forEach(e => {
    e.children[0].addEventListener('change', _ => fieldTouched(e));
})

submitButton.addEventListener('click', (e) => {
    fields.forEach(e => fieldTouched(e))
})

