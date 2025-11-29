document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".form-status").textContent =
    "Thank you! Your message has been sent.";
});
