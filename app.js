const btnRandomizeAdvice = document.querySelector('#btnRandomizeAdvice');

async function getAdvice() {
  const advice = await fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json());
  changesAdvice(advice.slip.id, advice.slip.advice);
}

function changesAdvice(adviceNumber, adviceText) {
  document.querySelector('#adviceNumber').innerHTML = adviceNumber;
  document.querySelector('#adviceText').innerHTML = adviceText;
}

btnRandomizeAdvice.onclick = getAdvice

window.onload = getAdvice