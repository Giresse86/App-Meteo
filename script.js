const liegeLat = 50.6412;
const liegeLon = 5.5718;
const apiKey = "774d1bb89d2edf219007951a111c7664";
const count = 40;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liegeLat}&lon=${liegeLon}&units=metric&cnt=${count}&appid=${apiKey}&lang=fr`;
const weatherOutput = document.querySelector("#weather-output");
const template = document.querySelector("#weather-template");

fetch(weatherUrl)
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    const weatherList = responseJson.list;
    console.log(weatherList);

    weatherList.forEach((weatherItem) => {
      const temperature = weatherItem.main.temp;
      const description = weatherItem.weather[0].description;
      const vitesse = weatherItem.wind.speed;
      const date = weatherItem.dt_txt;
      const icon = `https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`;

      console.log(
        temperature +
          " °C, " +
          description +
          ", Vitesse du vent : " +
          vitesse +
          ", Date : " +
          date +
          ", Icône : " +
          icon
      );

      const liElement = template.content.cloneNode(true);
      liElement.querySelector("p:nth-child(1)").textContent = date;
      liElement.querySelector("p:nth-child(2)").textContent =
        temperature + " °C";
      liElement.querySelector("p:nth-child(3)").textContent = description;
      liElement.querySelector("img").src = icon;
      liElement.querySelector("p:nth-child(5)").textContent =
        "Vitesse du vent : " + vitesse;

      weatherOutput.appendChild(liElement);
    });
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
