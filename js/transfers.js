fetch('http://localhost:3000/api/v1/transfers', {
    method: "get",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(response => {
    return response.json();
}).then(json => {
    console.log(json);
    let user = json.ppname;

    for (let i = json.data.transfers.length - 1; i >= 0 ; i--){
        if(json.data.transfers[i]['sender'] === user) {
            let outgoing =
                `<li class="flex flex-row justify-around transaction mb-4">
                <p class="p--normal transaction__p transaction--outgoing">To ${json.data.transfers[i]['recipient']}</p>
                <p class="p--normal transaction__p transaction--outgoing">${json.data.transfers[i]['amount']} PP</p>
                </li>`
            document.querySelector("#transfers").insertAdjacentHTML('beforeend', outgoing);
        }

        if(json.data.transfers[i]['recipient'] === user) {
            let incoming =
                `<li class="flex flex-row justify-around transaction mb-4">
                <p class="p--normal transaction__p transaction--incoming">From ${json.data.transfers[i]['sender']}</p>
                <p class="p--normal transaction__p transaction--incoming">${json.data.transfers[i]['amount']} PP</p>
                </li>`
            document.querySelector("#transfers").insertAdjacentHTML('beforeend', incoming);
        }
    }
}).catch(err => {
    console.log(err);
})