"use strict";
console.log("Expense Tracker Web-App");

var row = null

function Submit() {
    var formData = enterData();
    var readFormData = readData(formData);
    if (row == null) {
        insertData(readFormData);
    }
    else {
        update()
    }
    remove()
}

function enterData() {
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;

    var arr = [amount, description, category];
    return (arr);
}

function readData(formData) {
    var a = localStorage.setItem("Amount", formData[0]);
    var d = localStorage.setItem("Description", formData[1]);
    var c = localStorage.setItem("Category", formData[2]);

    var a1 = localStorage.getItem("Amount", a);
    var d1 = localStorage.getItem("Description", d);
    var c1 = localStorage.getItem("Category", c);

    var arr = [a1, d1, c1];
    return (arr);
}

function insertData(readFormData) {
    var row = table.insertRow();

    row.insertCell(0).innerHTML = readFormData[0];
    row.insertCell(1).innerHTML = readFormData[1];
    row.insertCell(2).innerHTML = readFormData[2];

    row.insertCell(3).innerHTML = `<button type="button" onclick=edit(this) class="btn btn-sm btn-warning">Edit</button> 
                                    <button type="button" onclick=remove(this) class="btn btn-sm btn-danger">Delete</button>`;


}

function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("amount").value = row.cells[0].innerHTML;
    document.getElementById("description").value = row.cells[1].innerHTML;
    document.getElementById("category").value = row.cells[2].innerHTML;
}

function update() {
    row.cells[0].innerHTML = document.getElementById("amount").value;
    row.cells[1].innerHTML = document.getElementById("description").value;
    row.cells[2].innerHTML = document.getElementById("category").value;
    row = null
}

function remove(td) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
}