const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6131081820msh8521dab324509a7p1e8e8cjsn882391985e22',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct//
			temp.innerHTML = response.temp//
			temp2.innerHTML = response.temp//
			feels_like.innerHTML = response.feels_like//
			humidity.innerHTML = response.humidity//
			humidity2.innerHTML = response.humidity//
			min_temp.innerHTML = response.min_temp//
			max_temp.innerHTML = response.max_temp//
			wind_speed.innerHTML = response.wind_speed//
			wind_speed2.innerHTML = response.wind_speed//
			wind_degrees.innerHTML = response.wind_degrees//
			sunrise.innerHTML = response.sunrise//
			sunset.innerHTML = response.sunset//
		})
		.catch(err => console.error(err));
}
submit.addEventListener('click', (e) => {
	e.preventDefault();
	getweather(city.value)
})
getweather("Delhi")

const kolkataWeather = {
	cloud_pct: 0,
	temp: 34,
	feels_like: 35,
	humidity: 38,
	min_temp: 34,
	max_temp: 34,
	wind_speed: 2.06,
	wind_degrees: 360,
	sunrise: 1678580330,
	sunset: 1678623256
};
const BangloreWeather = {
	cloud_pct: 1,
	temp: 33,
	feels_like: 35,
	humidity: 39,
	min_temp: 36,
	max_temp: 35,
	wind_speed: 3.06,
	wind_degrees: 260,
	sunrise: 1678580330,
	sunset: 1678623256
};
const lucknowWeather={
	cloud_pct: 4,
	temp: 38,
	feels_like: 39,
	humidity: 47,
	min_temp: 37,
	max_temp: 35,
	wind_speed: 8.54,
	wind_degrees: 370,
	sunrise: 1678582187,
	sunset: 1678624976
}

const updatekolkataweather = (kolkataWeather) => {
	document.getElementById("kolkata-cloud_pct").textContent = kolkataWeather.cloud_pct;
	document.getElementById("kolkata-feels_like").textContent = kolkataWeather.feels_like;
	document.getElementById("kolkata-humidity").textContent = kolkataWeather.humidity;
	document.getElementById("kolkata-max_temp").textContent = kolkataWeather.max_temp;
	document.getElementById("kolkata-sunrise").textContent = new Date(kolkataWeather.sunrise * 1000).toLocaleTimeString();
	document.getElementById("kolkata-sunset").textContent = new Date(kolkataWeather.sunset * 1000).toLocaleTimeString();
	document.getElementById("kolkata-temp").textContent = kolkataWeather.temp;
	document.getElementById("kolkata-wind-degrees").textContent = kolkataWeather.wind_degrees;
	document.getElementById("kolkata-wind-speed").textContent = kolkataWeather.wind_speed;
	document.getElementById("kolkata-min_temp").textContent = kolkataWeather.min_temp;
}
const updatelucknowweather = (lucknowWeather) => {
	document.getElementById("lucknow-cloud_pct").textContent = lucknowWeather.cloud_pct;
	document.getElementById("lucknow-feels_like").textContent = lucknowWeather.feels_like;
	document.getElementById("lucknow-humidity").textContent = lucknowWeather.humidity;
	document.getElementById("lucknow-max_temp").textContent = lucknowWeather.max_temp;
	document.getElementById("lucknow-sunrise").textContent = new Date(lucknowWeather.sunrise * 1000).toLocaleTimeString();
	document.getElementById("lucknow-sunset").textContent =  new Date(lucknowWeather.sunset* 1000).toLocaleTimeString();
	document.getElementById("lucknow-temp").textContent = lucknowWeather.temp;
	document.getElementById("lucknow-wind-speed").textContent = lucknowWeather.wind_speed;
	document.getElementById("lucknow-min_temp").textContent = lucknowWeather.min_temp;
	document.getElementById("lucknow-wind-degrees").textContent = lucknowWeather.wind_speed;
}
const updatebangloreweather = (BangloreWeather) => {
	document.getElementById("Banglore-cloud_pct").textContent = BangloreWeather.cloud_pct;
	document.getElementById("Banglore-feels_like").textContent = BangloreWeather.feels_like;
	document.getElementById("Banglore-humidity").textContent = BangloreWeather.humidity;
	document.getElementById("Banglore-max_temp").textContent = BangloreWeather.max_temp;
	document.getElementById("Banglore-min_temp").textContent = new Date(BangloreWeather.sunrise * 1000).toLocaleTimeString();
	document.getElementById("Banglore-sunrise").textContent = new Date(BangloreWeather.sunset * 1000).toLocaleTimeString();
	document.getElementById("Banglore-sunset").textContent = BangloreWeather.temp;
	document.getElementById("Banglore-temp").textContent = BangloreWeather.wind_degrees;
	document.getElementById("Banglore-wind-degrees").textContent = BangloreWeather.wind_speed;
	document.getElementById("Banglore-wind-speed").textContent = BangloreWeather.min_temp;
}

setInterval(() => {
	updatelucknowweather(lucknowWeather)
	updatebangloreweather(BangloreWeather)
	updatekolkataweather(kolkataWeather)
}, 5000);