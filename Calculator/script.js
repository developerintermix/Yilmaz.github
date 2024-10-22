// function getNumber() {
//     let amount = document.getElementById("amount").value;
//     console.log(amount)
//     let term = document.getElementById("term").value;
//     console.log(term);
//     let rate = document.getElementById("rate").value;
//     console.log(rate);  

//     if (amount <= 0){
//         let amount_color = document.getElementById("card__amount-color").style.color = "red";
//         console.log(amount_color);
//     } else {
//         console.log("Succeed");
//     }

window.addEventListener('DOMContentLoaded', () => {
    addEventListenerToSubmitButton()
    addEventListenerToResetButton()
})


function addEventListenerToSubmitButton()
{
    const $submitButton = document.getElementById('mortage-calculator__submit-button')

    if ($submitButton === null) return
    
    $submitButton.addEventListener('click', () => {
        getNumber()
    })
}



function addEventListenerToResetButton()
{
    const resetButton = document.querySelector(".card__reset-button");
    
    resetButton.addEventListener("click", () => {
        document.getElementById("amount").value = "";
        document.getElementById("term").value = "";
        document.getElementById("rate").value = "";

        showMortageCalculatorPreResultsPanel();
    });
    
}



function getNumber() {
    let amount = parseFloat(document.getElementById("amount").value);
    let term = parseInt(document.getElementById("term").value);
    let rate = parseFloat(document.getElementById("rate").value);
    console.log(amount);

    if (amount <= 0 || isNaN(amount) || term <= 0 || isNaN(term) || rate <= 0 || isNaN(rate)) {
        alert("Voer geldige waarden in voor bedrag, termijn en rentepercentage.");
        return;
    }

    let monthlyRate = (rate / 100) / 12;
    let totalPayments = term * 12;

    let monthlyRepayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    let monthlyRepayment_decimals = monthlyRepayment.toFixed(2); 

    let totalRepayment = monthlyRepayment * totalPayments;
    let totalRepayment_decimals = totalRepayment.toFixed(2);
    
    // console.log(totalRepayment_decimals);
    // console.log(monthlyRate);
    // console.log(monthlyRepayment_decimals);

    showMortageCalculatorResultsPanel()

    // document.querySelector(".card__results-a").textContent = "Your results are shown below based on the information you provided.";
    // document.querySelector(".card__results-b").innerHTML = `
    //     <div style="background-color: #0d4b73; padding: 20px; border-radius: 10px;">
    //         <h2 style="margin-bottom: 10px;">Your monthly repayments</h2>
    //         <p style="font-size: 28px; color: #D8DB2F; font-weight: bold;">£${monthlyRepayment.toFixed(2)}</p>
    //         <h2 style="margin-top: 20px;">Total you'll repay over the term</h2>
    //         <p style="font-size: 24px; color: #D8DB2F; font-weight: bold;">£${totalRepayment.toFixed(2)}</p>
    //     </div>
    // `;
}



function showMortageCalculatorResultsPanel()
{
    const $preResultsPanel = document.getElementById('mortage-calculator__pre-results-panel')
    const $resultsPanel = document.getElementById('mortage-calculator__results-panel')

    // Check if the elements exist.
    if (
        $preResultsPanel === null ||
        $resultsPanel === null
    ) {
        return
    }

    $preResultsPanel.classList.add('mortage-calculator__right-panel--hidden')
    $resultsPanel.classList.remove('mortage-calculator__right-panel--hidden')
}



function showMortageCalculatorPreResultsPanel()
{
    const $preResultsPanel = document.getElementById('mortage-calculator__pre-results-panel')
    const $resultsPanel = document.getElementById('mortage-calculator__results-panel')

    // Check if the elements exist.
    if (
        $preResultsPanel === null ||
        $resultsPanel === null
    ) {
        return
    }

    $preResultsPanel.classList.remove('mortage-calculator__right-panel--hidden')
    $resultsPanel.classList.add('mortage-calculator__right-panel--hidden')
}

/*
const card_proces = document.querySelector(".card__proces");
const card_result = document.querySelector(".card__results");


function toggleCard() {
    card_proces.classList.toggle("hidden");
    card_result.classList.toggle("hidden");
}
*/
