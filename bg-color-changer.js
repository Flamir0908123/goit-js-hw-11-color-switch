
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    bodyEl: document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
let bgColorChangerIntervalld=null;

const colors = [
'#FFFFFF',
'#2196F3',
'#4CAF50',
'#FF9800',
'#009688',
'#795548',
];


refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    bgColorChangerIntervalld = setInterval(colorChanger, 1000);
    refs.startBtn.setAttribute('disabled', true)
};

function onStopBtnClick() {
    clearInterval(bgColorChangerIntervalld);
    refs.startBtn.removeAttribute('disabled')
};

function colorChanger() {
    refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}
