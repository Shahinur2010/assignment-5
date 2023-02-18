// common function to display data
function displayData(id, result) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${id}</td>
      <td>${result}</td>
      <td>
      <button class="btn btn-md bg-blue-500 text-white case normal-case font-semibold">Convert to m<sup>2</sup></button>
      </td>
    `;
    container.appendChild(tr);
  }

//   common function to get data
function get(id1) {
    const firstData = document.getElementById(id1).innerText;
    return firstData;
}

function getId(id2) {
    const secondData = document.getElementById(id2).innerText;
    return secondData;
}