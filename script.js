const button = document.getElementById("helloButton");
const pinInput = document.getElementById("pinInput");

button.addEventListener("click", function () {
  const pin = pinInput.value.trim();

  if (/^\d{6}$/.test(pin)) {
    alert("PIN accepted!");
  } else {
    alert("Please enter a 6-digit PIN.");
  }
});