const base_url = "https://pepecoin-gannufan.herokuapp.com";

/*const btnSignup = */document.querySelector(".mobile div button").addEventListener("click", () => {
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
        console.log(json);
        if(json.status === "success") {
            let token = json.data.token;
            localStorage.setItem("token", token);
            let id = json.data.id
            localStorage.setItem("id", id);
            window.location.href = "index.html";
        }
        else{
            let feedback = document.querySelector(".alert");
            feedback.textContent = "Login failed compadre!";
            feedback.classList.remove('hidden');
        }

    })
});