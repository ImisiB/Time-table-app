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
let clearModal = document.querySelector('.clearModal-div')
let yesButton = document.querySelector('.yesButton')
let noButton = document.querySelector('.noButton')

clearButton.addEventListener('click',() => {
  clearModal.classList.add('clearModalAfter')
  yesButton.addEventListener('click', () => {
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
    localStorage.setItem('cell-0', '6:00am - 7:00am')
    localStorage.setItem('cell-8', '7:00am - 8:00am')
    localStorage.setItem('cell-16', '8:00am - 9:00am')
    localStorage.setItem('cell-24', '9:00am - 10:00am')
    localStorage.setItem('cell-32', '10:00am - 11:00am')
    localStorage.setItem('cell-40', '11:00am - 12:00pm')
    localStorage.setItem('cell-48', '12:00pm - 1:00pm')
    localStorage.setItem('cell-56', '1:00pm - 2:00pm')
    localStorage.setItem('cell-64', '2:00pm - 3:00pm')
    localStorage.setItem('cell-72', '3:00pm - 4:00pm')
    localStorage.setItem('cell-80', '4:00pm - 5:00pm')
    localStorage.setItem('cell-88', '5:00pm - 6:00pm')

    clearModal.classList.remove("clearModalAfter");
  })
  noButton.addEventListener('click', () => {
    clearModal.classList.remove("clearModalAfter");
  })
});


let saveButton = document.querySelector(".save-button");
let modalDiv = document.querySelector('.modal-div')
let modalInput = document.querySelector(".modal-input");
let modalInput2 = document.querySelector(".modal-input2");
let activeCellIndex = null;

cells.forEach((cell, index) => {
  cell.setAttribute('index', index)

  let btn = cell.querySelector('.button')

  let savedValue = localStorage.getItem(`cell-${index}`) || ''

  btn.innerText = savedValue

  
  btn.addEventListener('click', () => {
    let indexArray = [0,8,16,24,32,40,48,56,64,72,80,88,96]
    activeCellIndex = index;
    modalInput2.value = localStorage.getItem(`cell-${index}`)
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
localStorage.setItem('cell-24', '9:00am - 10:00am')
localStorage.setItem('cell-32', '10:00am - 11:00am')
localStorage.setItem('cell-40', '11:00am - 12:00pm')
localStorage.setItem('cell-48', '12:00pm - 1:00pm')
localStorage.setItem('cell-56', '1:00pm - 2:00pm')
localStorage.setItem('cell-64', '2:00pm - 3:00pm')
localStorage.setItem('cell-72', '3:00pm - 4:00pm')
localStorage.setItem('cell-80', '4:00pm - 5:00pm')
localStorage.setItem('cell-88', '5:00pm - 6:00pm')


saveButton.addEventListener("click", () => {
  if(activeCellIndex != null) {
    let newValue = modalInput.value
    if(modalInput2.value !== '') {
      newValue += ', by: ' + modalInput2.value
    }

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
  localStorage.setItem('cell-24', '9:00am - 10:00am')
  localStorage.setItem('cell-32', '10:00am - 11:00am')
  localStorage.setItem('cell-40', '11:00am - 12:00pm')
  localStorage.setItem('cell-48', '12:00pm - 1:00pm')
  localStorage.setItem('cell-56', '1:00pm - 2:00pm')
  localStorage.setItem('cell-64', '2:00pm - 3:00pm')
  localStorage.setItem('cell-72', '3:00pm - 4:00pm')
  localStorage.setItem('cell-80', '4:00pm - 5:00pm')
  localStorage.setItem('cell-88', '5:00pm - 6:00pm')
})