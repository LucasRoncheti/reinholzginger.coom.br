document.getElementById("submitBtn").addEventListener("click", function() {
    // Validação do formulário
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Expressão regular para validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || !emailRegex.test(email) || message === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return; // Impede o envio do formulário se os campos estiverem vazios ou o e-mail estiver em um formato inválido
    }

    // Dados do formulário
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Envia os dados para o PHP
    fetch("../../includes/send_email.php.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Exibe o resultado do envio do formulário
    })
    .catch(error => {
        console.error("Erro ao enviar formulário:", error);
    });
});







