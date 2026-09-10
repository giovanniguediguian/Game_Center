<?php

session_start();

include "../conexao.php";

if (!isset($_SESSION["id_jogador"])) {

    http_response_code(401);

    exit;

}

$jogo = $_POST["jogo"] ?? null;

$pontos = $_POST["pontos"] ?? null;

if (!is_numeric($pontos)) {

    http_response_code(400);

    exit;

}

$colunasPermitidas = [

    "jokenpo" => "jokenpo",

    "forca" => "forca",

    "velha" => "velha",

    "blackjack" => "blackjack",

    "reflexo" => "reflexo"

];

if (!isset($colunasPermitidas[$jogo])) {

    http_response_code(400);

    exit;

}

$coluna = $colunasPermitidas[$jogo];

$id_jogador = $_SESSION["id_jogador"];

$sql = "update estatisticas
        set $coluna = $coluna + ?
        where id_jogador = ?";

$stmt = $conexao->prepare($sql);

if (!$stmt) {

    http_response_code(500);

    exit;

}

$stmt->bind_param("di", $pontos, $id_jogador);

$stmt->execute();

$stmt->close();

$conexao->close();

?>