function createTable() {
    let table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear existing table

    let rn = prompt("Input number of rows", 3);
    let cn = prompt("Input number of columns", 3);

    rn = parseInt(rn);
    cn = parseInt(cn);

    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}