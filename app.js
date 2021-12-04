 const apiKey = `165eeb0c401680e46a2de9c883280463`;
 const searchButton = () =>{
     const city = document.getElementById('city-name').value;
     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     

     fetch(url)
     .then(res => res.json())
     .then(data => displayTemperature(data))

 }
 
 setInnerText = (id, text) => {
     document.getElementById(id).innerText = text;
 }

 const displayTemperature = temperature =>{
     setInnerText('city', temperature.name)
     setInnerText('temperature', temperature.main.temp)
     setInnerText('weather', temperature.weather[0].main)
    //  set weather icon
     const url2 = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
     
     const imgIcon = document.getElementById('weather-icon');
     imgIcon.setAttribute('src',url2)
     console.log(temperature);
 }