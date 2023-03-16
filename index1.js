// fetching the data
const loadAllData = async() => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  // console.log(URL);
    const res = await fetch(URL);
    const data = await res.json();
    showAllData(data.data);
    
    };
    // displaying the data
    const showAllData = (data) => {
        const mideaContainer = document.getElementById("midea-container");
        // console.log(data);
        const showAll = document.getElementById("showAll");
        data.tools.slice(0, 6).forEach(element => {
          // console.log(element.features);
          const mideaDiv = document.createElement('div');
          mideaDiv.classList.add('col');
          mideaDiv.innerHTML = `
          <div class="card p-4">
              <img src="${element.image}" class="card-img-top" alt="...">
              <div class="card-body">
               
              <h2 class="card-title">Features</h2>
     <p><ol>
    <li>Natural language processing</li>
     <li>Contextual understanding</li>
     <li>Text generation</li>
     </ol>
     <hr></hr>
                <h3 class="card-title">${element.name}</h3>
                <p class="sort-by-date">${element.published_in}</p>
                
                <button onclick="loadSingleData('${element.id}')" type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
               
            </div>
        </div>
          `;
          mideaContainer.appendChild(mideaDiv);
        });
      };
      
    loadAllData();
// show all button add
    document.getElementById("btnShowAll").addEventListener('click', function(){
     
  
  const showFinalData = async() => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    console.log(URL);
      const res = await fetch(URL);
      const data = await res.json();
      showAllFinalData(data.data);
      
      };
      const showAllFinalData = (data) => {
        const mideaAllContainer = document.getElementById("mideaAllContainer");
        data.tools.forEach(element => {
          // console.log(element.id);
          const mideaAllDiv = document.createElement('div');
          mideaAllDiv.classList.add('col');
          mideaAllDiv.innerHTML = `
          <div class="card p-4">
              <img src="${element.image}" class="card-img-top" alt="...">
              <div class="card-body">
               
              <h2 class="card-title">Features</h2>
     <p><ol>
    <li>Natural language processing</li>
     <li>Contextual understanding</li>
     <li>Text generation</li>
     </ol>
     <hr></hr>
                <h3 class="card-title">${element.name}</h3>
                <p class="sort-by-date">${element.published_in}</p>
               
            </div>
            
              
        </div>
          `;
          mideaAllContainer.appendChild(mideaAllDiv);
        });
     
      };

    
    showFinalData();
  });
  // fetching each card details data
  const loadSingleData = async id => {
    
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    // console.log(URL);
      const res = await fetch(URL);
      const data = await res.json();
      displaySingleDataDetails(data);
      
      };
// displaying each card detils data in modal

    function displaySingleDataDetails(data) {
// console.log(data.data.features);
const modalDescription = document.getElementById("modal-description");
modalDescription.innerText = data.data.description;
const modalAccuracy = document.getElementById('accuracy-rate');
modalAccuracy.innerText =  data.data.accuracy.score;
// console.log(data);
const modalPricing = document.getElementById('modal-pricing');


for(const user of data.data.pricing){
  // console.log(user.price);
  const li = document.createElement('li');
  
  li.innerText = user.price;
  
  modalPricing.appendChild(li);

}

const modalImg = document.getElementById('modal-img');
for(const user of data.data.image_link){
  // console.log(user);
  const img = document.createElement('img');
  // img.innerText = user;
img.innerHTML = `
<figure class="px-10 pt-10">
    <img src="${data.data.image_link}" alt="chatGPT" class="rounded-xl"/>
   </figure>
`;
  
  modalImg.appendChild(img);

}


const featuresIntegrations = document.getElementById("features & integrations");
featuresIntegrations.innerHTML = `
 <p><b>Integrations</b>: ${data.data.integrations}</p>
`;

};

loadSingleData();


