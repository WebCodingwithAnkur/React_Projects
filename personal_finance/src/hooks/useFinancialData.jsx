import { useState, useMemo, useCallback } from 'react';

const useFinancialData = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addIncome = useCallback((amount) => setIncome(amount), []);

  // with callback
  const addExpense = useCallback(
    (expense) => { 
      setExpenses((prev) => [...prev, expense])
     }, []);

// without callback
  // const addExpense = (expense) => {
  //   console.log('addExpense function created');
  //   setExpenses((prev) => [...prev, expense]);
  // };
  

  const totalExpenses = useMemo(() => {
      //console.log('Calculating total expenses...');
      return expenses.reduce((total, exp) => total + exp.amount, 0);    
     },[expenses]);

  // const totalExpenses = expenses.reduce((total, exp) => total + exp.amount, 0);
  // console.log('Calculating total expenses...');

  const remainingBudget = useMemo(
    () => income - totalExpenses,
    [income, totalExpenses]
  );

  return {
    income,
    expenses,
    totalExpenses,
    remainingBudget,
    addIncome,
    addExpense,
  };
};

export default useFinancialData;
