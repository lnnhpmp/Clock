const secondHand = document.querySelector('#sc');
const minHand = document.querySelector('#mn');
const hourHand = document.querySelector('#hr');

function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = (sec / 60) * 360;
    const minsDegrees = (min / 60) * 360;
    const hoursDegrees = (hour / 12) * 360;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);