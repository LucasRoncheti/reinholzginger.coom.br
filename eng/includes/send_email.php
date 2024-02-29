<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do formulário
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Configurações para o envio de e-mail
    $to = "lucasroncheti@gmail.com"; // Insira aqui o seu e-mail
    $subject = "Nova mensagem do formulário de contato";
    $body = "Nome: $name\n";
    $body .= "Email: $email\n";
    $body .= "Mensagem:\n$message";
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
