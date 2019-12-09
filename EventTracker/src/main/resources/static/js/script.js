window.addEventListener('load', function(event) {
	event.preventDefault();
	console.log('document in Init All');
	getFastAll();

});

document.addFastForm.create.addEventListener('click', function(event) {
	event.preventDefault();
	console.log("start")
	addNewFast();

});

function addNewFast() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8089/api/fasts', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var fastObject = JSON.parse(xhr.responseText);
				console.log(fastObject);
				displayFast(fastObject);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var form = document.addFastForm;
	var newFastObject = {
		date : form.date.value,
		startFast : 12450000,
		endFast : 000000,
		calories : 3000
	};

	var newFastJsonString = JSON.stringify(newFastObject);
	console.log(newFastJsonString);

	xhr.send(newFastJsonString);

}

function getFastAll() {
	console.log('document in getFast ALl');

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'http://localhost:8089/api/fasts', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var fasts = JSON.parse(xhr.responseText);
			displayFast(fasts);

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);

		}
	};

	xhr.send(null);

}

function displayFast(fast) {

	console.log("in dsplay length");

	fast.forEach(function(e) {

		let tableBody = document.querySelector('tbody');

		let tableRow = document.createElement('tr');
		
		
		tableRow.addEventListener('click', function(event) {
			
			event.preventDefault();
			var fastIdDelete = e.id;
			editFunction(e);
			

		});

//		let deleteButton = document.getElementById('delete');

		let tableDataID = document.createElement('td');
		let tableDataDate = document.createElement('td');
		let tableDataStart = document.createElement('td');
		let tableDataEnd = document.createElement('td');
		let tableDataCalories = document.createElement('td');
		let tableDataLength = document.createElement('td');
		let tableDataDelete = document.createElement('td');
		let tableDataEdit = document.createElement('td');

		tableDataID.textContent = e.id;
		tableDataDate.textContent = e.date;
		tableDataStart.textContent = e.startFast;
		tableDataEnd.textContent = e.endFast;
		tableDataCalories.textContent = e.calories;

	
		//
		// tableDataDelete.innerHTML = `
		//		
		// <button id="delete" name="deleteIt" class="btn btn-danger
		// value="fastId"
		// value="fastId">Delete</button>
		//
		// `;
		//		
		//
		//			
		//		
		// tableDataEdit.innerHTML = `
		// <button id="edit" class="btn btn-info" value="fastId">Edit</button>
		//		
		// `;

		tableBody.appendChild(tableRow);
		tableRow.appendChild(tableDataID);
		tableRow.appendChild(tableDataDate);
		tableRow.appendChild(tableDataStart);
		tableRow.appendChild(tableDataEnd);
		tableRow.appendChild(tableDataCalories);
		tableRow.appendChild(tableDataDelete);
		tableRow.appendChild(tableDataEdit);

		
	
	})
	

}



function myFunction() {
	  var fastId = prompt("Please enter the fast ID");
	  
	  if (fastId != null ) {
		  deleteRow(fastId)
	  }
	  else window.prompt("Please enter a valid ID")
	  
	}

function editFunction(e) {
	
//	  var fastId = prompt("Fast Number: " + e.id);
	  var Data = prompt("This\nis\nmultiline");
	  
	  
	  
	  
	  
//	  if (fastId != null ) {
//		  deleteRow(fastId)
//	  }
//	  else window.prompt("Please enter a valid ID")
	  
	}



function deleteRow(fastId) {
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://localhost:8089/api/fasts/' + fastId, true);
	xhr.setRequestHeader("Content-type", "application/json"); 

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				
				var data = JSON.parse(xhr.responseText);
			} else {
				console.log("DELETE request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	
	


	xhr.send(null);
}
