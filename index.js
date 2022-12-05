const searchInput = document.querySelector('#search-ip');
const MD ="--";
const cityname =document.querySelector('.city-name');
const weatherIcon=document.querySelector('.weather-icon');
const temperature=document.querySelector('.temperature');
const weatherState=document.querySelector('.weather-state');
const sunrise =document.querySelector('.sunrise');
const sunset =document.querySelector('.sunset');
const windspeed=document.querySelector('.wind-speed');
const humidyti=document.querySelector('.humidyti');


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=e294e34f0a123a9d48c883e679a2476d&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log('[Search Input]', data);
            cityname.innerHTML=data.name ||MD;
            weatherState.innerHTML=data.weather[0].description||MD;
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML=Math.round(data.main.temp)||MD;
            sunrise.innerHTML=moment.unix(data.sys.sunrise).format('H:mm')||MD;
            sunset.innerHTML=moment.unix(data.sys.sunset).format('H:mm')||MD;
            windspeed.innerHTML=(data.wind.speed*3.6).toFixed(2)||MD;
            humidyti.innerHTML=data.main.humidity||MD;
            searchInput.value=''
            
        })
});