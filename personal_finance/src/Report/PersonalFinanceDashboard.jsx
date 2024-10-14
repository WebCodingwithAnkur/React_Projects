import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // This is useful for generating tables in PDFs

const PersonalFinanceDashboard = ({totalExpenses,expenses}) => { 
    const exportToPDF = () => {
            const doc = new jsPDF();

            // Set title
            doc.setFontSize(20);
            doc.text('Personal Finance Report', 14, 22);

            // Prepare data for the table
            const expensesData = expenses.map(exp => [exp.category, exp.amount]);
            
            // Adding a table
            autoTable(doc, {
                head: [['Description', 'Amount']],
                body: expensesData,
                startY: 30,
                theme: 'striped', // Optional: apply a theme
            });

            // Add total expenses
            doc.text(`Total Expenses: $${totalExpenses}`, 14, doc.autoTable.previous.finalY + 10);

            // Save the PDF
            doc.save('personal_finance_report.pdf');
            };

            return(
                <div className="mt-4 flex justify-end">
                     {/* Your existing components */}      
                    <button disabled={totalExpenses <= 0 || expenses.length === 0} onClick={exportToPDF} 
                    className={`py-2 px-6 rounded-lg shadow-lg focus:outline-none transform transition-transform
                        ${
                          totalExpenses > 0 && expenses.length > 0
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 hover:scale-105'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}>
                        Export to PDF
                    </button>
                </div>
            )
}

export default PersonalFinanceDashboard;
