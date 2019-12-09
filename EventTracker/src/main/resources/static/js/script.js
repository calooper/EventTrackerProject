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
	location.reload();

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
		let tableDataDelete = document.createElement('td');
		let button = document.createElement('td');
		let edit = document.createElement('td');
		let edit2 = document.createElement('td');
		
		
		
		 button.innerHTML = `
				
		 <button id="delete" name="deleteIt" class="btn btn-danger
		 value="fastId"
		 value="fastId">Delete</button>
		
		 `;
		 
		 edit.innerHTML = `
			 <button id="edit" class="btn btn-info" value="fastId" data-toggle="collapse" aria-controls="collapseExample" data-target="#collapseExample" >Edit</button>
					
			 `;
		 
		 
		 edit2 = innerHTML = `
		 
		 <div class="collapse" id="collapseExample">
		<div class="mt-3">

			<form name="updateForm">
				<div style="float: left;">

					<input type="date" class="form-control" name="data"
						value="date" placeholder="date"
						required> 
						
						<input type="time" class="form-control"
						name="fastStart" value="fastStart" placeholder="Start Fast Time"> 
						
						<input type="time" class="form-control"
						name="fastEnd" value="fastEnd"
						placeholder="End Fast Time"> 
						
						<input type="number"
						class="form-control" name="calories" value="calories"
						placeholder="Calories"> 
						
						<input type="number" class="form-control"
						name="id" value="id" placeholder="ID" 
						required> 
						
						
				</div>
				<div></div>
				<div class="UpdateButton">
					<br>
					<!-- nbsp for space between buttons -->
					&nbsp
					<button type="submit" name="update" value="e"class="btn btn-warning btn-block"
						>Update</button>
				</div>
			</form>
		</div>
	</div>

		 `
			 
			 
		
		
		button.addEventListener('click', function(event) {
			
			event.preventDefault();
			var fastIdDelete = e.id;
			deleteFunction(e);
			

		});
		 

		

		let tableDataID = document.createElement('td');
		let tableDataDate = document.createElement('td');
		let tableDataStart = document.createElement('td');
		let tableDataEnd = document.createElement('td');
		let tableDataCalories = document.createElement('td');
		let tableDataLength = document.createElement('td');
	

		tableDataID.textContent = e.id;
		tableDataDate.textContent = e.date;
		tableDataStart.textContent = e.startFast;
		tableDataEnd.textContent = e.endFast;
		tableDataCalories.textContent = e.calories;

	

		tableBody.appendChild(tableRow);
		tableRow.appendChild(tableDataID);
		tableRow.appendChild(tableDataDate);
		tableRow.appendChild(tableDataStart);
		tableRow.appendChild(tableDataEnd);
		tableRow.appendChild(tableDataCalories);
		tableRow.appendChild(tableDataDelete);
		tableRow.appendChild(button);
		tableRow.appendChild(edit);
		
	})
	
}


function deleteFunction(e) {
	  confirm("Are you sure you want to delete this fast?");
	  var fastId = e.id;
	  
	  if (fastId != null ) {
		
	  }
		
	  else window.prompt("Please enter a valid ID")
	  
	    deleteRow(fastId)
	  
	}


function editFunction(id) {
	
//	console.log("in edit function " + e)
//	var fastId = e.id;
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'http://localhost:8089/api/fasts/' + id, true);
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

	var form2 = document.addFastForm;
	var newFastObject = {
		date : null,
		startFast : 12450000,
		endFast : 000000,
		calories : 7000
	};

	var newFastJsonString = JSON.stringify(newFastObject);
	console.log(newFastJsonString);

	xhr.send(newFastJsonString);
	location.reload();

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
	location.reload();
}


//updateForm.update.addEventListener('click', function(e) {
//
//console.log("in the update");
//
//event.preventDefault();
//var fastIdDelete = e.id;
//editFunction(e);
//
//
//});
