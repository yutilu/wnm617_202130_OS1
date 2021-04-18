
const RecentPage = async () => {}

const ListPage = async () => {
   let animals = await query({
      type:'animals_by_user_id',
      params:[sessionStorage.userId]
   });

   console.log(animals)

   animal_template = animals.result.length?
      makeAnimalList(animals.result):
      `<div class="animallist-item"><div class="animallist-description">No animals yet. Try adding some.</div></div>`

   $("#list-page .animallist").html(animal_template);
}

const UserProfilePage = async () => {
   let user = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   });

   $("#user-profile-page .profile")
      .html(makeUserProfile(user.result[0]));
}

const AnimalProfilePage = async () => {
   let r = await query({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   });
   let animal = r.result[0];
   console.log(animal)

   if(!$("#animal-profile-page .active").length) {
      $("#animal-profile-page .animal-nav li:first-child").addClass("active")
      $("#animal-profile-page .animal-bottom-section:first-child").addClass("active")
   }

   $("#animal-profile-page .animal-top")
      .css({backgroundImage:`url(${animal.img})`})
   $("#animal-profile-page .animal-info")
      .html(makeAnimalInfo(animal));

}