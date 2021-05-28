/*const btnSignup = */document.querySelector("#signUpBtn").addEventListener("click", () => {
    let email = document.querySelector('#email').value;
    let username = document.querySelector('#username').value;
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let password = document.querySelector('#password').value;

    fetch('http://localhost:3000/users/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": email,
            "ppname":username,
            "firstname":firstname,
            "lastname":lastname,
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            // let feedback = document.querySelector(".alert");
            // feedback.textContent = "Sign up complete!";
            // feedback.classList.remove('hidden');

            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "login.html";
        }
    })
});