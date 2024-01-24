var signUpForm = document.getElementById('singUpForm');
var nameInput = document.getElementById('singUpName');
var cpfInput = document.getElementById('singUpCpf');
var emailInput = document.getElementById('signUpEmail');
var passwordInput = document.getElementById('singUpPassword');


document.getElementById('registerButton').addEventListener('click', function(e) {
    e.preventDefault();
    // valores dos campos de entrada
    var name = nameInput.value;
    var cpf = cpfInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    //usuários já cadastrados do localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Adicionar o novo usuário ao array
    if(!name || !cpf || !email || !password){
        Swal.fire({
            icon: "error",
            title: "Opa!",
            text: "Por favor, preencha todos os campos.",
          });
        return
    }else{
        users.push({
            name: name,
            cpf: cpf,
            email: email,
            password: password
        });
    }
    

    // Atualize os usuários no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
        title: "Cadastro realizado",
        icon: "success",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `Login`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            // Redirecionar para a tela de login
            window.location.href = "../../index.html";
        }
      });
    console.log(users);
});

