// src/components/TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ onSubmit }) {
  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    amount: 0,
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(transaction);
  };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={transaction.date} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={transaction.description} onChange={handleChange} />
      </label>
      <label>
        Amount:
        <input type="number" name="amount" value={transaction.amount} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TransactionForm;
