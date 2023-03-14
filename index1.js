const loadAllData = async() => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  // console.log(URL);
    const res = await fetch(URL);
    const data = await res.json();
    showAllData(data.data);
    
    };
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
  const loadSingleData = async id => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    // console.log(URL);
      const res = await fetch(URL);
      const data = await res.json();
      displaySingleDataDetails(data.data);
      
      };



const displaySingleDataDetails = data => {
console.log(data.pricing);
const modalTitle = document.getElementById("exampleModalLabel");
modalTitle.innerText = data.tool_name;
const modalDescription = document.getElementById("modal-description");
modalDescription.innerText = data.description;

// const modalImage = document.getElementById("modal-image");
// modalImage.innerHTML = `<p src="https://cdn.openai.com/research-covers/gpt-3-social.jpg"></p>
// `;
const featuresIntegrations = document.getElementById("features & integrations");
featuresIntegrations.innerHTML = `
<p><b>Integrations</b>: ${data.integrations}</p>
<p><b>Features</b>: ${data.features.feature_name ? data.features.feature_name : 'No Feature found'}</p>
`;
const modalPricing = document.getElementById("modal-pricing");
modalPricing.innerText = data.pricing;
// console.log(data.features.feature_name);
};
loadSingleData();







//         data.data.tools.slice(0, 6).forEach(element => {
//           // console.log(element.published_in.sort(customSort));
//         //    console.log(data.data.tools[0].image);
//         // console.log(data.data.tools);
//         // console.log(element.published_in);
//         const container = document.getElementById("section");
       
// const div = document.createElement('div');
// div.innerHTML = `
// <div class="card w-96 bg-base-100 shadow-2xl">
//   <figure class="px-10 pt-10">
//     <img src="${element.image}" alt="chatGPT" class="rounded-xl"/>
//   </figure>
//   <div class="card-body items-center text-center">
//     <h2 class="card-title">Features</h2>
//     <p><ol>
//     <li>1.Natural language processing</li>
//     <li>2.Contextual understanding</li>
//     <li>3.Text generation</li>
//     </ol>
//     <h2 class="card-title">${element.name}</h2>
//     <p class="sort-by-date">${element.published_in}</p>
//     <button onclick="singleDataDetailsModal('${element.id}')"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#singleDataDetailsModal">Details</button>
    
      
//     </div>
//   </div>
// </div>
// `;
// container.appendChild(div);

// }); 

//     };
//   const singleDataDetailsModal = (id) => {
// // console.log(id);
// const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

// fetch(URL).then((res) => res.json()).then((data) => singleDataDetailsModal(data));

//   };

 

 
