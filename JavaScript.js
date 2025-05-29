let input = "";
let operationCount = 0;

function press(val) {
  input += val;
  document.getElementById("display").value = input;
}

function clearDisplay() {
  input = "";
  document.getElementById("display").value = "";
  document.getElementById("error").textContent = "";
}

function backspace() {
  input = input.slice(0, -1);
  document.getElementById("display").value = input;
}

function calculate() {
  try {
    if (input.includes("/0")) {
      document.getElementById("error").textContent = "🚨 חילוק באפס! FBI מגיעים...";
      document.getElementById("fbi-audio").play();
      alert("FBI ALERT: חילוק באפס! FBI מגיעים...");
      clearDisplay();
      return;
    }

    const result = eval(input);
    document.getElementById("display").value = result;
    document.getElementById("history").innerHTML += `<div>${input} = ${result}</div>`;
    input = result.toString();

    operationCount++;
    if (operationCount >= 5) {
      triggerRandomError();
      operationCount = 0;
    }
  } catch (e) {
    document.getElementById("error").textContent = "שגיאה: חישוב לא חוקי";
  }
}

function triggerRandomError() {
  const errors = [
    "🤯 אתה עושה יותר מדי חישובים!",
    "🧠 המוח שלך חם מדי!",
    "⛔ שגיאה קריטית במערכת!",
    "😵 משהו נדפק פה!",
    "💣 BOOM!"
  ];
  const error = errors[Math.floor(Math.random() * errors.length)];
  document.getElementById("error").textContent = error;
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// קיצורי מקלדת
document.addEventListener("keydown", function(event) {
  const key = event.key;
  if ("0123456789+-*/.".includes(key)) {
    press(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});

function DPM() {
  window.location.href = "index2.html";
}

function WGB() {
  window.location.href = "index.html";
}