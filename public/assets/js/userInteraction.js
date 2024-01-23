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


    //CAMPOS
    var userLogin = document.getElementById('userLogin');
    var usernameInput = document.getElementById('username')

    var emailLogin = document.getElementById('emailLogin');
    var emailInput = document.getElementById('userEmail')

    var returnOption = document.getElementById('returnOption');
    var returnLink = document.getElementById('returnLink');

    //SE SELECIONADO USUÁRIO
    usernameInput.addEventListener('focus', function () {
        emailLogin.style.display = 'none';
        returnOption.style.display = 'block';
    });

    //SE SELECIONADO EMAIL
    emailInput.addEventListener('focus', function () {
        userLogin.style.display = 'none';
        returnOption.style.display = 'block';
    });

    //VOLTAR ÀS OPÇÕES
    returnLink.addEventListener('click', function () {
        userLogin.style.display = 'flex';
        emailLogin.style.display = 'flex';
        returnOption.style.display = 'none';
    })
});


