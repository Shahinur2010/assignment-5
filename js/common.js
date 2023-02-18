
function input(inputId) {
    const inputItem = document.getElementById(inputId);
    const inputFieldString = inputItem.value;
    const inputField = parseFloat(inputFieldString);
    return inputField;
}

function get(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
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

// common function to display data
function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${nameOfP}</td>
      <td>${priceOfP}</td>
      <td>${quantityOfp}</td>
      <td>${resultP}</td>
      <td>
      <button class="btn btn-sm btn-red-500">Square</button>
      </td>
      
    `;
    container.appendChild(tr);
  }