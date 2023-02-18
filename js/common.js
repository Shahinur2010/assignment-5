
function input(inputId) {
    const inputItem = document.getElementById(inputId);
    const inputFieldString = inputItem.value;
    const inputField = parseInt(inputFieldString);
    return inputField;
}

function get(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);
    return elementValue;  
}

function set(id, value){
    const setDataField = document.getElementById(id);
    setDataField.innerText = value;
}

function setInput(id, number){
    const setDataField = document.getElementById(id);
    setDataField.value = number;
}