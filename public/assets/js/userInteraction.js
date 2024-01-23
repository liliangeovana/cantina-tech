//BOTÃO CADASTRE-SE
document.addEventListener("DOMContentLoaded", function () {
    const savedScreen = localStorage.getItem("currentScreen");

    if (savedScreen === "signUpScreen") {
        showSignUpScreen();
    }

    document.getElementById("signUpScreenButton").addEventListener("click", function () {
        localStorage.setItem("currentScreen", "signUpScreen");
        showSignUpScreen();
    });

    document.getElementById("backButton").addEventListener("click", function () {
        localStorage.removeItem("currentScreen");
        showLoginScreen();
    });

    function showLoginScreen() {
        document.getElementById("loginScreen").classList.remove("hidden");
        document.getElementById("signUpScreen").classList.add("hidden");
    }

    function showSignUpScreen() {
        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("signUpScreen").classList.remove("hidden");
    }
});


