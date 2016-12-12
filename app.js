const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');
const body = document.querySelector('body');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const randomColor = JSON.stringify(Math.floor(Math.random() * 1000000));
  body.style.backgroundColor = `#${randomColor}`;
}

setInterval(setDate, 1000);

setDate();
