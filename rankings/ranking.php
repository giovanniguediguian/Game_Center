<?php

include "../protecao.php";

include "../conexao.php";

$sql = "select

            jogadores.nome,

            estatisticas.jokenpo,

            estatisticas.forca,

            estatisticas.velha,

            estatisticas.blackjack,

            estatisticas.reflexo,

            (

                estatisticas.jokenpo +

                estatisticas.forca +

                estatisticas.velha +

                estatisticas.blackjack +

                estatisticas.reflexo

            ) as total

        from jogadores

        inner join estatisticas

            on jogadores.id = estatisticas.id_jogador

        order by total desc, jogadores.nome asc

        limit 30";

$resultado = $conexao->query($sql);

?>

<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <title>Ranking - Game Center</title>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <link rel="stylesheet" href="../css/estilo.css">

</head>

<body>

    <!-- CABEÇALHO -->

    <header>

        <a href="index.php">

            <img
                src="../img/logo.png"
                alt="Logo do Game Center"
                class="logo"
            >

        </a>

        <p class="slogan">

            Seu lugar favorito para jogos!

        </p>

    </header>

    <!-- CONTEÚDO PRINCIPAL -->

    <main>

        <div class="conteudo-ranking">

            <h1 class="titulo-ranking">

                RANKING

            </h1>

            <p class="descricao-ranking">

                Veja quem domina os jogos do Game Center.

            </p>

            <section class="area-ranking">

                <h2 class="titulo-tabela">

                    TOP 30 JOGADORES

                </h2>

                <?php if ($resultado && $resultado->num_rows > 0): ?>

                    <table class="tabela-ranking">

                        <thead>

                            <tr>

                                <th>Posição</th>

                                <th>Jogador</th>

                                <th>Jokenpô</th>

                                <th>Forca</th>

                                <th>Velha</th>

                                <th>Blackjack</th>

                                <th>Reflexo</th>

                                <th>Total</th>

                            </tr>

                        </thead>

                        <tbody>

                            <?php

                            $posicao = 1;

                            while ($jogador = $resultado->fetch_assoc()):

                                $classe = "";

                                if ($posicao === 1) {

                                    $classe = "primeiro";

                                } elseif ($posicao === 2) {

                                    $classe = "segundo";

                                } elseif ($posicao === 3) {

                                    $classe = "terceiro";

                                } elseif ($posicao >= 4 && $posicao <= 10) {

                                    $classe = "quarto-decimo";

                                } elseif ($posicao >= 11 && $posicao <= 30) {

                                    $classe = "decimo-primeiro-trigesimo";

                                }

                            ?>

                                <tr class="<?php echo $classe; ?>">

                                    <td class="posicao">

                                        <?php if ($posicao === 1): ?>

                                            <span class="medalha">
                                                👑1º👑
                                            </span>

                                        <?php elseif ($posicao === 2): ?>

                                            <span class="medalha">
                                                💎2º💎
                                            </span>

                                        <?php elseif ($posicao === 3): ?>

                                            <span class="medalha">
                                                🔥3º🔥
                                            </span>

                                        <?php elseif ($posicao >= 4 && $posicao <= 10): ?>

                                            <span class="estrela-laranja">
                                                ★
                                            </span>

                                            <?php echo $posicao; ?>º

                                            <span class="estrela-laranja">
                                                ★
                                            </span>

                                        <?php else: ?>

                                            <span class="estrela-roxa">
                                                ★
                                            </span>

                                            <?php echo $posicao; ?>º

                                            <span class="estrela-roxa">
                                                ★
                                            </span>

                                        <?php endif; ?>

                                    </td>

                                    <td class="jogador">

                                        <?php echo htmlspecialchars($jogador["nome"]); ?>

                                    </td>

                                    <td>

                                        <?php echo $jogador["jokenpo"]; ?>

                                    </td>

                                    <td>

                                        <?php echo $jogador["forca"]; ?>

                                    </td>

                                    <td>

                                        <?php echo $jogador["velha"]; ?>

                                    </td>

                                    <td>

                                        <?php echo $jogador["blackjack"]; ?>

                                    </td>

                                    <td>

                                        <?php echo $jogador["reflexo"]; ?>

                                    </td>

                                    <td class="total">

                                        <?php echo $jogador["total"]; ?>

                                    </td>

                                </tr>

                            <?php

                                $posicao++;

                            endwhile;

                            ?>

                        </tbody>

                    </table>

                <?php else: ?>

                    <div class="sem-jogadores">

                        Nenhum jogador possui pontuação registrada ainda.

                    </div>

                <?php endif; ?>

            </section>

            <div class="botao-voltar-ranking">

                <a
                    href="../index.php"
                    class="w3-button botao-menu"
                >

                    VOLTAR AO MENU

                </a>

            </div>

        </div>

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

<?php

$conexao->close();

?>