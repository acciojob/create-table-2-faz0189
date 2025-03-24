function createTable() {
    const table = document.getElementById("myTable")
   table.innerHTML = "";

	let row = prompt('enter the correct numbers',2);
	let cell = prompt ('enter the correct numbers',2);

	row = parseInt(row);
	cell = parseInt(cell);

	if(isNaN(row)|| isNaN(cell)||row<=0||cell<=0){
		
		alert ("Input number of rows")
		retrun;
	}

	for (let p=0; p<row; p++){
		let newRow = table.insertRow();
		for (let r=0; r<cell; r++){
			let newCell = row.insertCell()
			cell.textContent = `Row${i}, Cell${j}`;
		}
	}

	
	
	
  
}
