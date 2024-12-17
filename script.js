let coins = 1000;
let rechargeRate = 1; // Default recharge rate
let friends = 3; // Default number of friends

// Add coins when the hamster is tapped
function addCoins() {
  coins += 10 + friends; // 10 base + bonus for friends
  updateDisplay();
}

// Recharge coins every second
setInterval(() => {
  coins += rechargeRate;
  updateDisplay();
}, 1000);

// Update display
function updateDisplay() {
  document.getElementById('coins').innerText = coins;
}

// Navigate between sections
function goTo(section) {
  alert(`Navigating to ${section}`);
}
