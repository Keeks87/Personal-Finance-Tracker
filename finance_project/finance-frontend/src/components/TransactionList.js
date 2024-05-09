// src/components/TransactionList.js
import React from 'react';

function TransactionList() {
  // Example transactions, replace with actual data fetched from the backend
  const transactions = [
    { id: 1, date: '2024-05-01', description: 'Groceries', amount: -150 },
    { id: 2, date: '2024-05-02', description: 'Salary', amount: 3000 },
    { id: 3, date: '2024-05-03', description: 'Coffee', amount: -5 }
  ];

  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
