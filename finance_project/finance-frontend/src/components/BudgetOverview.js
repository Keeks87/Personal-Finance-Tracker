// src/components/BudgetOverview.js
import React from 'react';

function BudgetOverview() {
  // Example budget data, replace with actual data
  const budget = {
    total: 2000,
    spent: 1155,
    remaining: 845,
  };

  return (
    <div>
      <h2>Budget Overview</h2>
      <p>Total Budget: ${budget.total}</p>
      <p>Spent: ${budget.spent}</p>
      <p>Remaining: ${budget.remaining}</p>
    </div>
  );
}

export default BudgetOverview;
