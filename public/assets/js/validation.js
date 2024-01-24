//CAMPOS CADASTRO
var userName = document.getElementById('singUpName')
var cpf = document.getElementById('singUpCpf');
var email = document.getElementById('signUpEmail');
var password = document.getElementById('singUpPassword');
var confirmPassword = document.getElementById('confirmPassword');

//Campo nome
userName.addEventListener('input', function () {
    var inputValue = userName.value;
   // Verificar se o valor contém apenas letras usando uma expressão regular
    if (/[^a-zA-Z]/.test(inputValue)) {
        // Se contiver números, aplicar borda vermelha
        userName.classList.remove('focus:border-blue-900');
        userName.classList.add('focus:border-red-400');
    } else {
        // Se contiver apenas letras, remover a borda vermelha
        userName.classList.remove('focus:border-red-400');
        userName.classList.add('focus:border-blue-900');
    }
});