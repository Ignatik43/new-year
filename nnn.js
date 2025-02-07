const countdown = document.getElementById('countdown');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown(){
    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear()+1,0,1)
    const timeRemaining = newYearDate - currentDate;
    const days = Math.floor(timeRemaining / (1000*60*60*24));
    const hours =Math.floor((timeRemaining % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((timeRemaining % (1000*60*60))/(1000*60));
    const seconds = Math.floor((timeRemaining % (1000*60))/1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById('giftBox').addEventListener('click', function () {
    const lid = document.querySelector('.lid');
    const message = document.getElementById('message');
  
    // Анимация открытия крышки
    lid.style.transform = 'rotateX(90deg)';
  
    // Показ сообщения с задержкой
    setTimeout(() => {
      message.classList.remove('hidden');
    }, 500);
  });
  
  const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'green';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});
const btin = document.getElementById('btin');

btin.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'rgb(68, 76, 143)';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});

