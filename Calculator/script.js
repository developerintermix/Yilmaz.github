window.addEventListener('DOMContentLoaded', () => {
    addEventListenerToSubmitButton()
    addEventListenerToResetButton()
})

function addEventListenerToSubmitButton() {
    const $submitButton = document.getElementById('mortage-calculator__submit-button')

    if ($submitButton === null) return
    
    $submitButton.addEventListener('click', () => {
        getNumber()
    })
}

function addEventListenerToResetButton() {
    const resetButton = document.querySelector(".card__reset-button");
    
    resetButton.addEventListener("click", () => {
        document.getElementById("amount").value = "";
        document.getElementById("term").value = "";
        document.getElementById("rate").value = "";

        // Reset any invalid classes when reset button is clicked
        const inputs = document.querySelectorAll(".card__input");
        inputs.forEach(input => {
            input.classList.remove("invalid");
        });

        showMortageCalculatorPreResultsPanel();
    });
}

function getNumber() {
    let amount = parseFloat(document.getElementById("amount").value);
    let term = parseInt(document.getElementById("term").value);
    let rate = parseFloat(document.getElementById("rate").value);

    // If any field is invalid, mark them with the 'invalid' class and return
    if (
        amount <= 0 || 
        isNaN(amount) ||
        term <= 0 || 
        isNaN(term) ||
        rate <= 0 ||
        isNaN(rate)
    ) {
        const inputs = document.querySelectorAll(".card__input");
        inputs.forEach(checkIfFieldIsFilled);        
        return;
    }

    // If all fields are valid, remove the 'invalid' class
    const inputs = document.querySelectorAll(".card__input");
    inputs.forEach(input => {
        input.classList.remove("invalid");
    });

    let monthlyRate = (rate / 100) / 12;
    let totalPayments = term * 12;

    let monthlyRepayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    let monthlyRepayment_decimals = monthlyRepayment.toFixed(2); 

    let totalRepayment = monthlyRepayment * totalPayments;
    let totalRepayment_decimals = totalRepayment.toFixed(2);
    
    document.getElementById("monthlyResult").innerHTML = "£" + monthlyRepayment_decimals;
    document.getElementById("totalResult").innerHTML = "£" + totalRepayment_decimals;

    showMortageCalculatorResultsPanel();
}

function checkIfFieldIsFilled(input) {
    if (input.value.length === 0 || input.value <= 0) {
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
    }
}

function showMortageCalculatorResultsPanel() {
    const $preResultsPanel = document.getElementById('mortage-calculator__pre-results-panel');
    const $resultsPanel = document.getElementById('mortage-calculator__results-panel');

    if ($preResultsPanel === null || $resultsPanel === null) {
        return;
    }

    $preResultsPanel.classList.add('mortage-calculator__right-panel--hidden');
    $resultsPanel.classList.remove('mortage-calculator__right-panel--hidden');
}

function showMortageCalculatorPreResultsPanel() {
    const $preResultsPanel = document.getElementById('mortage-calculator__pre-results-panel');
    const $resultsPanel = document.getElementById('mortage-calculator__results-panel');

    if ($preResultsPanel === null || $resultsPanel === null) {
        return;
    }

    $preResultsPanel.classList.remove('mortage-calculator__right-panel--hidden');
    $resultsPanel.classList.add('mortage-calculator__right-panel--hidden');
}
