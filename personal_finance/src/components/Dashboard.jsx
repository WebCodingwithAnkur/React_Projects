import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import SummaryCard from './SummaryCard';
import Chart from './Chart';
import IncomeForm from './incomeForm';
import withLoading from '../hoc/withLoading';
import useFinancialData from '../hooks/useFinancialData';
import PersonalFinanceDashboard from '../Report/PersonalFinanceDashboard';





const SummaryCardwithLoading = withLoading(SummaryCard);

const Dashboard = () => {

   // Use the custom hook
   const { income, expenses, totalExpenses, remainingBudget, addIncome, addExpense } = useFinancialData();


  //const [income, setIncome] = useState(0);
  //const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddIncome = (income) => {    
        addIncome(Number(income));
  };

  const handleAddExpense = (newExpense) => {  
    
      addExpense(newExpense);  // Add expense using the hook
  
  };

  //  const totalExpenses = useMemo(() => {
  //   return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  // }, [expenses]);



  // const handleAddIncome = useCallback((newIncome) => {
  //   //setIncome(newIncome);
  //    addIncome(Number())
  // }, []);

  // const handleAddExpense = useCallback((newExpense) => {
  //   setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  // }, []);


  // const totalExpenses = useMemo(() => {
  //   return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  // }, [expenses]);

  // const remainingBudget = useMemo(() => {
  //   return calculateBudget(income, totalExpenses);
  // }, [income, totalExpenses]);

   // Simulate a loading delay (e.g., for fetching data)
   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard p-6 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-5xl font-extrabold text-purple-700">Personal Finance Tracker</h1>
        <p className="text-lg text-gray-600 mt-2">Track your income and  expenses</p>
        <PersonalFinanceDashboard  totalExpenses={totalExpenses} expenses={expenses} />
         {/* Export to PDF Button below the header */}
        
      </header>
      {/* Forms and Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncomeForm onAddIncome={handleAddIncome} />
        <ExpenseForm onAddExpense={handleAddExpense} />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <SummaryCardwithLoading  isLoading={loading}  title="Total Income" value={income} />
        <SummaryCardwithLoading  isLoading={loading}  title="Total Expenses" value={totalExpenses} />
        <SummaryCardwithLoading  isLoading={loading}  title="Remaining Budget" value={remainingBudget} />
      </div>
      {/* <ProgressBar value={remainingBudget} max={savingsGoal} label="Savings Progress" /> */}
      <div className="mt-8">
      <Chart data={expenses} />
      </div>
    </div>
  );
};

export default Dashboard;
