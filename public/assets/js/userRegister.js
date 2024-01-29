var userRegisterForm = document.getElementById('userRegisterForm');
var userRegisterNameInput = document.getElementById('userRegisterName');
var userRegisterCpfInput = document.getElementById('userRegisterCPF');
var userRegisterEmailInput = document.getElementById('userRegisterEmail');
var userRegisterNumberInput = document.getElementById('userRegisterNumber');
var userRegisterSchool = document.getElementById('userRegisterSchool');
var userRegisterpasswordInput = document.getElementById('userRegisterPassword');


document.getElementById('registerButton').addEventListener('click', function(e) {
    e.preventDefault();

    // valores dos campos de entrada
    var name = userRegisterNameInput.value;
    var cpf = userRegisterCpfInput.value;
    var email = userRegisterEmailInput.value;
    var number = userRegisterNumberInput.value;
    var school = userRegisterSchool.value;
    var password = userRegisterpasswordInput.value;

    //usuários já cadastrados do localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Adicionar o novo usuário ao array
    if(!name || !cpf || !email || !number || !password){
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
            number: number,
            school: school,
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