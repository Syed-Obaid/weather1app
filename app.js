let API_KEY = "dc972b9b0928dcde5a1220e9de459cb6";

let getWeather =async (city)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    return showWeather(data)
}

let showWeather = (getData)=>{
if(getData.cod == "404"){
    Swal.fire({
        icon: "error",
        title: "Bad Input...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    // weatherimg.innerHTML = `<h2>City Not found</h2>`
}else if (getData.cod == "400"){
    Swal.fire({
        icon: "error",
        title: "Enter Input Field...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    // weatherimg.innerHTML =   `<h2>Enter City name</h2>`
 
}else{

let weatherimg = document.getElementById("weatherimg")
weatherimg.innerHTML = `<img src="https://openweathermap.org/img/wn/${getData.weather[0].icon}@2x.png" alt="">
<div>
    <h1>${getData.main.temp}C</h1>
    <h1>${getData.weather[0].main}</h1>
</div>`
}
}


function getValue(){
    let input = document.getElementById("search");
    getWeather(input.value)
}