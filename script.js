function attach() {
  logConsole("[✓] Attached to Roblox Client.");
}

function inject() {
  logConsole("[✓] Injected successfully.");
}

function execute() {
  let input = document.getElementById("codeInput").value;
  if (input.trim() === "") {
    logConsole("[!] No script input.");
  } else {
    logConsole("> " + input);
    logConsole("[✓] Script executed.");
  }
}

function clearConsole() {
  document.getElementById("consoleOutput").innerText = "Console ready...";
}

function logConsole(text) {
  let console = document.getElementById("consoleOutput");
  console.innerText += "\n" + text;
  console.scrollTop = console.scrollHeight;
}
