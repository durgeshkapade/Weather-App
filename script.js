
    let date= new Date();

    let month= ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    document.querySelector(".date").innerHTML = date.getDate() +" "+month[date.getMonth()];
    let week= ["Sun","Mon","Tue","Wed","Thru","Fri","Sat"];
    document.querySelector(".week").innerHTML = week[date.getDay()];

    setInterval(function(){
        let date= new Date();
        var ampm = date.getHours()>12 ? "PM" :"AM";
        document.querySelector(".time").innerHTML = date.getHours()%12+":"+date.getMinutes()+":"+date.getSeconds()+" "+ampm;
    },1000);




const apikey = "6d43ae12810c7046c9d93beb4380aa6b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox = document.querySelector(".input-box input");

async  function checkcity(city) {

    let response =  await fetch(apiurl + city + `&appid=${apikey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp)+"°C";
    document.querySelector(".SetHumidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".Setwind").innerHTML = data.wind.speed+" Kmph";
    document.querySelector(".Setpressure").innerHTML = data.main.pressure+" Pa";
    document.querySelector(".weather-discri").innerHTML = data.weather[0].description;
    

    // console.log(data.weather[0].icon);
    // cloud icon

    let imgelement = document.getElementById("weather-icon-img")
    imgelement.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



    // Background image fix
    
    var Backgroundimg = document.getElementById("bg-i");
    Backgroundimg.style.backgroundImage = `url(./images/${data.weather[0].icon}.jpg)`;
    // BackGround img small 
    var smallBackgroundimg = document.getElementById("top-box-img");
    smallBackgroundimg.style.backgroundImage = `url(./images/${data.weather[0].icon}.jpg)`;

}


searchbox.addEventListener("keypress" , function(event){

    if(event.key == "Enter"){
        checkcity(searchbox.value);
    }
});