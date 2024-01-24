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
    if (/[^a-zA-ZÀ-ÖØ-öø-ÿ ]/.test(inputValue)) {
        // Se contiver números, aplicar borda vermelha
        userName.classList.remove('focus:border-blue-900');
        userName.classList.add('focus:border-red-400');
    } else {
        // Se contiver apenas letras, remover a borda vermelha
        userName.classList.remove('focus:border-red-400');
        userName.classList.add('focus:border-blue-900');
    }
});

// Campo CPF
cpf.addEventListener('input', function () {
    // Obter o valor atual do campo e remover caracteres não numéricos
    var inputValue = cpf.value.replace(/\D/g, '');

    // Atualizar o valor no campo
    cpf.value = inputValue;

});
