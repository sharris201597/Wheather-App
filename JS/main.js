let weather = {
    myKey: "e994311a39c7423c62b20e6f296fb4f1",
    // getWeather: async function (city){
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.myKey}`
    //     ) .then((response) => {
    //         console.log(response)
    //         if(!response.ok) {
    //             alert('No city found under that input.');
    //             throw new Error("No city found under that input.")
    //         } return response.json();
    //     }).then((data) => this.getWeather(data));
    // },

    getWeather: async function (city){
        let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.myKey}`)
        const data = await responce.json()
        // console.log(data)
        return data
        // if (data.cod = '404'){
        //     alert('Invalid City.. Please enter valid Input')
        // } else{
        //     console.log(data)
        //     return data
        // }
    },

    showWeather: async function (data) {
        console.log(data)
        // const {temp, humidity,temp_min, temp_max} = data.main;
        // const {description, icon} = data.weather[0];
        const name = data.name;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const temp_min = data.main.temp_min;
        const temp_max = data.main.temp_max;

        
        document.querySelector(".city").innerText = name;
        document.querySelector('.description').innerText = description;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById('temp').innerText = parseInt((parseFloat(temp) * 1.8) + 32) + '°';
        document.querySelector(".humidity").innerText = humidity + '%';
        document.querySelector(".high").innerText = parseInt((parseFloat(temp_max) * 1.8) + 32) + '°';
        document.querySelector(".low").innerText = tparseInt((parseFloat(temp_min) * 1.8) + 32) + '°';
    },

    search: async function(){

        let city = await this.getWeather(document.querySelector(".search-bar").value);
        this.showWeather(city);
        return city;
    },
};

// // Default
// const defaultCity = weather.getWeather('Chicago')
// weather.showWeather(defaultCity)


