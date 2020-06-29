
function getAPIdata() {

	// get latest weather
	fetch('https://api.openweathermap.org/data/2.5/forecast?q=the%20Hague,nl&appid=0102d96986e6724c3b795225b5f8bd4d')

	
	// parse to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {

		// render weatherCondition
		onAPISucces(response);
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}

function onAPISucces(response) {

	// get all temps (now)
	var now = response.list[0].main;

	//console.log(now);

	// get type of weather in string format
	var type = response.list[0].weather[0].main

	//console.log(response.list[0]);

	// get Celcius
	var degC = Math.floor(now.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('lz1');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


// init data stream
getAPIdata();
