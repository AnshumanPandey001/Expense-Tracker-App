const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

/*
const dummyTransactions = [
    {
        id: 1,
        text: "flower",
        amount: -20
    },
    {
        id: 2,
        text: "Salary",
        amount: 300
    },
    {
        id: 3,
        text: "book",
        amount: -10
    },
    {
        id: 4,
        text: "camera",
        amount: 150
    }
] */



const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions:[];

function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim === "" || amount.value.trim() === "") {
        alert("Please Enter Text and Value");
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateLoacalStorage();
        upadteValues();
        text.value = '';
        amount.value = '';
    }

};

function generateID() {
    return Math.floor(Math.random()*10000000);
}

function addTransactionDOM(transactions){
    const sign = transactions.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(
        transactions.amount < 0 ? "minus" : "plus"
    )

    item.innerHTML = `
  ${transactions.text}<span>${sign}${Math.abs(transactions.amount)}</span>
  <button class="delete-btn" onclick="removeTransaction(${transactions.id})">x</button>
  `;

    list.appendChild(item);
}

// remove function

function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    Init();
    updateLoacalStorage();
  }

function upadteValues() {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expence = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expence}`;
}

// Local storage functionalies
function updateLoacalStorage(){
    localStorage.setItem(
        "transactions",JSON.stringify(transactions)
    );
}

function Init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    upadteValues();
}
Init();
form.addEventListener("submit", addTransaction)