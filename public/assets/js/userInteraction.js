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
    var usernameLabel = document.getElementById('userLabel');
    var usernameInput = document.getElementById('username');

    var emailInput = document.getElementById('userEmail');
    var emailLabel = document.getElementById('emailLabel');

    var returnOption = document.getElementById('returnOption');
    var returnLink = document.getElementById('returnLink');

    //SE SELECIONADO USUÁRIO
    usernameInput.addEventListener('focus', function () {
        emailLabel.style.display = 'none';
        emailInput.style.display = 'none';
        returnOption.style.display = 'block';
    });

    //SE SELECIONADO EMAIL
    emailInput.addEventListener('focus', function () {
        username.style.display = 'none';
        usernameLabel.style.display = 'none';
        returnOption.style.display = 'block';
    });

    //VOLTAR ÀS OPÇÕES
    returnLink.addEventListener('click', function () {
        usernameInput.style.display = 'block';
        usernameLabel.style.display = 'block';
        emailInput.style.display = 'block';
        emailLabel.style.display = 'block';
        returnOption.style.display = 'none';
    })
});


