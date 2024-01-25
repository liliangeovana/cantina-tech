//CAMPOS LOGIN
var cpfLogin = document.getElementById('cpf');
var userLoginCpf = document.getElementById('userLogin')

//CAMPOS CADASTRO
var userName = document.getElementById('singUpName')
var cpf = document.getElementById('singUpCpf');
var email = document.getElementById('signUpEmail');
var password = document.getElementById('singUpPassword');
var confirmPassword = document.getElementById('confirmPassword');
var Error = document.getElementById('Error');



//Campo nome
userName.addEventListener('input', function () {
    var inputValue = userName.value;
   // Verificar se o valor contém apenas letras usando uma expressão regular
    if (/[^a-zA-ZÀ-ÖØ-öø-ÿ ]/.test(inputValue) ) {
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
function formatarCPF(campoCPF) {
    campoCPF.addEventListener('input', function () {
        // Obter o valor atual do campo e remover caracteres não numéricos
        var inputValue = campoCPF.value.replace(/\D/g, '');

        // Limitar a quantidade de caracteres para 11
        if (inputValue.length > 11) {
            inputValue = inputValue.slice(0, 11);
        }

        // Formatando o CPF (XXX.XXX.XXX-XX)
        if (inputValue.length > 3) {
            const groups = inputValue.match(/(\d{1,3})/g).filter(Boolean);
            inputValue = groups.join('.');
  
            if (groups.length > 2) {
                const lastGroup = groups.pop();
                inputValue = groups.join('.') + '-' + lastGroup;
            }
        }

        // Atualizar o valor no campo
        campoCPF.value = inputValue;
    });
}

// Aplicar formatação para o campo 'cpf'
formatarCPF(cpf);









// Campo Confirmar Senha
confirmPassword.addEventListener('input', function () {
    var inputPasswordValue = password.value;
    var inputConfirmPasswordValue = confirmPassword.value;

    confirmPassword.classList.remove('focus:border-blue-900');

    // Verificar se o valor da confirmação de senha coincide com a senha
    if (inputConfirmPasswordValue === inputPasswordValue) {
        // Se coincidir, remover a borda vermelha e adicionar a borda verde
        confirmPassword.classList.remove('focus:border-red-400');
        confirmPassword.classList.add('focus:border-green-500');

        // Limpar a mensagem de erro
        Error.textContent = '';
    } else {
        // Se não coincidir, remover a borda verde e adicionar a borda vermelha
        confirmPassword.classList.remove('focus:border-green-500');
        confirmPassword.classList.add('focus:border-red-400');

        // Exibir a mensagem de erro
        Error.textContent = 'As senhas não coincidem';
    }
});