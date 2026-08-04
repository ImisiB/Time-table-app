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
  for (let i = 0; i < 97; i++) {
    cells.forEach(cell => {
      cell.setAttribute("cell", `${i}`);
      cell.innerText = localStorage.getItem(`cell-${i}`);
    });
    // let cell = document.createElement("td");
    // cells[i].innerText = localStorage.getItem(`cell-${i}`);
    // console.log("cell id", cells[i].getAttribute("cell"), "cell value", cells[i].innerHTML);

    cells[i].addEventListener("click", () => {
      document.querySelector(".modal-div").classList.add("modalAfter");
      modalInput = document.querySelector(".modal-input");
      modalInput.value = localStorage.getItem(`cell-${i}`);
    });




    let saveButton = document.querySelector(".save-button");
    saveButton.addEventListener("click", () => {
      document.querySelector(".modal-div").classList.remove("modalAfter");
      modalInput = document.querySelector(".modal-input");
      localStorage.setItem(`cell-${cells[i].getAttribute("table-id")}`, modalInput.value);
      cells[i].innerText = localStorage.getItem(`cell-${cells[i].getAttribute("table-id")}`) || `cell-${i}`;

    });
    window.addEventListener('load', () => {
      localStorage.getItem(`cell${i}`) = cells[i].innerText;
    })
}

let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".modal-div").classList.add("modalAfter");
  });
});

// let saveButton = document.querySelector(".save-button");
// saveButton.addEventListener("click", () => {
//   document.querySelector(".modal-div").classList.remove("modalAfter");
//   modalInput = document.querySelector(".modal-input");
//   localStorage.setItem("cell-96", modalInput.value);
// });
let cancelButton = document.querySelector(".cancel-button");
cancelButton.addEventListener("click", () => {
  document.querySelector(".modal-div").classList.remove("modalAfter");
});
