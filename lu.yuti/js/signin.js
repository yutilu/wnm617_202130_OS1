
const checkSigninForm = async () => {
   let username = $("#signin-username").val();
   let password = $("#signin-password").val();

   if (username=='' || password=='') {
      errMsg('signin-error-message', 'Username or passworld cannot be empty')
      return;
   }

   let user = await query({
      type:'check_signin',
      params:[username,password]
   });

   if (user.result.length > 0) {
      console.log("logged in")
      sessionStorage.userId = user.result[0].id;

      $("#signin-form")[0].reset();
   } else {
      errMsg('signin-error-message', 'Incorrect username or password')
      console.log("logged out")
      sessionStorage.removeItem("userId");
   }

   checkUserId();
}


const checkUserId = () => {
   let p = ["#signin-page","#signup-page","#signup-second-page",""];

   if(sessionStorage.userId === undefined) {
      // not logged in
      if(!p.some(o=>window.location.hash===o))
         $.mobile.navigate("#signin-page");
   } else {
      // logged in
      if(p.some(o=>window.location.hash===o))
         $.mobile.navigate("#recent-page");
   }
}

const errMsg = (id, msg) => {
   const err = $(`#${id}`)
   err.html(msg)
}
