const button = document.getElementById("helloButton");
const pinInput = document.getElementById("pinInput");
const statusMessage = document.getElementById("statusMessage");

button.addEventListener("click", function () {
  const pin = pinInput.value.trim();

  if (/^\d+$/.test(pin)) {
    const kahootUrl = `https://kahoot.it/?pin=${pin}`;
    const newWindow = window.open(kahootUrl, "_blank", "noopener,noreferrer");

    if (!newWindow) {
      window.location.href = kahootUrl;
    }

    statusMessage.textContent = `Opening Kahoot with code: ${pin}`;
  } else {
    statusMessage.textContent = "Please enter a numeric PIN.";
  }
});