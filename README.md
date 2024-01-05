# Expense-Tracker-App

Expense Tracker App
Welcome to the Expense Tracker App, a micro project created with HTML, CSS, and JavaScript. This project serves as a learning exercise, focusing on key JavaScript concepts such as arrays, objects, DOM manipulation, and local storage.

Project Overview
The Expense Tracker App helps users keep track of their expenses by allowing them to add, edit, and delete transactions. The application stores the data locally using the browser's local storage, ensuring persistence even after the user closes the browser.

Features:

Add Transactions: Users can add new transactions, including details such as the transaction name and amount.

Delete Transactions: Remove unwanted transactions from the expense list.

View Balance: The app calculates and displays the current balance based on the entered transactions.

Local Storage: Utilizes local storage to store user transactions, ensuring data persistence.

JavaScript Concepts Learned
1. Arrays: 
Arrays are used to store and manage the list of transactions. JavaScript arrays make it easy to perform operations on a collection of items.

example:

let transactions = [];

2. Objects:
Each transaction is represented as an object, containing properties such as name and amount. This allows for better organization and manipulation of transaction data.

expample: 

{
  id: 1,4. Local Storage
Local storage is used to persist user transactions even when the browser is closed. This ensures that the user's data is retained across sessions.
  text: 'Groceries',
  amount: -50
}

3. DOM Manipulation
The Document Object Model (DOM) is manipulated to dynamically update the user interface based on the user's actions. Elements are created, modified, and removed as needed.

// Example: Creating a new transaction element
function addTransactionDOM(transaction) {
  // DOM manipulation code
}

Contributions: 
Contributions to this project are welcome! If you have any suggestions for improvement or would like to add new features, feel free to open an issue or create a pull request.
