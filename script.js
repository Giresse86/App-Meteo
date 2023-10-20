const liegeLat = 50.6412;
const liegeLon = 5.5718;
const apiKey = "774d1bb89d2edf219007951a111c7664";
const count = 40;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liegeLat}&lon=${liegeLon}&units=metric&cnt=${count}&appid=${apiKey}&lang=fr`;
const weatherOutput = document.querySelector("#weather-output");

fetch(weatherUrl)
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson.list);
    const temperature = responseJson.list[0].main.temp;
    const description = responseJson.list[0].weather[0].description;
    const vitesse = responseJson.list[0].wind.speed;
    const date = responseJson.list[0].dt_txt;
    const icon = responseJson.list[0].weather[0].icon;
    console.log(
      temperature + " " + description + " " + vitesse + " " + date + " " + icon
    );
    .then((weatherData) =>{
        if
    }
    )
  })
  .catch((error) => {
    console.log(error);
  });
// fetch(weatherUrl)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("La requête a échoué");
//     }
//   })
//   .then((weatherData) => {
//     // Vérifiez si les données sont correctement formatées
//     if (
//       weatherData.main &&
//       weatherData.weather &&
//       Array.isArray(weatherData.weather)
//     ) {
//       const temperature = weatherData.main.temp;
//       const condition = weatherData.weather[0].description;
//       // Affichez les données météorologiques
//       console.log(temperature);
//       console.log(condition);
//     }
//   });
