const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
stopBtnRef.disabled = true;
let timerId;

startBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000)
})

stopBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
  clearInterval(timerId);
})



