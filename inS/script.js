function nextPage() {
  window.location.href = "yes.html";
}

const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseenter", () => {
  // Move button to a random position
  noButton.style.position = "absolute";
  noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;
  noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;

});
