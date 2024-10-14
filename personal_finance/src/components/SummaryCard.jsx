const SummaryCard = ({ title, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-400 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
      <p className="text-4xl font-bold text-purple-600">{value}</p>
    </div>
  );
  
  export default SummaryCard;
  