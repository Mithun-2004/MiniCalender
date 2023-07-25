const date = document.querySelector('#date');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const today = new Date();

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.innerText = (today.getDate()<10?"0":"") + `${today.getDate()}`;
day.innerText = weekDays[today.getDay()];
month.innerText = months[today.getMonth()];
year.innerText = today.getFullYear();
