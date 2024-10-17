// function
// function getNumber() {
//     let amount = document.getElementById("rate");
//     console.log(amount)
// }

function getNumber() {
    let amount = document.getElementById("amount").value;
    console.log(amount)
    let term = document.getElementById("term").value;
    console.log(term);
    let rate = document.getElementById("rate").value;
    console.log(rate);  

    if (amount <= 0){
        let amount_color = document.getElementById("card__amount-color").style.color = "red";
        console.log(amount_color);
    } else {
        console.log("Succeed");
    }

    

    // if (term <= 0){
    //     let term_color = document.getElementById("card__term-color").style.color = "red";
    //     console.log(term_color);
    // } else {
    //     console.log("Succeed");
    // }

    // if (rate <= 0){
    //     let rate_color = document.getElementById("card__rate-color").style.color = "red";
    //     console.log(rate_color);
    // } else {
    //     console.log("Succeed");
    // }


}
