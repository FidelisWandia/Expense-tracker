
//DOM
const addBtn = document.getElementById("add-btn")
let inputName = document.getElementById("input-name")
let inputDate = document.getElementById("input-date")
let inputAmt = document.getElementById("input-amt")
let table = document.getElementById("myTable")

//Add expense btn
addBtn.addEventListener("click", function(){
    let expenseRow = table.insertRow(1)
    let cellName = expenseRow.insertCell(0)
    let cellDate = expenseRow.insertCell(1)
    let cellAmount = expenseRow.insertCell(2)
    cellName.innerHTML = inputName.value 
    cellDate.innerHTML = inputDate.value 
    cellAmount.innerHTML = inputAmt.value
})











