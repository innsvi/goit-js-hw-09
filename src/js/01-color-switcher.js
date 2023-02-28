function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };


const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('[data-start]');
const stopChangeColorBtn = document.querySelector('[data-stop]');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);
stopChangeColorBtn.addEventListener('click', onStopChangeColorBtnClick);

let intervalId;

function onChangeColorBtnClick() {
  changeColorBtn.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopChangeColorBtnClick() {
  changeColorBtn.removeAttribute('disabled');
  clearTimeout(intervalId);
};



