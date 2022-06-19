const login = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = 'username';
const DISPLAY_CLASSNAME = 'display';
const HIDDEN_CLASSNAME = 'hidden';

console.log(greeting);

function printGreeting(username){
  login.classList.remove(DISPLAY_CLASSNAME);
  login.classList.add(HIDDEN_CLASSNAME);

  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(DISPLAY_CLASSNAME);
  greeting.innerHTML = `Welcome, ${username}`;
}

function eventHandleGreeting(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printGreeting(username);
}

localStorage.removeItem(USERNAME_KEY);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  login.classList.add(DISPLAY_CLASSNAME);
  login.addEventListener("submit", eventHandleGreeting);
} else {
  printGreeting(savedUsername);
}