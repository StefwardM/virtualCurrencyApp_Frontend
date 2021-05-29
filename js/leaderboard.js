
fetch('http://localhost:3000/api/v1/leaderboard', {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    return response.json();
}).then(json => {
    for (let i = 0; i <= json.data.users.length - 1; i++){
        let position =
            `<li class="grid grid-cols-3 justify-items-stretch leaderboard mb-2 px-4">
            <p class="p--normal justify-self-start">${i+1}</p>
            <p class="p--normal justify-self-center">${json.data.users[i]['ppname']}</p>
            <p class="p--normal justify-self-end">${json.data.users[i]['coins']} PP</p>
            </li>`
        document.querySelector("#leaderboard").insertAdjacentHTML('beforeend', position);
    }
}).catch(err => {
    console.log(err);
})