const base_url = "https://pepecoin-gannufan.herokuapp.com";

document.querySelector("#confirmBtn").addEventListener("click", () => {
    let sendTo = document.querySelector('#sendTo').value;
    let amount = document.querySelector('#amount').value;
    let reason = document.querySelector('#reason').value;
    let message = document.querySelector('#message').value;

    fetch(base_url + '/api/v1/transfers', {
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
        fetch(base_url + '/api/v1/transfers'+transferId, {
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
        // window.location.href = "index.html";
    })
});

