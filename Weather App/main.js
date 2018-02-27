$(document).ready(function() {
//set variables to store long and latitude
var longitude = 0;
var latitude = 0;
var url = "";
var farenheit = 0;
var censius = 0;
var imageURL = "";
var htmlImage = "";
//get geolocation co-ordinates
function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position) {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=22fcd87a498856f456a4d706bb55cc9e";
//api to display co-ordinates as a geolocation
        $.ajax( {
          url: url,
        success: function(response) {
//display co-ordinates as a location
          $("#location").html(response.name);
//if user selects celsius convert to Celsius and display
          $("#button1").on("click", function() {
             $("#temp").html((Math.floor(response.main.temp - 273.15)) + " degrees celsius");
           })
//if user selects farenheit convert to farenheit and display
          $("#button2").on("click", function() {
             $("#temp").html((Math.floor(response.main.temp * 9/5 - 459.67)) + " degrees farenheit");
           })
//display picture of the weather based on co-ordinates
//          imageURL = "http://openweathermap.org/img/w/01d.png" //+ response.weather[0].icon;
          if (response.weather[0].icon == "01d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/01d.png>";
          } else if (response.weather[0].icon == "01n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/01n.png>";
          } else if (response.weather[0].icon == "02d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/02d.png>";
          } else if (response.weather[0].icon == "02n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/02n.png>";
          } else if (response.weather[0].icon == "03d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/03d.png>";
          } else if (response.weather[0].icon == "03n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/03n.png>";
          } else if (response.weather[0].icon == "04d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/04d.png>";
          } else if (response.weather[0].icon == "04n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/04n.png>";
          } else if (response.weather[0].icon == "09d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/09d.png>";
          } else if (response.weather[0].icon == "09n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/09n.png>";
          } else if (response.weather[0].icon == "10d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/10d.png>";
          } else if (response.weather[0].icon == "10n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/10n.png>";
          } else if (response.weather[0].icon == "11d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/11d.png>";
          } else if (response.weather[0].icon == "11n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/11n.png>";
          } else if (response.weather[0].icon == "13d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/13d.png>";
          } else if (response.weather[0].icon == "13n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/13n.png>";
          } else if (response.weather[0].icon == "50d") {
            htmlImage = "<img src = http://openweathermap.org/img/w/50d.png>";
          } else if (response.weather[0].icon == "50n") {
            htmlImage = "<img src = http://openweathermap.org/img/w/50n.png>";
          } else { htmlImage = "Icon Not Available"}

    //      $("#picture").html(imageURL);
          $("#picture").html(htmlImage);
//$("#picture").html(response.weather[0].icon);
}
});

}
}
getLocation();
});
