document.querySelector("#sendTo").addEventListener("keyup", () => {
    let sendTo = document.querySelector('#sendTo').value;

    fetch('http://localhost:3000/users/', {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json);

    }).catch(err => {
        console.log(err);
    })
});

document.querySelector("#confirmBtn").addEventListener("click", () => {
    let sendTo = document.querySelector('#sendTo').value;
    let amount = document.querySelector('#amount').value;
    let reason = document.querySelector('#reason').value;
    let message = document.querySelector('#message').value;

    fetch('http://localhost:3000/api/v1/transfers', {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            "sender": localStorage.getItem("id"),
            "recipient": sendTo,
            "reason": reason,
            "message": message,
            "amount": amount
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        // if(json.status === "success") {
        //     let feedback = document.querySelector(".alert");
        //     feedback.textContent = "Transfer sent!";
        //     feedback.classList.remove('hidden');
        //
        //     let token = json.data.token;
        //     localStorage.setItem("token", token);
        //     window.location.href = "login.html";
        // }
    })
});