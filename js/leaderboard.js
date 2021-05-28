const base_url = "https://pepecoin-gannufan.herokuapp.com";

let usernames = [];
let coins = [];
fetch(base_url + '/api/v1/leaderboard', {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    return response.json();
}).then(json => {
    console.log(json);
    for (let i = 0; i <= json.data.users.length - 1; i++){
        let position =
            `<li class="grid grid-cols-3 justify-items-stretch leaderboard mb-2 px-4">
            <p class="p--normal justify-self-start">${i+1}</p>
            <p class="p--normal justify-self-center">${json.data.users[i]['ppname']}</p>
            <p class="p--normal justify-self-end">${json.data.users[i]['coins']} PP</p>
            </li>`
        console.log(i+1);
        console.log(json.data.users[i]['ppname']);
        console.log(json.data.users[i]['coins']);
        document.querySelector("#leaderboard").insertAdjacentHTML('beforeend', position);
    }
    console.log(coins);
    console.log(usernames);
}).catch(err => {
    console.log(err);
})