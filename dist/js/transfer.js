const base_url="https://pepecoin-gannufan.herokuapp.com";document.querySelector("#confirmBtn").addEventListener("click",()=>{var e=document.querySelector("#sendTo").value,t=document.querySelector("#amount").value,o=document.querySelector("#reason").value,n=document.querySelector("#message").value;fetch(base_url+"/api/v1/transfers",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({recipient:e,reason:o,message:n,amount:t})}).then(e=>e.json()).then(e=>{window.location.href="index.html"})});