const greetingDisplay = document.getElementById("greeting-display");
const recipient = document.getElementById("recipient-input");
const greetingSelect = document.getElementById("greeting-select");
const sender = document.getElementById("sender-input");
const form = document.getElementById("form");
let msg;

form.addEventListener("input", writeGreeting);

function writeGreeting() {
    if (!sender.value) {
        msg = `Dear ${recipient.value}, ${greetingSelect.value}`;
        return greetingDisplay.textContent = msg;
    } else {
        msg = `Dear ${recipient.value}, ${greetingSelect.value} 
        Love ${sender.value}`;
        return greetingDisplay.textContent = msg;
    }
}
