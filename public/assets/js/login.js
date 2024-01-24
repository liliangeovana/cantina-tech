var cpfInput = document.getElementById('cpf');
var emailInput = document.getElementById('userEmail');
var passwordInput = document.getElementById('userPassword');
var returnLink = document.getElementById('returnLink');
var loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function (e) {
    e.preventDefault(); 

    var inputCpf = cpfInput.value;
    var inputEmail = emailInput.value.toLowerCase();  // Convertendo para minúsculas
    var inputPassword = passwordInput.value;

    // Obter os usuários armazenados no localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Procurar pelo usuário com base no CPF ou e-mail
    var foundUser = users.find(function (user) {
        return (user.cpf === inputCpf || user.email.toLowerCase() === inputEmail);
    });

    // Verificar se o usuário foi encontrado e se a senha corresponde
    if (foundUser && inputPassword === foundUser.password) {
        // Se os valores forem iguais, redirecionar para home.html
        redirectToHome();
    } else {
        // Se os valores não coincidirem, exibir uma mensagem de erro
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});

function redirectToHome() {
    window.location.href = './public/view/home.html';
}

// Adicionar um ouvinte para o link de retorno
returnLink.addEventListener('click', function () {
    // Limpar os campos de entrada ao retornar
    cpfInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
});
