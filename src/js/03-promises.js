import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget;
  let delayNum = Number(delay.value);
  const stepNum = Number(step.value);
  const amountNum = Number(amount.value);

  for (let i = 1; i <= amountNum; i += 1) {
    createPromise(i, delayNum)
      .then(onResolve)
      .catch(onReject);
    delayNum += stepNum;

  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => 
    {
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay });
  } else {
    // Reject
    reject({ position, delay });
  }
}, delay);
  });
};

function onResolve({ position, delay }) {
  Notify.success(` Fulfilled promise ${position} in ${delay}ms`, { duration: 2000, });
}

function onReject({ position, delay }) {
  Notify.failure(` Rejected promise ${position} in ${delay}ms`, { duration: 2000, });
};
