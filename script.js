let tableBody = document.querySelector("tbody");
for (let i = 0; i < 12; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 8; j++) {
    let cell = document.createElement("td");
    let button = document.createElement("button");
    button.classList.add('button')
    cell.appendChild(button);
    row.appendChild(cell);
  }
  tableBody.appendChild(row);
}

let cells = document.querySelectorAll("td");
let clearButton = document.querySelector('.clear')

clearButton.addEventListener('click',() => {
  localStorage.clear();
  cells.forEach((cell) => {
    cell.querySelector('button').innerText = '';
  });
});
let saveButton = document.querySelector(".save-button");
let modalDiv = document.querySelector('.modal-div')
let modalInput = document.querySelector(".modal-input");
let activeCellIndex = null;

cells.forEach((cell, index) => {
  cell.setAttribute('index', index)

  let btn = cell.querySelector('.button')

  let savedValue = localStorage.getItem(`cell-${index}`) || ''

  btn.innerText = savedValue

  
  btn.addEventListener('click', () => {
    activeCellIndex = index;
    modalInput.value = localStorage.getItem(`cell-${index}`) || ''
    modalDiv.classList.add('modalAfter')
  })



});

saveButton.addEventListener("click", () => {
  if(activeCellIndex != null) {
    let newValue = modalInput.value

    localStorage.setItem(`cell-${activeCellIndex}`, newValue)
  
  let activeCell = document.querySelector(`td[index='${activeCellIndex}']`);
  if (activeCell) {
    activeCell.querySelector('.button').innerText = newValue;
  }}

  modalDiv.classList.remove('modalAfter')
  activeCellIndex = null
});
  



let cancelButton = document.querySelector(".cancel-button");
cancelButton.addEventListener("click", () => {
  document.querySelector(".modal-div").classList.remove("modalAfter");
});
