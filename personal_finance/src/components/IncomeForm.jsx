import React, { useState } from 'react';

const IncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncome(income);
  };

  return (
    <form className="bg-white p-4 rounded shadow-md" onSubmit={handleSubmit}>
      <label className="block font-bold mb-2">Add Income:</label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        className="w-full p-2 border rounded"
      />
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
};

export default IncomeForm;
