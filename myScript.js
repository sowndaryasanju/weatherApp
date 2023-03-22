function Current(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pri);
        function pri(position){
          lat=position.coords.latitude;
          lon=position.coords.longitude;
          document.getElementById('currInfo').innerHTML='Your latitude is '+lat+' and longitude is '+lon;
          lat.toPrecision(2);
          lon.toFixed(2);
          console.log(lat+" "+lon);
          base='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c3a599a897002dc2c7a51ffb6bd3ee38';
          console.log(base);
          fetch(base).then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
            document.getElementById('1').innerHTML= data.weather[0].main;
            document.getElementById('2').innerHTML=data.main.temp;
            document.getElementById('3').innerHTML=data.main.feels_like;
            document.getElementById('4').innerHTML=data.main.temp_min;
            document.getElementById('5').innerHTML=data.main.temp_max;
            document.getElementById('6').innerHTML=data.wind.speed;
            document.getElementById('7').innerHTML=data.wind.deg;
          })
          .catch(function() {
            // catch any errors
            console.log("errorrrrr");
          });
      }
      }
    }
    function submit(){
        x=document.getElementById('places').value;
        console.log(x);
        if(x=='mumbai'){
        lat=19.0760;
        lon=72.8777;}
        if(x=='london'){
         lat=51.5072;
         lon=0.1276;
        }
        if(x=='tokyo'){
         lat=35.6762;
         lon=139.6503;
        }
        if(x=='dubai'){
          lat=25.2048;
          lon=55.2708;
        }
        if(x=='paris'){
            lat=48.8566;
            lon=2.3522;
        }
        if(x=='new york'){
            lat=40.7128;
            lon=74.0060;
        }
        document.getElementById('currInfo').innerHTML=x+'\'s latitude is '+lat+' and longitude is '+lon;
        base='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c3a599a897002dc2c7a51ffb6bd3ee38';
        fetch(base).then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            document.getElementById('1').innerHTML= data.weather[0].main;
            document.getElementById('2').innerHTML=data.main.temp;
            document.getElementById('3').innerHTML=data.main.feels_like;
            document.getElementById('4').innerHTML=data.main.temp_min;
            document.getElementById('5').innerHTML=data.main.temp_max;
            document.getElementById('6').innerHTML=data.wind.speed;
            document.getElementById('7').innerHTML=data.wind.deg;
        })
        .catch(function() {
          // catch any errors
          console.log("errorrrrr");
        });

    }
    function latSearch(){
      lat=document.getElementById("latitude").value;
      lon=document.getElementById("longitude").value;
      if(lat==""){
        alert("Enter latitude value");}
      if(lon==""){
        alert("Enter longitude value");}
        base='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c3a599a897002dc2c7a51ffb6bd3ee38';
        fetch(base).then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            document.getElementById('1').innerHTML= data.weather[0].main;
            document.getElementById('2').innerHTML=data.main.temp;
            document.getElementById('3').innerHTML=data.main.feels_like;
            document.getElementById('4').innerHTML=data.main.temp_min;
            document.getElementById('5').innerHTML=data.main.temp_max;
            document.getElementById('6').innerHTML=data.wind.speed;
            document.getElementById('7').innerHTML=data.wind.deg;
        })
        .catch(function() {
          // catch any errors
          console.log("errorrrrr");
        });}
    function clear(){
          document.getElementById('1').innerHTML= "";
          document.getElementById('2').innerHTML="";
          document.getElementById('3').innerHTML="";
          document.getElementById('4').innerHTML="";
          document.getElementById('5').innerHTML="";
          document.getElementById('6').innerHTML="";
          document.getElementById('7').innerHTML="";
        }
      
    
    