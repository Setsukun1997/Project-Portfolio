const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionList = document.getElementById('transaction-list');
const incomeDisplay = document.getElementById('income');
const expenseDisplay = document.getElementById('expense');
const balanceDisplay = document.getElementById('balance');

let transactions = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  const transaction = {
    id: Date.now(),
    description,
    amount
  };

  transactions.push(transaction);
  updateUI();
  descriptionInput.value = '';
  amountInput.value = '';
});

function updateUI() {
  transactionList.innerHTML = '';
  let income = 0, expense = 0;

  transactions.forEach(tx => {
    const li = document.createElement('li');
    li.textContent = `${tx.description}: ${tx.amount}`;
    transactionList.appendChild(li);

    if (tx.amount > 0) income += tx.amount;
    else expense += Math.abs(tx.amount);
  });

  incomeDisplay.textContent = income.toFixed(2);
  expenseDisplay.textContent = expense.toFixed(2);
  balanceDisplay.textContent = (income - expense).toFixed(2);
}
