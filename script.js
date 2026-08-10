const button = document.getElementById("helloButton");
const pinInput = document.getElementById("pinInput");
const statusMessage = document.getElementById("statusMessage");

button.addEventListener("click", function () {
  const pin = pinInput.value.trim();

  if (/^\d{6}$/.test(pin)) {
    window.open(`https://kahoot.it/?pin=${pin}`, "_blank", "noopener,noreferrer");
    statusMessage.textContent = `Opening Kahoot. Enter code: ${pin}`;
  } else {
    statusMessage.textContent = "Please enter a 6-digit PIN.";
  }
});