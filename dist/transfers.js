const base_url="https://pepecoin-gannufan.herokuapp.com";fetch(base_url+"/api/v1/transfers",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(a=>a.json()).then(n=>{console.log(n);var t,e=n.ppname;for(let a=n.data.transfers.length-1;0<=a;a--)n.data.transfers[a].sender===e&&(t=`<li class="flex flex-row justify-around transaction mb-4">
                <p class="p--normal transaction__p transaction--outgoing">To ${n.data.transfers[a].recipient}</p>
                <p class="p--normal transaction__p transaction--outgoing">${n.data.transfers[a].amount} PP</p>
                </li>`,document.querySelector("#transfers").insertAdjacentHTML("beforeend",t)),n.data.transfers[a].recipient===e&&(t=`<li class="flex flex-row justify-around transaction mb-4">
                <p class="p--normal transaction__p transaction--incoming">From ${n.data.transfers[a].sender}</p>
                <p class="p--normal transaction__p transaction--incoming">${n.data.transfers[a].amount} PP</p>
                </li>`,document.querySelector("#transfers").insertAdjacentHTML("beforeend",t))}).catch(a=>{console.log(a)});