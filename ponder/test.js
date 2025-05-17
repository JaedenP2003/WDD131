// Get the modal
const modal = document.getElementById("myModal");

// Get the image and modal content
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

// When the image is clicked
img.addEventListener("click", function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the close button
span.addEventListener("click", function () {
  modal.style.display = "none";
});
