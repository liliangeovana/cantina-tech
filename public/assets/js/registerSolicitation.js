var signUpForm = document.getElementById('registerSolicitationForm');
var nameInput = document.getElementById('registerSolicitationName');
var cpfInput = document.getElementById('registerSolicitationCPF');
var emailInput = document.getElementById('registerSolicitationEmail');
var schoolSelect = document.getElementById('registerSolicitationSchool');


function sendEmail(userData) {
    // Extrair os valores do objeto de usuário
    var name = userData.name;
    var cpf = userData.cpf;
    var email = userData.email;
    var school = userData.school;

    // Construir o corpo da mensagem de email com os detalhes do usuário
    const bodyMessage = `Nome: ${name} <br> CPF: ${cpf} <br> Email: ${email} <br> Escola: ${school}`;

    // Enviar email com os detalhes do usuário
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lili.ggsb@gmail.com",
        Password : "EE20FF5C1D1E63C0F9793CA8C368768417B0",
        To : 'lili.ggsb@gmail.com',
        From : "lili.ggsb@gmail.com",
        Subject : "SOLICITAÇÃO DE REGISTRO",
        Body : bodyMessage
    }).then(
      message => {
        if (message === "OK"){
            Swal.fire({
                title: "Obrigada!",
                text: "Mensagem enviada com sucesso!",
                icon: "success"
            });
        }
      }
    );
}

signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Valores dos campos de entrada
    var name = nameInput.value;
    var cpf = cpfInput.value;
    var email = emailInput.value;
    var school = schoolSelect.value;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!name || !cpf || !email ) {
        Swal.fire({
            icon: "error",
            title: "Opa!",
            text: "Por favor, preencha todos os campos."
        });
        return;
    }

    // Criar um objeto de usuário com os detalhes
    var user = {
        name: name,
        cpf: cpf,
        email: email,
        school: school
    };

    // Chamar a função para enviar o e-mail com os detalhes do usuário
    sendEmail(user);

    // Limpar os campos do formulário após o envio
    nameInput.value = "";
    cpfInput.value = "";
    emailInput.value = "";
});