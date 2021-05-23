
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
   <div class="change-photo-content">
      <a href="#user-upload-page" class="change-photo">Change Profile Photo</a>
   </div>
`;

// const makeAnimalInfo = o => `
// <div class="animal-name">${o.name}</div>
// <div class="animal-type">${o.type}</div>
// <div class="animal-breed">${o.breed}</div>
// <button class="form-button animal-delete" data-id="${o.id}">Delete</button>
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
   <div class="animal-info-row">
      <div class="animal-info-title">Description</div>
      <div class="animal-info-content">
         ${o.description}
      </div>
   </div>
   <button class="form-button animal-delete btn-save" data-id="${o.id}">Delete</button>
`;

/** */


const makeAnimalPopup = o => `
<div class="display-flex animal-jump" data-id="${o.animal_id?o.animal_id:o.id}">
   <div class="flex-none animal-image-thumb">
      <img src="${o.img}">
   </div>
   <div class="flex-none" style="padding:1em">
      <div class="animal-name">${o.name}</div>
      <div class="animal-type">${o.type}</div>
      <div class="animal-breed">${o.breed}</div>
   </div>
</div>
`;



// destructuring
const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <input class="form-input" type="${type}" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}
const FormControlTextarea = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <textarea class="form-input" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}">${value}</textarea>
   </div>`;
}


const FormSelectOptions = (options,selected=1) => {
   return options.reduce((r,o)=>{
      return r+`<option value="${o.id}" ${o.id===selected?'selected':''}>${o.name}</option>`
   },'');
}

const FormSelect = (options,id,selected=1) => {
   return `<div class='form-select'>
      <select id="${id}">
         ${FormSelectOptions(options,selected)}
      </select>
   </div>`;
}



const makeAnimalProfileUpdateForm = (o,namespace="animal-edit") => `
<input type="hidden" id="${namespace}-image-url" value="${o.img}">
${FormControlInput({
   namespace:namespace,
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type the animal name',
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:'type',
   displayname:'Type',
   type:'text',
   placeholder:'Type the animal type',
   value:o.type
})}
${FormControlInput({
   namespace:namespace,
   name:'breed',
   displayname:'Breed',
   type:'text',
   placeholder:'Type the animal breed',
   value:o.breed
})}
${FormControlTextarea({
   namespace:namespace,
   name:'description',
   displayname:'Description',
   type:'text',
   placeholder:'Type the animal description',
   value:o.description
})}
`



const makeUserProfileUpdateForm = (o,namespace="user-edit") => `
${FormControlInput({
   namespace:namespace,
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type your name',
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:'username',
   displayname:'Username',
   type:'text',
   placeholder:'Type your username',
   value:o.username
})}
${FormControlInput({
   namespace:namespace,
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type your email',
   value:o.email
})}
`

const makeUserPasswordUpdateForm = o => `
${FormControlInput({
   namespace:"user-edit",
   name:'old-password',
   displayname:'Old password',
   type:'password',
   placeholder:'Type your old password',
   value:''
})}
${FormControlInput({
   namespace:"user-edit",
   name:'new-password',
   displayname:'New password',
   type:'password',
   placeholder:'Type your new password',
   value:''
})}
${FormControlInput({
   namespace:"user-edit",
   name:'confirm-password',
   displayname:'Confirm password',
   type:'password',
   placeholder:'Type your new password again',
   value:''
})}
`
//=========================
const recentAnimalResult = (animals, missing_text="") =>{
   
}
//=========================


const makeAnimalListSet = (animals,missing_text="") => {
   animal_template = animals.length?
      makeAnimalList(animals):
      `<div class="animallist-item"><div class="animallist-description">${missing_text}</div></div>`

   $("#list-page .animallist").html(animal_template);
}

const capitalize = s => s[0] ? s[0].toUpperCase()+s.substr(1) : '';

const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>o?`<li class="filter" data-field="${type}" data-value="${o}">${capitalize(o)}</li>`:'')(a);
}

const makeFilterList = (animals) => {
   return `
   <li class="filter" data-field="type" data-value="">All</li>
   
   ${filterList(animals,'breed')}
   `
}