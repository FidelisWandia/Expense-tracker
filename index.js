let expenseArr = []
let tableArr=[]
//DOM
const addBtn = document.getElementById("add-btn")
let inputName = document.getElementById("input-name")
let inputDate = document.getElementById("input-date")
let inputAmt = document.getElementById("input-amt")
//let cells = document.querySelectorAll("table tr td:nth-child(2)")
let expenseRaw = document.getElementById("expense-raw")
console.log(expenseRaw)

//Add expense btn
addBtn.addEventListener("click", function(){
    expenseArr.push(inputName.value)
    expenseArr.push(inputDate.value)
    expenseArr.push(inputAmt.value)
    let listItems=""
for (let i = 0; i < expenseArr.length; i++){
    listItems=`<td>${expenseArr[i]}</td>`
}
listItems.innerHTML=listItems

})

/*for(let i = 0; i < cells.length; i++){
    cells[i].innerHTML = expenseArr
}*/

/*let listItems=""
for (let i = 0; i < expenseArr.length; i++){
    listItems=`<td>${expenseArr[i]}</td>`
}
listItems.innerHTML=listItems*/  













