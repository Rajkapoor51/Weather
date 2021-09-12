//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key: "0b52d425c970677816d596196e3d1750",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById("Input-Box");
//event listener function on keypress
searchInputBox.addEventListener("keypress", (Event) => {
    if (Event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.Weather-body').style.display="block";
    }
});

//get weather report

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();

    }).then(showWeatherReport);
}
//show weather report

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature=document.getElementById("temp");
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;c`;

    let minMaxTemp=document.getElementById("min-max");
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c (min)/${Math.ceil(weather.main.temp_max)}&deg;c (max)`;

    let weatherType=document.getElementById("weather");
    weatherType.innerText=`${weather.weather[0].main}`;

    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


    if(weatherType.textContent == 'Clouds') {
        document.body.style.background = "url('image/cloud.gif')"
    
    }else if(weatherType.textContent == 'clear') {
        document.body.style.background = "url('image/clera02.jpg')"
    
    }else if(weatherType.textContent == 'Rain') {
        document.body.style.background = "url('image/rains.jpg')"
    
    }else if(weatherType.textContent == 'Snow') {
        document.body.style.background = "url('image/snow.jpg')"
    
    }else if(weatherType.textContent == 'Sunny') {
        document.body.style.background = "url('image/sunny.jpg')"
    
    }else if(weatherType.textContent == 'Mist') {
        document.body.style.background = "url('image/mist.jpg')"
    }
        

}

//date manage

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    "Saturday"];
    
    let months =["January", "February", "March", "April", "May", "june", "July", "August",
     "September", "October", "November", "December"];
    
     let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day = days[dateArg.getDay()];

    return`${date} ${month} ${day} ${year}`;

    

}





