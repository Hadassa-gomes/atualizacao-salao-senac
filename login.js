document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemplo de validação simples
    if (username === 'admin' && password === 'senha') {
        alert('Login bem-sucedido!');
        // Redirecionar ou realizar outra ação
    } else {
        const message = document.getElementById('message');
        message.textContent = 'Usuário ou senha incorretos.';
        message.classList.remove('hidden');
    }
});
