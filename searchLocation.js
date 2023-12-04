function searchLocation(){
    currentLocation();    
}

function currentLocation() {
    navigator.geolocation.getCurrentPosition(success => {
        lat = success.coords.latitude;
        lon = success.coords.longitude;
        fetchWeatherData(lat,lon);
    });
}

function fetchWeatherData(lat, lon) {
    try {
        const apiKey = '5b4bee0ba241d092159faf007e166080';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(dataArray => displayData(dataArray))
            .catch(error => console.error('Error fetching weather data:', error));
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayData(dataArray) {
    name=dataArray.name.toUpperCase()
        lat=dataArray.coord.lat
        long=dataArray.coord.lon
        temp=Math.floor(dataArray.main.temp-273.15) 
        fl=Math.floor(dataArray.main.feels_like-273.15)
        ws=Math.floor(dataArray.wind.speed*3.6)
        hm=dataArray.main.humidity
        con=dataArray.weather[0].main.toUpperCase()
        desc=dataArray.weather[0].description.toUpperCase()

        

        result.innerHTML=`
        

        <div class="w-100" id="bluec" style="border-radius: 15px;">
        <div class="row mt-5">
            <div class="col-lg-4 p-5 text-center">
                <i class="fa-solid fa-location-dot fa-2x text-center " style="color: #7c838d;">
                    <span  style="font-size: 20px; color: #F0F0F2;">Location</span> </i>    
                
                <h1 class="mt-3" style="color: white;">${name}</h1>                   
            </div>

            <div class="col-lg-4 p-5 text-center">
                <i class="fa-solid fa-compass fa-2x text-center " style="color: #7c838d;">
                    <span  style="font-size: 20px; color: #F0F0F2;">lattitude</span> </i> 
                    
                    <h1 class="mt-3" style="color: white;">${lat}</h1>
            </div>

            <div class="col-lg-4 p-5 text-center">
                <i class="fa-solid fa-compass fa-2x text-center " style="color: #7c838d;">
                    <span  style="font-size: 20px; color: #F0F0F2;">longitude</span> </i> 
                    
                    <h1 class="mt-3" style="color: white;">${long}</h1>
            </div>

        </div>
    </div>

    


    <div class="w-100" id="bluec" style="border-radius: 15px;"> 
        <div class="row mt-5">
            <div class="col-lg-6 p-5 text-center">
                <i class="fa-solid fa-fan fa-2x text-center " style="color: #7c838d;">
                    <span  style="font-size: 20px; color: #F0F0F2;">Weather Condition</span> </i>    
                
                <h1 class="mt-3" style="color: white;">${con}</h1>                   
            </div>

            <div class="col-lg-6 p-5 text-center">
                <i class="fa-solid fa-comment fa-2x text-center " style="color: #7c838d;">
                    <span  style="font-size: 20px; color: #F0F0F2;">Description</span> </i> 
                    
                    <h1 class="mt-3" style="color: white;">${desc}</h1>
            </div>

        </div>
    </div>


    <!-- cards -->

    <div class="row row-cols-1 row-cols-md-2 g-4 mt-5" >

        <div class="col">
            <div class="card" style="background-color: #202B3B;">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <div class="p-3" style="background-color: #202B3B;">
                  <i class="fa-solid fa-sun fa-3x " style="color: #7c838d;"> <span  style="font-size: large; color: #F0F0F2;">Temperature</span> </i>
                  <div class="card-body">
                    <h1 class="mt-3 ms-5" style="color: white;">${temp}°C</h1>
                  </div>
              </div>
            </div>
          </div>

        <div class="col">
          <div class="card" style="background-color: #202B3B;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="p-3" style="background-color: #202B3B;">
                <i class="fa-solid fa-temperature-three-quarters fa-3x " style="color: #7c838d;"> <span  style="font-size: large; color: #F0F0F2;">Feel's Like</span> </i>
                <div class="card-body">
                    <h1 class="mt-3 ms-5" style="color: white;">${fl}°C</h1>
                </div>
            </div>
          </div>
        </div>


        <div class="col">
            <div class="card" style="background-color: #202B3B;">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <div class="p-3" style="background-color: #202B3B;" >
                  <i class="fa-solid fa-wind fa-3x " style="color: #7c838d;"> <span  style="font-size: large; color: #F0F0F2;">Wind Speed</span> </i>
                  <div class="card-body">
                    <h1 class="mt-3 ms-5" style="color: white;">${ws}km/h</h1>
                  </div>
              </div>
            </div>
          </div>




          <div class="col">
            <div class="card" style="background-color: #202B3B;">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <div class="p-3" style="background-color: #202B3B;">
                  <i class="fa-solid fa-droplet fa-3x " style="color: #7c838d;"> <span  style="font-size: large; color: #F0F0F2;">Humidity</span> </i>
                  <div class="card-body">
                    <h1 class="mt-3 ms-5" style="color: white;">${hm}%</h1>
                  </div>
              </div>
            </div>
          </div>


      </div>

        `
}