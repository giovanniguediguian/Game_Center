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

        <img
            src="img/logo.png"
            alt="Logo do Game Center"
            class="logo"
        >

        <p class="slogan">
            Seu lugar favorito para jogos!
        </p>

    </header>


    <!-- CONTEÚDO PRINCIPAL -->

    <main class="<?php echo isset($_SESSION["id_jogador"]) ? "main-logado" : ""; ?>">

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

                <h1>
                    Boas-vindas, <?php echo $_SESSION["nome_jogador"]; ?>!
                </h1>


                <?php

                if ($resultado->num_rows > 0) {

                    $estatisticas = $resultado->fetch_assoc();

                    ?>

                    <!-- JOGOS -->

                    <h2 class="titulo-secao">
                        Jogos
                    </h2>

                    <div class="jogos">

                        <div class="card-jogo">

                            <h3>
                                Jokenpô
                            </h3>

                            <div class="imagem-jogo">

                                <img
                                    src="img/jokenpo.png"
                                    alt="Jokenpô"
                                >

                            </div>

                            <p>
                                Escolha entre pedra, papel ou tesoura
                                e enfrente o Monge Joken Poo!
                            </p>

                            <a
                                href="jogos/jokenpo.php"
                                class="w3-button botao-jogar"
                            >
                                Jogar
                            </a>

                        </div>

                        <div class="card-jogo">

                            <h3>
                                Jogo da Forca
                            </h3>

                            <div class="imagem-jogo">

                                <img
                                    src="img/forca.png"
                                    alt="Forca"
                                >

                            </div>

                            <p>
                                Escolha a categoria, adivinhe as letras
                                e descubra a palavra!
                            </p>

                            <a
                                href="jogos/forca.php"
                                class="w3-button botao-jogar"
                            >
                                Jogar
                            </a>
                        
                        </div>

                        <div class="card-jogo">

                            <h3>
                                Jogo da Velha
                            </h3>

                            <div class="imagem-jogo">

                                <img
                                    src="img/velha.png"
                                    alt="Velha"
                                >

                            </div>

                            <p>
                                Desafie os melhores mestres no jogo
                                da velha. Boa sorte!
                            </p>

                            <a
                                href="jogos/velha.php"
                                class="w3-button botao-jogar"
                            >
                                Jogar
                            </a>
                        
                        </div>


                        <div class="card-jogo">

                            <h3>
                                BlackJack
                            </h3>

                            <div class="imagem-jogo">

                                <img
                                    src="img/bj.png"
                                    alt="Blackjack"
                                >

                            </div>

                            <p>
                                Encare o Rei do Cassino em um dos
                                clássicos no cassino. Você chega em 21?
                            </p>

                            <a
                                href="jogos/bj.php"
                                class="w3-button botao-jogar"
                            >
                                Jogar
                            </a>
                        
                        </div>

                        <div class="card-jogo">

                            <h3>
                                1, 2, 3... Reflexo!
                            </h3>

                            <div class="imagem-jogo">

                                <img
                                    src="img/reflexo.png"
                                    alt="Reflexo"
                                >

                            </div>

                            <p>
                                Andaram dizendo por ai que seu
                                reflexo não está em dia... Que tal se provar?
                            </p>

                            <a
                                href="jogos/reflexo.php"
                                class="w3-button botao-jogar"
                            >
                                Jogar
                            </a>
                        
                        </div>

                    </div>


                    <!-- ESTATÍSTICAS -->

                    <h2 class="titulo-secao">
                        Suas estatísticas
                    </h2>

                    <div class="estatisticas">

                        <div class="estatistica">

                            <span>
                                Jokenpô
                            </span>

                            <strong>
                                <?php echo $estatisticas["jokenpo"]; ?>
                            </strong>

                        </div>


                        <div class="estatistica">

                            <span>
                                Forca
                            </span>

                            <strong>
                                <?php echo $estatisticas["forca"]; ?>
                            </strong>

                        </div>


                        <div class="estatistica">

                            <span>
                                Velha
                            </span>

                            <strong>
                                <?php echo $estatisticas["velha"]; ?>
                            </strong>

                        </div>


                        <div class="estatistica">

                            <span>
                                Blackjack
                            </span>

                            <strong>
                                <?php echo $estatisticas["blackjack"]; ?>
                            </strong>

                        </div>


                        <div class="estatistica">

                            <span>
                                Reflexo
                            </span>

                            <strong>
                                <?php echo $estatisticas["reflexo"]; ?>
                            </strong>

                        </div>


                        <div class="estatistica estatistica-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                <?php echo $estatisticas["total"]; ?>
                            </strong>

                        </div>

                    </div>


                    <!-- RANKING -->

                    <a
                        href="rankings/ranking.php"
                        class="w3-button botao-ranking"
                    >
                        Ver ranking
                    </a>


                    <!-- AVISO -->

                    <p class="aviso-atualizacao">

                        O Game Center ainda está em desenvolvimento!
                        Novos jogos e funcionalidades serão adicionados
                        em futuras atualizações.

                    </p>


                    <!-- SAIR -->

                    <a
                        href="logout.php"
                        class="w3-button botao-sair"
                    >
                        Sair
                    </a>

                    <?php

                } else {

                    ?>

                    <p>
                        Nenhuma estatística encontrada.
                    </p>

                    <a
                        href="logout.php"
                        class="w3-button botao-sair"
                    >
                        Sair
                    </a>

                    <?php

                }

                ?>

            </div>

            <?php

        } else {

            ?>

            <div class="card-conteudo">

                <h1>
                    Bem-vindo ao Game Center!
                </h1>

                <p>
                    O Game Center é o seu destino definitivo para diversão e entretenimento! Aqui, você pode explorar uma variedade de jogos clássicos, com uma competitividade de alto nível! Crie sua conta, acompanhe suas estatísticas e desafie seus amigos para ver quem é o melhor jogador! E lembre-se, a diversão é melhor quando compartilhada, então não perca tempo e junte-se a nós agora mesmo!
                </p>

                <div class="botoes-entrada">

                    <a
                        href="login.php"
                        class="w3-button botao-login"
                    >
                        Login
                    </a>

                    <a
                        href="cadastro.php"
                        class="w3-button botao-cadastro"
                    >
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

        <p class="nome-site">
            Game Center
        </p>

        <p>
            Contatos
        </p>

        <p class="email">
            gamecenter@email.com
        </p>

        <p>
            Redes Sociais
        </p>

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