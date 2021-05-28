fetch("http://localhost:3000/api/v1/transfers", {
    'headers': {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(result => {
    return result.json();
}).then(json => {
    console.log(json);
    let user = json.ppname;
    console.log()
    for (let i = 0; i < json.data.transfers.length - 1; i++) {
        if (user === json.data.transfers[i]['recipient']) {
            let transaction =
                `<li class="flex flex-col transaction mb-2">
            <p class="p--normal transaction__p">You received ${json.data.transfers[i]['amount']} PP from ${json.data.transfers[i]['sender']}</p>
            <p class="p--thin transaction__p">Just now</p>
            </li>`
            document.querySelector("#transactions").insertAdjacentHTML('beforeend', transaction);
        }

    }
}).catch(err =>{
    console.log(err);
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