<?php

session_start();

include "conexao.php";

if (empty($_POST["nome"]) || empty($_POST["senha"])) {

    $_SESSION["erro_login"] = "Por favor, preencha todos os campos.";

    header("Location: login.php");
    exit;
}

$nome = trim($_POST["nome"]);
$senha = $_POST["senha"];

$sql = "select * from jogadores where nome = ?";

$stmt = $conexao->prepare($sql);
$stmt->bind_param("s", $nome);
$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows === 0) {

    $_SESSION["erro_login"] = "Nome de usuário ou senha incorretos.";

    header("Location: login.php");
    exit;
}

$jogador = $resultado->fetch_assoc();

if (password_verify($senha, $jogador["senha"])) {

    $_SESSION["id_jogador"] = $jogador["id"];
    $_SESSION["nome_jogador"] = $jogador["nome"];

    header("Location: index.php");
    exit;

} else {

    $_SESSION["erro_login"] = "Nome de usuário ou senha incorretos.";

    header("Location: login.php");
    exit;
}

?>