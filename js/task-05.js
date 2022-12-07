const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
const defSpanTextContent = span.textContent

function onInputChange(event) {
    console.log(event.currentTarget.value);
    console.dir(span.textContent)
    span.textContent = event.currentTarget.value;
     if (!event.currentTarget.value) {
         span.textContent = defSpanTextContent;
}
    
}
