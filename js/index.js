
const base_url = "https://pepecoin-gannufan.herokuapp.com";


// let primus = Primus.connect("http://localhost:3000", {
//     reconnect: {
//         max: Infinity,
//         min: 500,
//         retries: 10
//     }
// });


if(!localStorage.getItem("token")){
    window.location.href = "../login.html";
}

fetch(base_url + "/api/v1/transfers", {
    'headers': {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(result => {
    return result.json();
}).then(json => {
    let user = json.ppname;
    let length = json.data.transfers.length - 1;

    if (length <= 0) {
        let noTransaction =
            `<li class="flex flex-col transaction mb-2">
            <p class="p--medium transaction__p text-center">No incoming transactions yet.</p>
            </li>`
        document.querySelector("#transactions").insertAdjacentHTML('beforeend', noTransaction);
    } else {
        for (let i = 0; i < length; i++) {
            if (user === json.data.transfers[i]['recipient']) {
                let transaction =
                    `<li class="flex flex-col transaction mb-2">
            <p class="p--normal transaction__p">You received ${json.data.transfers[i]['amount']} PP from ${json.data.transfers[i]['sender']}</p>
            <p class="p--thin transaction__p">Just now</p>
            </li>`
                document.querySelector("#transactions").insertAdjacentHTML('beforeend', transaction);
            }

        }
    }
}).catch(err => {
    console.log(err);
})

fetch(base_url + '/users/' + localStorage.getItem('id'), {
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