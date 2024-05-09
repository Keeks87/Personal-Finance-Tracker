// src/pages/Dashboard.js
import React from 'react';
import BudgetOverview from '../components/BudgetOverview';
import TransactionList from '../components/TransactionList';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <BudgetOverview />
      <TransactionList />
    </div>
  );
}

export default Dashboard;
