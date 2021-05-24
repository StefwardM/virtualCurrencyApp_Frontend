/*const btnSignup = */document.querySelector(".mobile div button").addEventListener("click", () => {
    let username = document.querySelector('#email').value;
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let password = document.querySelector('#password').value;

    fetch('http://localhost:3000/users/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username":username,
            "firstname":firstname,
            "lastname":lastname,
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            let feedback = document.querySelector(".alert");
            feedback.textContent = "Sign up complete!";
            feedback.classList.remove('hidden');

            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "login.html";
        }
    })
});