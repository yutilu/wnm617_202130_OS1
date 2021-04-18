
const makeAnimalList = templater(o=>`
<div class="animallist-item display-flex animal-jump" data-id="${o.id}">
   <div class="flex-none animallist-image"><img src="${o.img}" alt=""></div>
   <div class="animallist-description flex-stretch">
      <div class="animallist-name">${o.name}</div>
      <div class="animallist-info">${o.type}, ${o.breed}</div>
   </div>
   
</div>
`);


const makeUserProfile = o => `
<div class="user-profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="user-profile-description">
   <div class="user-profile-name">${o.name}</div>
   <div class="user-profile-email">${o.email}</div>
</div>
`;

// const makeAnimalInfo = o => `
// <div class="animal-name">${o.name}</div>
// <div class="animal-type">${o.type}</div>
// <div class="animal-breed">${o.breed}</div>
// `;


const makeAnimalInfo = o => `
   <div class="animal-info-row">
      <div class="animal-info-title">Name</div>
      <div class="animal-info-content">
         ${o.name}
      </div>
   </div>
   <div class="animal-info-row">
      <div class="animal-info-title">Type</div>
      <div class="animal-info-content">
         ${o.type}
      </div>
   </div>
   <div class="animal-info-row">
      <div class="animal-info-title">Breed</div>
      <div class="animal-info-content">
         ${o.breed}
      </div>
   </div>
`;