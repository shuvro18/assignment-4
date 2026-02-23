let interviewArr = [];
let rejectedArr = [];
let currentStatus = "all";

const jobCount = document.getElementById("jobs-count");
const totalCount = document.getElementById("total-count");
const allBtn = document.getElementById("allBtn");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");
const cardContainer = document.getElementById("card-container");
const interviewCount = document.getElementById("total-count-interview");
const rejectedCount = document.getElementById("total-count-rejected");
const interviewSection =document.getElementById("interview-card");
const main = document.querySelector("main");






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


    currentStatus = id
    console.log(currentStatus);

    currentBtn.classList.remove("btn-soft")
    currentBtn.classList.add("btn-primary")

    if(id === 'interview'){
        cardContainer.classList.add("hidden");
        interviewSection.classList.remove("hidden");
        interviewRender()

        if(interviewArr.length === 0){
            interviewSection.innerHTML = `
            
            <div class="bg-white p-10 text-center">
            <img class="mx-auto" src="./jobs.png" alt="">
            <h2 class="text-[1.5rem]">No jobs available</h2>
            <p class="text-neutral/50">Check back soon for new job opportunities</p>
          </div>
            
            `
        }

    }else if(id === 'allBtn'){
        cardContainer.classList.remove("hidden");
        interviewSection.classList.add("hidden");


    }else if(id === 'rejected'){

      cardContainer.classList.add("hidden");
      interviewSection.classList.remove("hidden");
      rejectedRender();
      
      if(rejectedArr.length === 0){
            interviewSection.innerHTML = `
            
            <div class="bg-white p-10 text-center">
            <img class="mx-auto" src="./jobs.png" alt="">
            <h2 class="text-[1.5rem]">No jobs available</h2>
            <p class="text-neutral/50">Check back soon for new job opportunities</p>
          </div>
            
            `
        }

    }
}




main.addEventListener("click",function(event){
    if(event.target.classList.contains("interview-btn")){

        const parentnode = event.target.parentNode.parentNode.parentNode;
        const companyName = parentnode.querySelector(".company-name").innerText;
        const position = parentnode.querySelector(".position").innerText;
        const place = parentnode.querySelector(".place").innerText;
        const description = parentnode.querySelector(".description").innerText;
        const applicent = parentnode.querySelector(".applicent");
        parentnode.querySelector(".applicent").classList.add('text-accent', 'border-accent');
        parentnode.querySelector(".applicent").classList.remove('text-gray-600');
        parentnode.querySelector(".applicent").innerText = "Interview";
        
        
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

        rejectedArr = rejectedArr.filter(item => item.companyName !== cardInfo.companyName);

        if(currentStatus === 'rejected'){

          rejectedRender()
        }

        if(currentStatus === 'interview'){

          interviewRender();

        }

        calculation()
    }

    else if(event.target.classList.contains("rejected-btn")){

        const parentnode = event.target.parentNode.parentNode.parentNode;
        const companyName = parentnode.querySelector(".company-name").innerText;
        const position = parentnode.querySelector(".position").innerText;
        const place = parentnode.querySelector(".place").innerText;
        const description = parentnode.querySelector(".description").innerText;
        const applicent = parentnode.querySelector(".applicent");
        parentnode.querySelector(".applicent").classList.add('text-secondary', 'border-secondary');
        parentnode.querySelector(".applicent").classList.remove('text-gray-600');
        parentnode.querySelector(".applicent").innerText = "Rejected";
        
        
        const cardInfo = {
            companyName,
            position,
            place,
            applicent,
            description
        }
        
        const findMach = rejectedArr.find(item => item.companyName == cardInfo.companyName)

        if(!findMach){
            rejectedArr.push(cardInfo);
        }

        interviewArr = interviewArr.filter(item => item.companyName !== cardInfo.companyName);

        if(currentStatus === 'interview'){

          interviewRender();

        }

        if(currentStatus === 'rejected'){

          rejectedRender()
        }


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
                <button class="btn btn-soft text-accent border-accent applicent">Interview</button>
              </div>
              <p class="text-[14px] text-neutral/50 description">${interviewArrs.description}</p>
              
              <div class="flex gap-3">
                <button class="btn  text-accent border-accent interview-btn">interview</button>
                <button class="btn text-secondary border-secondary rejected-btn">Rejected</button>
              </div>
              
            </div>
            
              <div class="btn p-3 bg-transparent border-gray-200 rounded-full">
                <i class="fa-regular fa-trash-can "></i>
              </div>


              
          
        `
        interviewSection.appendChild(div);
    }
}



function rejectedRender (){
    interviewSection.innerHTML = "";

    for(const rejectedArrs of rejectedArr){
       
        let div = document.createElement("div");
        div.className = "bg-white p-5 rounded-xl flex justify-between";
        div.innerHTML =`
        



            <div class=" space-y-5 ">

              <div>
                <h3 class="font-semibold company-name">${rejectedArrs.companyName}</h3>
                <p class="text-neutral/50 text-[14px] position">${rejectedArrs.position}</p>
              </div>
              
              <div class="text-neutral/60">
                <p class="text-[14px] place">${rejectedArrs.place}</p>
              </div>
              <div>
                <button class="btn btn-soft text-secondary border-secondary applicent">Rejected</button>
              </div>
              <p class="text-[14px] text-neutral/50 description">${rejectedArrs.description}</p>
              
              <div class="flex gap-3">
                <button class="btn  text-accent border-accent interview-btn">interview</button>
                <button class="btn text-secondary border-secondary rejected-btn">Rejected</button>
              </div>
              
            </div>
            
              <div class="btn p-3 bg-transparent border-gray-200 rounded-full">
                <i class="fa-regular fa-trash-can "></i>
              </div>


              
          
        `
        interviewSection.appendChild(div);
    }
}