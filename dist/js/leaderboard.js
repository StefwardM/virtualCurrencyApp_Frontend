const base_url="https://pepecoin-gannufan.herokuapp.com";fetch(base_url+"/api/v1/leaderboard",{method:"get",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(r=>{if(console.log(r),"success"===r.status)for(let e=0;e<=r.data.users.length-1;e++){var s=`<li class="grid grid-cols-3 justify-items-stretch leaderboard mb-2 px-4">
            <p class="p--normal justify-self-start">${e+1}</p>
            <p class="p--normal justify-self-center">${r.data.users[e].ppname}</p>
            <p class="p--normal justify-self-end">${r.data.users[e].coins} PP</p>
            </li>`;document.querySelector("#leaderboard").insertAdjacentHTML("beforeend",s)}else{let e=document.querySelector(".error"),s=document.querySelector(".error p");s.innerHTML=r.message,e.classList.remove("hidden")}});