const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length')
console.dir(input)
console.dir(inputLength)

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    let currentValue = event.currentTarget.value.length
    
    if (currentValue === Number(inputLength)) {
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
    }
  
}