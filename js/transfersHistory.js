const base_url = "https://pepecoin-gannufan.herokuapp.com";
fetch(base_url + '/api/v1/transfer/history', {
    method: "get",
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(response => {
    return response.json();
}).then(json => {
    for (let i = json.data.transfers.length - 1; i >= 0 ; i--){
            let transaction =
                `<li class="flex flex-row justify-around transaction mb-4">
                <p class="p--normal transaction__p">To ${json.data.transfers[i]['recipient']}</p>
                <p class="p--normal transaction__p">${json.data.transfers[i]['amount']} PP</p>
                </li>`
            document.querySelector("#transfers").insertAdjacentHTML('beforeend', transaction);
        }
}).catch(err => {
    console.log(err);
})