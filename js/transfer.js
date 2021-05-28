
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
            "recipient": sendTo,
            "reason": reason,
            "message": message,
            "amount": amount
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let transferId = json.data.transfer['_id'];
        let amount = json.data.transfer
        fetch('http://localhost:3000/api/v1/transfers'+transferId, {
            method: "put",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "recipient": sendTo,
                "reason": reason,
                "message": message,
                "amount": amount
            })
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            let transferId = json.data.transfer['_id'];
            let amount = json.data.transfer

        })
        // window.location.href = "app.html";
    })
});

