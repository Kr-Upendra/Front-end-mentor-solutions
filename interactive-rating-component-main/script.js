///////Active State////////
const ratings = document.querySelectorAll(".rating-numbers");
const submitBtn = document.querySelector(".btn");
const displayNone = document.querySelector(".dp-none");
const homepage = document.querySelector(".hp");
const thankyouPage = document.querySelector(".thankyou-page");
const ratingText = document.querySelector(".orange-text");
console.log(ratingText);

const currentRatingValue = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("click", function () {
      let presentActive = document.querySelector(".active");
      if (!ratings[i].classList.contains("active")) {
        presentActive.classList.remove("active");
        ratings[i].classList.add("active");
      }
    });
  }
};

currentRatingValue();

const submitRating = () => {
  submitBtn.addEventListener("click", () => {
    const ratingValue = document.querySelector(".active").innerHTML;
    homepage.classList.add("dp-none");
    thankyouPage.classList.remove("dp-none");
    ratingText.innerHTML = `You selected ${ratingValue} out of 5`;
  });
};

submitRating();
