var signUpForm = document.getElementById('singUpForm');
var cpf = document.getElementById('singUpCpf');
var email = document.getElementById('signUpEmail');
var password = document.getElementById('singUpPassword');

document.getElementById('registerButton').addEventListener('click', function() {
    var user = []
    user.push({
    cpf: cpf.value,
    email:email.value,
    password: password.value, 
    })
    
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('user', user);
        alert('Cadastrado')
        console.log(user);
    })
})
