const apiKey = 'eb7fad6f685e4c1e972170311250501';
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=alexandria&aqi=no&days=3`;
const text = document.getElementById("mainSearch")



fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data) {

            console.log(data);

            const countrys = data.location.country;
            const temperature = data.current.temp_c;
            const condition = data.current.condition.text;
            const windSpeed = data.current.wind_kph;
            const humidity = data.current.humidity;
            const feelsLike = data.current.feelslike_c;

            const weatherHtml = `
                <p class="p-2 hs fs-3 fw-bold"> ${countrys} , Alexandria </p>
                <p class=" p-2 hs hss fw-bold">${temperature} °C
                    <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" class="sun">
                </p>
                <p id="cond" class="ps-2 fw-bold hc"> ${condition}</p>
                <p class="ps-2 fw-bold hs pb-3"> ${windSpeed} <i class="fa-solid fa-umbrella"></i> , ${humidity} <i class="fa-solid fa-wind"></i> , ${feelsLike} <i class="fa-solid fa-diamond-turn-right"></i> </p>
            `;

            contentview2.innerHTML = weatherHtml;


            const today = new Date();
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayName = daysOfWeek[today.getDay()];
            const futureDay1 = daysOfWeek[(today.getDay() + 1) % 7];
            const futureDay2 = daysOfWeek[(today.getDay() + 2) % 7];
            const futureDay3 = daysOfWeek[(today.getDay() + 3) % 7];

            const futureDate1 = new Date(today);
            futureDate1.setDate(today.getDate() + 1);
            const futureDate2 = new Date(today);
            futureDate2.setDate(today.getDate() + 2);
            const futureDate3 = new Date(today);
            futureDate3.setDate(today.getDate() + 3);

            const formattedFutureDate1 = futureDate1.toDateString();
            const formattedFutureDate2 = futureDate2.toDateString();
            const formattedFutureDate3 = futureDate3.toDateString();

            const futureTime = `
                <div id="first" class="col-4 open-view3 shadow">
                    <p class="text-light text-center pt-2">${formattedFutureDate1} - ${futureDay1}</p>
                </div>
                <div id="second" class="col-4 open-view2 shadow">
                    <p class="text-light text-center pt-2">${formattedFutureDate2} - ${futureDay2}</p>
                </div>
                <div id="third" class="col-4 open-view3 shadow">
                    <p class="text-light text-center pt-2">${formattedFutureDate3} - ${futureDay3}</p>
                </div>
            `;

            contentview.innerHTML = `<p class="p-2 hs fw-bold">${dayName}</p>
                                     <p class="p-2 hs fw-bold">${today.toDateString()}</p>`;
            future.innerHTML = futureTime;
        }
    })
    .catch(error => console.log('Error fetching weather data:', error));



fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data) {

            const forecast = data.forecast.forecastday

            let idea = "";

            for (let index = 0; index < forecast.length; index++) {

                let temp = forecast[index].day.avgtemp_c

                let disc = forecast[index].day.condition.text


                idea +=`
                <div class="col-4 shadow">
                    <p class="text-light text-center pt-2">${temp} °C</p>
                    <p class="text-center pt-2 text-light">${disc}</p>
                </div>
            `;
                
            }

            futurecols.innerHTML = idea;



            const hourly = data.forecast.forecastday[0].hour.slice(0, 5);

            for (let index = 0; index < hourly.length; index++) {

                let temp = hourly[index].temp_c

                let temphour = hourly[index].time

                let disc = hourly[index].condition.text

                

                const hourInfno = `
                <div>
                    <p class="text-light text-center pt-2">${temphour}</p>
                    <p class="text-light text-center pt-2">${temp} °C</p>
                    <p class="text-center pt-2 text-light fw-bold">${disc}</p>
                </div>
            `;

            contentview3.innerHTML += hourInfno;
                
            }



            

        
        }



    })








const switchColor = document.getElementById('myButton');
switchColor.addEventListener("click", function () {
    if (switchColor.classList.contains("off")) {
        switchColor.classList.remove("off");
        switchColor.classList.add("on");
        switchColor.classList.remove("circle");
        switchColor.classList.add("circle-light");
        mainbody.classList.add('body2')
        navmain.classList.add('navbar2')
        maini.classList.add('i2')
        Tgbtn.classList.add('yellowPro')
        homelink.classList.add('nav-item2')
        linksPro.addEventListener('mouseover', function () {
            stLink.classList.add('nav-item2')
        })
        linksPro.addEventListener('mouseout', function () {
            stLink.classList.remove('nav-item2')
        })

        linksPro2.addEventListener('mouseover', function () {
            ndLink.classList.add('nav-item2')
        })
        linksPro2.addEventListener('mouseout', function () {
            ndLink.classList.remove('nav-item2')
        })

        linksPro3.addEventListener('mouseover', function () {
            rdLink.classList.add('nav-item2')
        })
        linksPro3.addEventListener('mouseout', function () {
            rdLink.classList.remove('nav-item2')
        })

        linksPro4.addEventListener('mouseover', function () {
            rddLink.classList.add('nav-item2')
        })
        linksPro4.addEventListener('mouseout', function () {
            rddLink.classList.remove('nav-item2')
        })

        linksPro5.addEventListener('mouseover', function () {
            rdddLink.classList.add('nav-item2')
        })
        linksPro5.addEventListener('mouseout', function () {
            rdddLink.classList.remove('nav-item2')
        })
        mainSearch.classList.add("mainss")
        contentview.classList.add("open-view0")
        contentview2.classList.add("open-view22")
        all.classList.add("open-view22")
        first.classList.add("open-view4")
        third.classList.add("open-view4")
        second.classList.add("open-view5")
        cond.classList.add("hd")
        bbtnb.classList.add("copycolor")
        mainSearch2.classList.add("copytext")
        
 
        
    } else if (switchColor.classList.contains("on")) {
        switchColor.classList.remove("on");
        switchColor.classList.add("off");
        switchColor.classList.remove("circle-light");
        switchColor.classList.add("circle");
        Tgbtn.classList.remove('yellowPro')
        mainbody.classList.remove('body2')
        navmain.classList.remove('navbar2')
        maini.classList.remove('i2')
        homelink.classList.remove('nav-item2')
        linksPro.addEventListener('mouseover', function () {
            stLink.classList.remove('nav-item2')
        })
        linksPro.addEventListener('mouseout', function () {
            stLink.classList.remove('nav-item2')
        })

        linksPro2.addEventListener('mouseover', function () {
            ndLink.classList.remove('nav-item2')
        })
        linksPro2.addEventListener('mouseout', function () {
            ndLink.classList.remove('nav-item2')
        })

        linksPro3.addEventListener('mouseover', function () {
            rdLink.classList.remove('nav-item2')
        })
        linksPro3.addEventListener('mouseout', function () {
            rdLink.classList.remove('nav-item2')
        })

        linksPro4.addEventListener('mouseover', function () {
            rddLink.classList.remove('nav-item2')
        })
        linksPro4.addEventListener('mouseout', function () {
            rddLink.classList.remove('nav-item2')
        })

        linksPro5.addEventListener('mouseover', function () {
            rdddLink.classList.remove('nav-item2')
        })
        linksPro5.addEventListener('mouseout', function () {
            rdddLink.classList.remove('nav-item2')
        })
        mainSearch.classList.remove("mainss")
        contentview.classList.remove("open-view0")
        contentview2.classList.remove("open-view22")
        first.classList.remove("open-view4")
        third.classList.remove("open-view4")
        second.classList.remove("open-view5")
        cond.classList.remove("hd")
        all.classList.remove("open-view22")
        bbtnb.classList.remove("copycolor")
        mainSearch2.classList.remove("copytext")
    }
});






