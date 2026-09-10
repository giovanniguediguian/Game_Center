<?php

include "../protecao.php";

include "../conexao.php";

$sql = "select

            jogadores.nome,

            estatisticas.velha

        from jogadores

        inner join estatisticas

            on jogadores.id = estatisticas.id_jogador

        order by estatisticas.velha desc, jogadores.nome asc

        limit 10";

$resultado = $conexao->query($sql);

?>

<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <title>Ranking de Velha - Game Center</title>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <link rel="stylesheet" href="../css/estilo.css">

</head>

<body>

    <!-- CABEÇALHO -->

    <header>

        <a href="../index.php">

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

                RANKING DE VELHA

            </h1>

            <p class="descricao-ranking">

                Veja quem domina o Jogo da Velha no Game Center.

            </p>

            <section class="area-ranking">

                <h2 class="titulo-tabela">

                    TOP 10 JOGADORES

                </h2>

                <?php if ($resultado && $resultado->num_rows > 0): ?>

                    <table class="tabela-ranking">

                        <thead>

                            <tr>

                                <th>Posição</th>

                                <th>Jogador</th>

                                <th>Pontuação</th>

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

                                } else {

                                    $classe = "quarto-decimo";

                                }

                            ?>

                                <tr class="<?php echo $classe; ?>">

                                    <td class="posicao">

                                        <?php echo $posicao; ?>º

                                    </td>

                                    <td class="jogador">

                                        <?php echo htmlspecialchars($jogador["nome"]); ?>

                                    </td>

                                    <td class="total">

                                        <?php echo $jogador["velha"]; ?>

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
                    href="../jogos/velha.php"
                    class="w3-button botao-menu"
                >

                    VOLTAR AO JOGO

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