const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSumbit)

function onFormSumbit(event) {
    event.preventDefault();
    
    
    const formElements = event.currentTarget.elements;
console.log(formElements)
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
    password}
    console.log(formData)
    if (!email.length || !password.length) {
    alert('Всі поля необхідно заповнити')}
    event.target.reset()

}

