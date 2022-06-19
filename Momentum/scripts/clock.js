const dateAll = document.querySelector("#clock h1");
const clock = document.querySelector("#clock h2");

console.log(dateAll);
console.log(clock);

function clockEvent() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const hour = newDate.getHours().toString().padStart(2,0);
  const min = newDate.getMinutes().toString().padStart(2,0);
  const sec = newDate.getSeconds().toString().padStart(2,0);
  dateAll.innerHTML = `Today : ${year}/${month}/${date} `; 
  clock.innerHTML =`${hour}:${min}:${sec}`;
}

setInterval(clockEvent, 1000);