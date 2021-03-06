const base_url = "https://pepecoin-gannufan.herokuapp.com";
document.querySelector("#loginBtn").addEventListener("click", () => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch(base_url + '/users/login', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username":username,
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            let token = json.data.token;
            localStorage.setItem("token", token);
            let id = json.data.id
            localStorage.setItem("id", id);
            window.location.href = "index.html";
        }
        else{
            let errorDiv = document.querySelector(".error");
            let errorText = document.querySelector(".error p");
            errorText.innerHTML = json.message;
            errorDiv.classList.remove('hidden');
        }
    })
});