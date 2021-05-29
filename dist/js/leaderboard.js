const base_url="https://pepecoin-gannufan.herokuapp.com";fetch(base_url+"/api/v1/leaderboard",{method:"get",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(s=>{for(let e=0;e<=s.data.users.length-1;e++){var a=`<li class="grid grid-cols-3 justify-items-stretch leaderboard mb-2 px-4">
            <p class="p--normal justify-self-start">${e+1}</p>
            <p class="p--normal justify-self-center">${s.data.users[e].ppname}</p>
            <p class="p--normal justify-self-end">${s.data.users[e].coins} PP</p>
            </li>`;document.querySelector("#leaderboard").insertAdjacentHTML("beforeend",a)}}).catch(e=>{console.log(e)});