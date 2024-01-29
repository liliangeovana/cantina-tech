document.addEventListener('DOMContentLoaded', function() {
    
    // Verifica se o objeto 'users' existe no localStorage
    if (localStorage.getItem('users')) {
        // Obtém o objeto 'users' do localStorage e faz o parse para um array de objetos JavaScript
        var usersData = JSON.parse(localStorage.getItem('users'));
        
        // Verifica se há pelo menos um usuário armazenado
        if (usersData.length > 0) {
            // Escolher do primeiro usuário
            var user = usersData[0]; 
            
            // Verifica se o usuário possui a propriedade 'name'
            if (user.name) {
                // Atualiza o conteúdo do elemento span com o nome do usuário
                document.getElementById('userIdentification').textContent = user.name;
            } else {
                // Se o usuário não possuir a propriedade 'name', define o texto padrão 'user'
                document.getElementById('userIdentification').textContent = 'user';
            }
        } else {
            // Se não houver usuários no array, define o texto padrão 'user'
            document.getElementById('userIdentification').textContent = 'user';
        }
    } else {
        // Se o objeto 'users' não existir no localStorage, define o texto padrão 'user'
        document.getElementById('userIdentification').textContent = 'user';
    }
});


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
