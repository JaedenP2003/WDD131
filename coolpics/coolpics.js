document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.getElementById("toggleMenu");
  const navItems = document.getElementById("navItems");

  toggleMenu.addEventListener("click", function () {
    navItems.classList.toggle("hide");
  });

  // Responsive handling
  function handleResize() {
    if (window.innerWidth > 1000) {
      navItems.classList.remove("hide");
    } else {
      navItems.classList.add("hide");
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  // Modal logic
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");
  const images = document.querySelectorAll(".gallery-img");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src.replace("-sm", "-full"); // optional: show full image
      modal.showModal();
    });
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});

