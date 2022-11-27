const url = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector(".advice-num");
const adviceText = document.querySelector(".advice-text");
const btn = document.querySelector(".btn");

window.onload = loadAdvice;

btn.addEventListener("click", function () {
  loadAdvice();
});

function loadAdvice() {
  fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then((adviceData) => {
      const advice = adviceData.slip;
      adviceNumber.innerHTML = advice.id;
      adviceText.textContent = `“${advice.advice}”`;
    })
    .catch((error) => {
      console.log(error);
    });
}
