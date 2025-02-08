// Redirect to a success page when clicking Yes
function nextPage() {
  window.location.href = "yes.html";
}

// Move No button randomly to avoid being clicked
function moveButton() {
  const noButton = document.getElementById("noButton");
  const container = document.querySelector(".buttons");

  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  let newLeft = Math.random() * (containerRect.width - buttonRect.width);
  let newTop = Math.random() * (containerRect.height - buttonRect.height);

  noButton.style.position = "absolute";
  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
}