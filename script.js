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
    if (cell.getAttribute('index') === '0') {
      return;
    } else if (cell.getAttribute('index') === '8') {
      return
    } else if (cell.getAttribute('index') === '16') {
      return
    } else if (cell.getAttribute('index') === '24') {
      return
    } else if (cell.getAttribute('index') === '32') {
      return
    } else if (cell.getAttribute('index') === '40') {
      return
    } else if (cell.getAttribute('index') === '48') {
      return
    } else if (cell.getAttribute('index') === '56') {
      return
    } else if (cell.getAttribute('index') === '64') {
      return
    } else if (cell.getAttribute('index') === '72') {
      return
    } else if (cell.getAttribute('index') === '80') {
      return
    } else if (cell.getAttribute('index') === '88') {
      return
    } else if (cell.getAttribute('index') === '96') {
      return
    } else {
      cell.querySelector('button').innerText = '';
    };})
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
    let indexArray = [0,8,16,24,32,40,48,56,64,72,80,88,96]
    activeCellIndex = index;
    modalInput.value = localStorage.getItem(`cell-${index}`) || ''
    modalDiv.classList.add('modalAfter')
    
    for (let i = 0; i < indexArray.length; i++) {
      const element = indexArray[i];
      
    if (activeCellIndex === element) {
      activeCellIndex = null
      modalDiv.classList.remove('modalAfter')
      console.log('clicked');
    }}
})
});
localStorage.setItem('cell-0', '6:00am - 7:00am')
localStorage.setItem('cell-8', '7:00am - 8:00am')
localStorage.setItem('cell-16', '8:00am - 9:00am')
localStorage.setItem('cell-24', '10:00am - 11:00am')
localStorage.setItem('cell-32', '11:00am - 12:00pm')
localStorage.setItem('cell-40', '12:00pm - 1:00pm')
localStorage.setItem('cell-48', '2:00pm - 3:00pm')
localStorage.setItem('cell-56', '3:00pm - 4:00pm')
localStorage.setItem('cell-64', '5:30pm - :6:00pm')
localStorage.setItem('cell-72', '7:00pm - 8:00pm')
localStorage.setItem('cell-80', '9:00pm - 10:00pm')
localStorage.setItem('cell-88', '10:00pm - 11:00pm')
localStorage.setItem('cell-96', '11:00pm - 12:00pm')



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


window.addEventListener('load', () => {
  localStorage.setItem('cell-0', '6:00am - 7:00am')
localStorage.setItem('cell-8', '7:00am - 8:00am')
localStorage.setItem('cell-16', '8:00am - 9:00am')
localStorage.setItem('cell-24', '10:00am - 11:00am')
localStorage.setItem('cell-32', '11:00am - 12:00pm')
localStorage.setItem('cell-40', '12:00pm - 1:00pm')
localStorage.setItem('cell-48', '2:00pm - 3:00pm')
localStorage.setItem('cell-56', '3:00pm - 4:00pm')
localStorage.setItem('cell-64', '5:30pm - :6:00pm')
localStorage.setItem('cell-72', '7:00pm - 8:00pm')
localStorage.setItem('cell-80', '9:00pm - 10:00pm')
localStorage.setItem('cell-88', '10:00pm - 11:00pm')
localStorage.setItem('cell-96', '11:00pm - 12:00pm')

})