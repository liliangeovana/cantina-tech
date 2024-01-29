document.getElementById('logOutButton').addEventListener('click', function() {
    var userDecision = confirm("Deseja limpar o localStorage ao sair?");

    if (userDecision) {
        // Limpar o localStorage
        localStorage.clear();
        alert("localStorage limpo. Você será redirecionado para a página de login.");
        window.location.href = "../../index.html";
    } else {
        alert("Você escolheu não limpar o localStorage. Você será redirecionado para a página de login.");
        window.location.href = "../../index.html";
    }
})

if (localStorage.getItem('name')) {
    // Se o nome do usuário existir, atualiza o conteúdo do elemento span
    document.getElementById('userIdentification').textContent = localStorage.getItem('name');
} else {
    document.getElementById('userIdentification').textContent = 'user';
}