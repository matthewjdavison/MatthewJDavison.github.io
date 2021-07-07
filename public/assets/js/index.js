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

const form = document.querySelector('.contact-form')
const nameField = form.querySelector('.form-name').children[0];
const emailField = form.querySelector('.form-email').children[0];
const subjectField = form.querySelector('.form-subject').children[0];
const messageField = form.querySelector('.form-message').children[0];
const submitButton = form.querySelector('.form-submit')

console.log(form);
console.log(nameField);
console.log(emailField);
console.log(subjectField);
console.log(messageField);
console.log(submitButton);

function fieldTouched(e) {
    e.classList.add('touched');
}
const fields = [nameField, emailField, subjectField, messageField];
// nameField.addEventListener('change', e => fieldTouched(e));
// emailField.addEventListener('change', e => fieldTouched(e));
// subjectField.addEventListener('change', e => fieldTouched(e));
// messageField.addEventListener('change', e => fieldTouched(e));
fields.forEach(e => {
    e.addEventListener('change', _ => fieldTouched(e));
})

submitButton.addEventListener('click', (e) => {
    fields.forEach(e => fieldTouched(e))
})

