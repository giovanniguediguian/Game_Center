<?php

session_start();

include "conexao.php";


if (empty($_POST["nome"]) || empty($_POST["senha"])) {

    $_SESSION["erro_cadastro"] = "Por favor, preencha todos os campos.";

    header("Location: cadastro.php");
    exit;
}


if (empty($_POST["csenha"])) {

    $_SESSION["erro_cadastro"] = "A confirmação de senha é obrigatória.";

    header("Location: cadastro.php");
    exit;
}


if ($_POST["senha"] !== $_POST["csenha"]) {

    $_SESSION["erro_cadastro"] = "As senhas não coincidem.";

    header("Location: cadastro.php");
    exit;
}


if (strlen($_POST["senha"]) < 6) {

    $_SESSION["erro_cadastro"] = "A senha deve ter pelo menos 6 caracteres.";

    header("Location: cadastro.php");
    exit;
}


if (strpos($_POST["senha"], " ") !== false) {

    $_SESSION["erro_cadastro"] = "A senha não pode conter espaços.";

    header("Location: cadastro.php");
    exit;
}


$nome = trim($_POST["nome"]);
$senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);


$sql = "select nome from jogadores where nome = ?";

$stmt = $conexao->prepare($sql);
$stmt->bind_param("s", $nome);
$stmt->execute();

$resultado = $stmt->get_result();


$sql_insert = "insert into jogadores (nome, senha) values (?, ?)";


if ($resultado->num_rows > 0) {

    $_SESSION["erro_cadastro"] = "Nome de usuário já existe. Por favor, escolha outro nome.";

    header("Location: cadastro.php");
    exit;

} else {

    $conexao->begin_transaction();


    $stmt_insert = $conexao->prepare($sql_insert);

    if (!$stmt_insert) {

        $conexao->rollback();

        $_SESSION["erro_cadastro"] = "Erro ao preparar o cadastro.";

        header("Location: cadastro.php");
        exit;
    }


    $stmt_insert->bind_param("ss", $nome, $senha);


    if (!$stmt_insert->execute()) {

        $conexao->rollback();

        $_SESSION["erro_cadastro"] = "Erro ao cadastrar jogador.";

        header("Location: cadastro.php");
        exit;
    }


    $id_jogador = $conexao->insert_id;


    $sql_insert_estatisticas = "insert into estatisticas (id_jogador) values (?)";

    $stmt_insert_estatisticas = $conexao->prepare($sql_insert_estatisticas);


    if (!$stmt_insert_estatisticas) {

        $conexao->rollback();

        $_SESSION["erro_cadastro"] = "Erro ao preparar a inserção de estatísticas.";

        header("Location: cadastro.php");
        exit;
    }


    $stmt_insert_estatisticas->bind_param("i", $id_jogador);


    if (!$stmt_insert_estatisticas->execute()) {

        $conexao->rollback();

        $_SESSION["erro_cadastro"] = "Erro ao inserir estatísticas.";

        header("Location: cadastro.php");
        exit;
    }


    $conexao->commit();

    $_SESSION["sucesso_cadastro"] = "Cadastro realizado com sucesso!";

    header("Location: login.php");
    exit;
}

?>