<?php

session_start();

$erro = "";

if (isset($_SESSION["erro_cadastro"])) {

    $erro = $_SESSION["erro_cadastro"];

    unset($_SESSION["erro_cadastro"]);
}

?>

<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="css/estilo.css">

    <title>Cadastro - Game Center</title>

</head>

<body>


    <!-- CABEÇALHO -->

    <header>

        <img src="img/logo.png" alt="Logo do Game Center" class="logo">

        <p class="slogan">Seu lugar favorito para jogos!</p>

    </header>


    <!-- CONTEÚDO PRINCIPAL -->

    <main>

        <div class="card-conteudo card-formulario cadastro">

            <h1>Crie sua conta</h1>

            <p>
                Cadastre-se no Game Center para começar a jogar!
            </p>

            <?php

            if ($erro !== "") {

                echo '<p class="mensagem-erro"><i>⚠️ ' . $erro . ' ⚠️</i></p>';

            }

            ?>

            <form action="processar_cadastro.php" method="post">

                <div class="campo-formulario">

                    <label for="nome">Nome:</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                    >

                </div>


                <div class="campo-formulario">

                    <label for="senha">Senha:</label>

                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        required
                    >

                </div>


                <div class="campo-formulario">

                    <label for="csenha">Confirmar Senha:</label>

                    <input
                        type="password"
                        id="csenha"
                        name="csenha"
                        required
                    >

                </div>


                <input
                    type="submit"
                    value="Cadastrar"
                    class="w3-button botao-cadastro formulario-botao"
                >

            </form>

            <p class="link-cadastro">
                Já tem uma conta? 
                <a href="login.php">Faça Login!</a>
            </p>

        </div>

    </main>


    <!-- RODAPÉ -->

    <footer>

        <p class="nome-site">Game Center</p>

        <p>Contatos</p>

        <p class="email">gamecenter@email.com</p>

        <p>Redes Sociais</p>

        <div class="redes-sociais">

            <button class="w3-button botao-linkedin">
                LinkedIn
            </button>

            <button class="w3-button botao-twitter">
                Twitter
            </button>

            <button class="w3-button botao-instagram">
                Instagram
            </button>

        </div>

        <div class="github">

            <a
                href="https://github.com/giovanniguediguian/Game_Center"
                target="_blank"
                class="w3-button botao-github"
            >
                GitHub
            </a>

        </div>

    </footer>


</body>

</html>