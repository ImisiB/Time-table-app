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

let cell = document.querySelectorAll("td");
  for (let i = 0; i < 97; i++) {
    let cell = document.createElement("td");
    cell.setAttribute("table-id", `id${i}`);
    console.log(cell.getAttribute("table-id"));
    cell.innerText = localStorage.getItem(`cell-${i}`);
    cell.value = localStorage.getItem(`cell-${i}`);
    console.log("cell id", cell.getAttribute("table-id"), "cell value", cell.value);

    cell.addEventListener("click", () => {
      document.querySelector(".modal-div").classList.add("modalAfter");
      modalInput = document.querySelector(".modal-input");
      modalInput.value = localStorage.getItem(`cell-${i}`);
    });



    let saveButton = document.querySelector(".save-button");
    saveButton.addEventListener("click", () => {
      document.querySelector(".modal-div").classList.remove("modalAfter");
      modalInput = document.querySelector(".modal-input");
      localStorage.setItem(`cell-${i}`, modalInput.value);
    });

    cell.value = localStorage.getItem(`cell-${i}`);
    cell.innerText = localStorage.getItem(`cell-${i}`);

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

window.addEventListener('load', () => {
  localStorage.getItem("cell-96") === "saved"
})

