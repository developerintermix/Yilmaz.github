function plus_min(knop) {
    let svgContainer = knop.querySelector("img");
    let currentState = svgContainer.getAttribute("opslaan");

if (currentState === "plus") {
    svgContainer.innerHTML = "plus"
    svgContainer.setAttribute("opslaan", "minus");
    } else {
        svgContainer.innerHTML = "min"
        svgContainer.setAttribute("opslaan", "plus");
    }
}

const acc = document.getElementsByClassName
("faq-item__accordion");
let i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function
    () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        const pannel = this.nextElementSibling;

        if(pannel.style.display === "block"){
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";
        }
    });
}