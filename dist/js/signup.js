const base_url="https://pepecoin-gannufan.herokuapp.com";document.querySelector("#signUpBtn").addEventListener("click",()=>{var e=document.querySelector("#email").value,t=document.querySelector("#username").value,n=document.querySelector("#firstname").value,o=document.querySelector("#lastname").value,a=document.querySelector("#password").value;fetch(base_url+"/users/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,ppname:t,firstname:n,lastname:o,password:a})}).then(e=>e.json()).then(e=>{"success"===e.status&&(e=e.data.token,localStorage.setItem("token",e),window.location.href="login.html")})});