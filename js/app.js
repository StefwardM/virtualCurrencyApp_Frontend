fetch("http://localhost:3000/api/v1/transfers", {
    'headers': {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(result => {
    return result.json();
}).then(json => {
    console.log(json);
}).catch(err =>{
    console.log("🤠🤠🤠");
    window.location.href = "login.html";
})

fetch('http://localhost:3000/users/' + localStorage.getItem('id'), {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    return response.json();
}).then(json => {
    let amount =
        `<p class="uppercase p--bold element--coins">${json.coins} PP</p>`;
    document.querySelector(".balance").insertAdjacentHTML('afterend', amount);
}).catch(err => {
    console.log(err);
})