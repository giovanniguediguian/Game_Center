<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="css/estilo.css">

    <title>Game Center</title>

</head>

<body>

    <?php

    session_start();

    include "conexao.php";

    ?>


    <!-- CABEÇALHO -->

    <header>

        <img src="img/logo.png" alt="Logo do Game Center" class="logo">

        <p class="slogan">Seu lugar favorito para jogos!</p>

    </header>


    <!-- CONTEÚDO PRINCIPAL -->

    <main>

        <?php

        if (isset($_SESSION["id_jogador"])) {

            $sql = "select jogadores.nome, e.jokenpo, e.forca, e.velha, e.blackjack, e.reflexo,
                    (e.jokenpo + e.forca + e.velha + e.blackjack + e.reflexo) as total
                    from jogadores
                    inner join estatisticas as e on jogadores.id = e.id_jogador
                    where jogadores.id = ?";

            $stmt = $conexao->prepare($sql);

            if (!$stmt) {
                echo "Erro ao preparar a consulta: " . $conexao->error;
                exit;
            }

            $stmt->bind_param("i", $_SESSION["id_jogador"]);
            $stmt->execute();

            $resultado = $stmt->get_result();

            ?>

            <div class="card-conteudo">

                <h1>Bem-vindo, <?php echo $_SESSION["nome_jogador"]; ?>!</h1>

                <h2>Suas estatísticas:</h2>

                <?php

                if ($resultado->num_rows > 0) {

                    $estatisticas = $resultado->fetch_assoc();

                    ?>

                    <ul class="w3-ul">

                        <li>Jokenpo: <?php echo $estatisticas["jokenpo"]; ?></li>
                        <li>Forca: <?php echo $estatisticas["forca"]; ?></li>
                        <li>Velha: <?php echo $estatisticas["velha"]; ?></li>
                        <li>Blackjack: <?php echo $estatisticas["blackjack"]; ?></li>
                        <li>Reflexo: <?php echo $estatisticas["reflexo"]; ?></li>
                        <li class="total">Total: <?php echo $estatisticas["total"]; ?></li>

                    </ul>

                    <?php

                } else {

                    echo "<p>Nenhuma estatística encontrada.</p>";

                }

                ?>

                <p class="aviso-atualizacao">
                    O Game Center ainda está em desenvolvimento! Novos jogos e funcionalidades serão adicionados em futuras atualizações.
                </p>

                <a href="logout.php" class="w3-button botao-sair">Sair</a>

            </div>

            <?php

        } else {

            ?>

            <div class="card-conteudo">

                <h1>Bem-vindo ao Game Center!</h1>

                <p>
                    O Game Center é o seu destino definitivo para diversão e entretenimento! Aqui, você pode explorar uma variedade de jogos clássicos, com uma competitividade de alto nível! Crie sua conta, acompanhe suas estatísticas e desafie seus amigos para ver quem é o melhor jogador! E lembre-se, a diversão é melhor quando compartilhada, então não perca tempo e junte-se a nós agora mesmo!
                </p>

                <div class="botoes-entrada">

                    <a href="login.php" class="w3-button botao-login">
                        Login
                    </a>

                    <a href="cadastro.php" class="w3-button botao-cadastro">
                        Cadastro
                    </a>

                </div>

            </div>

            <?php

        }

        ?>

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

            <a href="https://github.com/giovanniguediguian/Game_Center"
               target="_blank"
               class="w3-button botao-github">
                GitHub
            </a>

        </div>

    </footer>

</body>

</html>