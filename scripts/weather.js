const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

const API_KEY = '63c602ed6d08f6dc181717057c8258b6';
function onGeoError(err){
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function onGeoOk(pos){
  const crd = pos.coords;
  const lat = crd.latitude;
  const lon =  crd.longitude;
  // console.log(pos);
  // console.log('Your current position is:');
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  // console.log(`More or less ${crd.accuracy} meters.`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 
  fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data);
      // console.log(weather);
      city.innerText = data.name;
      weather.innerText = `Weater : ${data.weather[0].main} / `;
    }).catch((err)=>{
      city.innerText = 'w';
      weather.innerText = 'w';
    });
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);