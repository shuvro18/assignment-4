let interviewArr = [];
let rejectedArr = [];

const jobCount = document.getElementById("jobs-count");
const totalCount = document.getElementById("total-count");
const allBtn = document.getElementById("allBtn");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");
const cardContainer = document.getElementById("card-container");
const interviewCount = document.getElementById("total-count-interview");
const rejectedCount = document.getElementById("total-count-rejected");
const interviewSection =document.getElementById("interview-card");






function calculation(){
    totalCount.innerText = cardContainer.childElementCount;
    interviewCount.innerText = interviewArr.length;
    rejectedCount.innerText = rejectedArr.length;
    jobCount.innerText =cardContainer. childElementCount

}
calculation()


function toggleButton(id){
    // remove color
    allBtn.classList.remove("btn-primary");
    interview.classList.remove("btn-primary");
    rejected.classList.remove("btn-primary");

    // add color
    allBtn.classList.add("btn-soft");
    interview.classList.add("btn-soft");
    rejected.classList.add("btn-soft");

    const currentBtn = document.getElementById(id);
    currentBtn.classList.remove("btn-soft")
    currentBtn.classList.add("btn-primary")

    if(id === 'interview'){
        cardContainer.classList.add("hidden");
        interviewSection.classList.remove("hidden");
    }else if(id === 'allBtn'){
        cardContainer.classList.remove("hidden");
        interviewSection.classList.add("hidden");
    }
}


cardContainer.addEventListener("click",function(event){
    if(event.target.classList.contains("interview-btn")){
        const parentnode = event.target.parentNode.parentNode.parentNode;
        const companyName = parentnode.querySelector(".company-name").innerText;
        const position =parentnode.querySelector(".position").innerText;
        const place =parentnode.querySelector(".place").innerText;
        const applicent =parentnode.querySelector(".applicent").innerText;
        const description =parentnode.querySelector(".description").innerText;
        
        const cardInfo = {
            companyName,
            position,
            place,
            applicent,
            description
        }
        
        const findMach = interviewArr.find(item => item.companyName == cardInfo.companyName)

        if(!findMach){
            interviewArr.push(cardInfo);
        }
        interviewRender ()

        calculation()
    }
})


function interviewRender (){
    interviewSection.innerHTML = "";

    for(const interviewArrs of interviewArr){
        let div = document.createElement("div");
        div.className = "bg-white p-5 rounded-xl flex justify-between";
        div.innerHTML =`
        



            <div class=" space-y-5 ">

              <div>
                <h3 class="font-semibold company-name">${interviewArrs.companyName}</h3>
                <p class="text-neutral/50 text-[14px] position">${interviewArrs.position}</p>
              </div>
              
              <div class="text-neutral/60">
                <p class="text-[14px] place">${interviewArrs.place}</p>
              </div>
              <div>
                <button class="btn btn-soft text-gray-600 abalable applicent">Not Applied</button>
              </div>
              <p class="text-[14px] text-neutral/50 description">${interviewArrs.description}</p>
              
              <div class="flex gap-3">
                <button class="btn  text-accent border-accent interview-btn">interview</button>
                <button class="btn text-secondary border-secondary rejected-btn">Rejected</button>
              </div>
              
            </div>
            
              <dib class="btn p-3 bg-transparent border-gray-200 rounded-full">
                <i class="fa-regular fa-trash-can "></i>
              </dib>


              
          
        `
        interviewSection.appendChild(div);
    }
}