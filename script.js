const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb6898d59bmsh9201d8e25a50a78p1962a5jsnc2857aafcc69',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};
const getweather=(city)=> {
fetch(
  'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
  options
)
  .then((Response) => Response.json())
  .then((Response) => {
	console.log(Response);
    temp.innerHTML = "Temperature is "+Response.temp;
    min_temp.innerHTML = "Minimum Temperature is  "+Response.min_temp;
    max_temp.innerHTML = "maximum Temperature is  "+Response.max_temp;
    humidity.innerHTML = "Humidity is  "+Response.humidity;    
    wind_speed.innerHTML = "Wind speed is  "+Response.wind_speed;
    wind_degrees.innerHTML = "Wind Degrees is  "+Response.wind_degrees;
    cloud_pct.innerHTML = "Cloud pct is  "+Response.cloud_pct;    
    feels_like.innerHTML = "Feels like is  " +Response.feels_like;    
    sunrise.innerHTML = "Sunrise is  "+Response.sunrise;
    sunset.innerHTML = "Sunset is  "+Response.sunset;
    

  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
  if(city.value.length==0)
  alert("Please Enter the city");
  else{
    document.getElementById("heahding").innerHTML="Weather of "+city.value;
  getweather(city.value)
  }
	
});
getweather("Varanasi");