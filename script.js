// login button event handler
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
// function to update the span tag text
function updateSpanText(newAmount, id) {
  document.getElementById(id).innerText = parseFloat(document.getElementById(id).innerText) + newAmount;
}

// Deposit button event handler
const depositButton = document.getElementById("deposit-button");
depositButton.addEventListener("click", function () {
  const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
  updateSpanText(depositAmount, 'current-deposit');
  updateSpanText(depositAmount, 'current-balance');
  document.getElementById('deposit-amount').value = '';
});

// Withdraw Button event handler

const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function () {
  const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
  updateSpanText(withdrawAmount, 'current-withdraw');
  updateSpanText(-1 * withdrawAmount, 'current-balance');
  document.getElementById('withdraw-amount').value = '';
});