const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const wind = document.querySelector(".wind");
const havadurumu = document.querySelector(".havadurumu");

btn.addEventListener("click", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2fbafbe3eb671e5aaa277f9324a67ddf&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      myfunction(data);
    });

  city.innerText = input.value;
  date.innerText = new Date().toUTCString();
});

let myfunction = (data) => {
  const {
    //coord: { lon, lat },
    main: { temp, feels_like },weather
    ,
    wind:{speed,deg},
    sys: { country, sunrise, sunset },
  } = data;
  let {description,icon,main} = weather[0]
console.log(main);

  const coordInfo = document.querySelector(".coord");
  // coordInfo.firstElementChild.innerText =`Lon : ${lon}`
  // coordInfo.lastElementChild.innerText= `Lat : ${lat}`;
  const descriptionInfo = document.querySelector(".description");
//  descriptionInfo.previousElementSibling.innerText = `${main}`
 descriptionInfo.innerText = `${description}`
 descriptionInfo.nextElementSibling.src =
 "https://openweathermap.org/img/wn/" + icon + ".png";
  const sunriseInfo = document.querySelector("#sunrise");
 sunriseInfo.previousElementSibling.innerText = `${country}`;
 sunriseInfo.innerText = `Sunrise : ${sunrise}`;
 sunriseInfo.nextElementSibling.innerText = `sunset : ${sunset}`
  const windInfo = document.querySelector(".wind");
  console.log(windInfo);
  console.log(speed);
  windInfo.firstElementChild.innerText = `Speed : ${speed} km/hour`
  windInfo.lastElementChild.innerText = `Deg : ${deg}`
 const mainInfo = document.querySelector(".main");
  mainInfo.firstElementChild.innerText = `   ${temp} °C`;
  mainInfo.lastElementChild.innerText = `Feels Like : ${feels_like} °C`;
 
};
