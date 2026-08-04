function addToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}

function clearStorage() {
    localStorage.clear();
}

let saveButton = document.querySelector('.save-button');
let modalDiv = document.querySelector('.modal-div');

let inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        modalDiv.classList.add('modalAfter');    
saveButton.addEventListener('click', function() {
    let table = document.querySelector('table');
    let rows = table.querySelectorAll('tr');
    let data = [];
    rows.forEach(row => {
        let rowData = [];
        let cells = row.querySelectorAll('td, th');
        cells.forEach(cell => {
            let input2 = cell.querySelector('input');
            if (input2) {
              input.value = document.querySelector('.modal-input').value;
              rowData.push(input2.value);
            }
        });
        data.push(rowData);
    });
    modalDiv.classList.remove('modalAfter');
    addToStorage('tableData', data);
    });
  });
});

window.addEventListener('load', function() {
    let savedData = getFromStorage('tableData');
    if (savedData) {
        let table = document.querySelector('table');
        let rows = table.querySelectorAll('tr');
        rows.forEach((row, rowIndex) => {
            let cells = row.querySelectorAll('td, th');
             cells.forEach((cell, cellIndex) => {
                let input = cell.querySelector('input');
                if (input && savedData[rowIndex] && savedData[rowIndex][cellIndex] !== undefined) {
                    input.value = savedData[rowIndex][cellIndex];
                }
            });
        });
    }
});

let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', function() {
    removeFromStorage('tableData');
    clearStorage();
    let table = document.querySelector('table');
    let rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        let cells = row.querySelectorAll('td, th');
        cells.forEach(cell => {
            let input = cell.querySelector('input');
            if (input) {
                input.value = '';
            }
        });
    });
});



let cancelButton = document.querySelector('.cancel-button');
cancelButton.addEventListener('click', () => {
  document.querySelector('.modal-div').classList.remove('modalAfter');
});

