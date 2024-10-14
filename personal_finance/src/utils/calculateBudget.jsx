const calculateBudget = (income, totalExpenses) => {
  const remainingAfterExpenses = income - totalExpenses;
  return Math.max(remainingAfterExpenses, 0);
  };
  
  export default calculateBudget;
  