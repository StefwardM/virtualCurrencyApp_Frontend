const base_url="https://pepecoin-gannufan.herokuapp.com";localStorage.getItem("token")||(window.location.href="../../login.html"),fetch(base_url+"/api/v1/transfers",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>e.json()).then(t=>{var n,a=t.ppname,o=t.data.transfers.length-1;if(o<=0)document.querySelector("#transactions").insertAdjacentHTML("beforeend",`<li class="flex flex-col transaction mb-2">
            <p class="p--medium transaction__p text-center">No incoming transactions yet.</p>
            </li>`);else for(let e=0;e<o;e++)a===t.data.transfers[e].recipient&&(n=`<li class="flex flex-col transaction mb-2">
            <p class="p--normal transaction__p">You received ${t.data.transfers[e].amount} PP from ${t.data.transfers[e].sender}</p>
            <p class="p--thin transaction__p">Just now</p>
            </li>`,document.querySelector("#transactions").insertAdjacentHTML("beforeend",n))}).catch(e=>{console.log(e)}),fetch(base_url+"/users/"+localStorage.getItem("id"),{method:"get",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e=`<p class="uppercase p--bold element--coins">${e.coins} PP</p>`;document.querySelector(".balance").insertAdjacentHTML("afterend",e)}).catch(e=>{console.log(e)});