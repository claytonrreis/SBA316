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
    starLabel.id = `star-label-${i}`;
    starLabel.classList.add("starLabel");

    starRadio.id = `star-${i}`;

    starRadio.addEventListener("change", function () {
      const rating = this.value;
      const starLabel = document.getElementById(`star-label-${rating}`);
    });

    ratingContainer.appendChild(starRadio);
    ratingContainer.appendChild(starLabel);

    starRadio.addEventListener("change", function () {
      const selectedStar = this.value;
      const starLabels = ratingContainer.querySelectorAll("label");

      for (const label of starLabels) {
        const labelId = parseInt(label.id.split("-")[2]);
        label.style.color = labelId <= selectedStar ? "gold" : "grey";
      }
    });
  }

  return ratingContainer;
}

function createReviewSection(itemId) {
  const reviewSection = document.createElement("div");
  reviewSection.classList.add("review-section");

  const reviewText = document.createElement("textarea");
  reviewText.id = `review-text-${itemId}`;
  reviewText.placeholder = "Write your review here";
  reviewText.classList.add("review-text");

  const ratingElement = createStarRating();

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Review";
  submitButton.type = "button";
  submitButton.classList.add("submit-button");

  reviewSection.appendChild(reviewText);
  reviewSection.appendChild(ratingElement);
  reviewSection.appendChild(submitButton);

  submitButton.addEventListener("click", function (event) {
    const reviewText = document.getElementById(`review-text-${itemId}`);
    const reviewTextValue = reviewText.value.trim();

    let hasSelectedRating = false;
    const ratingRadios = ratingElement.querySelectorAll("input[type='radio']");
    for (const radio of ratingRadios) {
      if (radio.checked) {
        hasSelectedRating = true;
        break;
      }
    }

    if (reviewTextValue === "" || !hasSelectedRating) {
      event.preventDefault();

      if (reviewTextValue === "") {
        alert(
          "Please write a review before submitting! (Minimum length: 10 characters)"
        );
      } else if (!hasSelectedRating) {
        alert("Please select a star rating before submitting!");
      }
    } else {
      alert("Your review was submetited successfully!");
    }
  });
  return reviewSection;
}

const animeItems = document.querySelectorAll(".anime-item");

animeItems.forEach((animeItem) => {
  const itemId = animeItem.id;
  const reviewSection = createReviewSection(itemId);
  animeItem.appendChild(reviewSection);
});
