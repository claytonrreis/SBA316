const imgCarousel = document.querySelector(".anime-container");

// const imgCarousel = document.querySelector(".animeimg");
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");

let rotation = 0;

prevbtn.addEventListener("click", function () {
  console.log(this.textContent);
  rotation = rotation + 45;
  rotate();
});

nextbtn.addEventListener("click", function () {
  console.log(this.textContent);
  rotation = rotation - 45;
  rotate();
});

function rotate() {
  imgCarousel.style.transform = `perspective(2500px)rotateY(${rotation}deg)`;
}

// comment Review section

const a = querySelectorAll("img");

// img.addEventListener("mouseover", function(event){
//   event.preventDefault(;
//     if(event.target)
//   )
// });

onmouseover = (event) => {};
//Studie and rewritte

function createStarRating() {
  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("star-rating");

  for (let i = 1; i <= 5; i++) {
    const starRadio = document.createElement("input");
    starRadio.type = "radio";
    starRadio.name = "rating";
    starRadio.value = i;

    const starLabel = document.createElement("label");
    starLabel.textContent = "★";
    starLabel.htmlFor = `star-${i}`;

    starRadio.id = `star-${i}`;

    ratingContainer.appendChild(starRadio);
    ratingContainer.appendChild(starLabel);
  }

  return ratingContainer;
}

function createReviewSection(itemId) {
  const reviewSection = document.createElement("div");
  reviewSection.classList.add("review-section");

  const reviewText = document.createElement("textarea");
  reviewText.id = `review-text-${itemId}`;
  reviewText.placeholder = "Write your review here";

  const ratingElement = createStarRating();

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Review";
  submitButton.type = "button";

  reviewSection.appendChild(reviewText);
  reviewSection.appendChild(ratingElement);
  reviewSection.appendChild(submitButton);

  submitButton.addEventListener("click", function () {
    reviewText.value = "";
  });

  return reviewSection;
}

const animeItems = document.querySelectorAll(".anime-item");

animeItems.forEach((animeItem) => {
  const itemId = animeItem.id;
  const reviewSection = createReviewSection(itemId);
  animeItem.appendChild(reviewSection);
});
