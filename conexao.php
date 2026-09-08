<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "game_center";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}

?>