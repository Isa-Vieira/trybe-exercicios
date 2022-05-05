function handleSubmit(event){
event.preventDefaul();
}

window.onload = function(){
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
}

function clearfield(){
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for(let index = 0; index < formElements.length; index += 1){
        const userInput = formElements[index];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
} 

window.onload = function(){
    const clearBtn = document.querySelector('#clear-btn');
    clearfield.addEventListener('click', clearfield);
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
}