 //CAMPOS LOGIN
var userLogin = document.getElementById('userLogin');
var cpfInput = document.getElementById('cpf');


var emailLogin = document.getElementById('emailLogin');
var emailInput = document.getElementById('userEmail');

var returnOption = document.getElementById('returnOption');
var returnLink = document.getElementById('returnLink');


document.addEventListener("DOMContentLoaded", function () {
    $('#cpf').inputmask();
    
    //SE SELECIONADO USUÁRIO
    cpfInput.addEventListener('focus', function () {
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


