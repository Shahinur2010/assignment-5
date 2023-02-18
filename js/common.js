
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

// common function to display result
function displayData(id, result) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${id}</td>
      <td>${result}</td>
      <td>
      <button class="btn btn-sm btn-blue-500">Convert-to-m2</button>
      </td>
    `;
    container.appendChild(tr);
  }