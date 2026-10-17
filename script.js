const form = document.getElementById("contact-form");
const response = document.getElementById("form-response");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  response.textContent = "Thanks, " + name + "! Your message was received.";
  form.reset();
});
