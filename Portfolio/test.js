document.getElementById('calculateBtn').addEventListener('click', function() {
    const mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value);
    const mortgageTerm = parseFloat(document.getElementById('mortgageTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

    if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate)) {
        document.getElementById('resultsText').textContent = 'Please fill in all fields.';
        return;
    }

    let monthlyPayment = 0;
    if (mortgageType === 'repayment') {
        const months = mortgageTerm * 12;
        const monthlyInterestRate = interestRate / 12;
        monthlyPayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    } else if (mortgageType === 'interestOnly') {
        monthlyPayment = mortgageAmount * (interestRate / 12);
    }

    monthlyPayment = monthlyPayment.toFixed(2);
    document.getElementById('resultsText').textContent = `Your monthly payment is £${monthlyPayment}`;
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('mortgageAmount').value = '';
    document.getElementById('mortgageTerm').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('repayment').checked = true;
    document.getElementById('resultsText').textContent = 'Complete the form and click "calculate repayments" to see your monthly repayments.';
});