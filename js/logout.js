document.querySelector("#logout").addEventListener("click", () => {
    window.localStorage.clear();
    window.location.href = "login.html";
});