const jobCount = document.getElementById("jobs-count");
const totalCount = document.getElementById("total-count");
const allBtn = document.getElementById("allBtn");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");
const cardContainer = document.getElementById("card-container");


jobCount.innerText = cardContainer.childElementCount;
totalCount.innerText = cardContainer.childElementCount;


function toggleButton(id){
    // remove color
    allBtn.classList.remove("btn-primary");
    interview.classList.remove("btn-primary");
    rejected.classList.remove("btn-primary");

    // add color
    allBtn.classList.add("btn-soft");
    interview.classList.add("btn-soft");
    rejected.classList.add("btn-soft");

    id.classList.remove("btn-soft")
    id.classList.add("btn-primary")
}