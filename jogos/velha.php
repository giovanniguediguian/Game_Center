<?php

session_start();

include "../protecao.php";

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Jogo da Velha - Game Center</title>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">

    <link rel="stylesheet" href="../css/estilo.css">

    <link rel="stylesheet" href="../css/velha.css">

</head>

<body>

<header>

    <img
        src="../img/logo.png"
        alt="Logo do Game Center"
        class="logo"
    >

    <p class="slogan">
        Seu lugar favorito para jogos!
    </p>

</header>

<main class="w3-container">

    <section class="conteudo-velha">

        <h2 class="titulo-jogo">
            Jogo da Velha
        </h2>

        <p class="descricao-jogo">
            Escolha uma dificuldade e tente vencer o adversário!
        </p>

        <div class="placar">

            <div>
                <span>Vitórias</span>
                <strong id="vitorias">0</strong>
            </div>

            <div>
                <span>Pontuação</span>
                <strong id="pontuacao">0</strong>
            </div>

            <div>
                <span>Partidas</span>
                <strong id="partidas">0</strong>
            </div>

        </div>


        <section id="selecao-dificuldade">

            <h3>
                Escolha uma dificuldade
            </h3>

            <div class="dificuldades">

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('aprendiz')"
                >
                    Aprendiz
                </button>

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('veterano')"
                >
                    Veterano
                </button>

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('mestre')"
                >
                    Mestre
                </button>

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('grande-mestre')"
                >
                    Grande Mestre
                </button>

            </div>

        </section>


        <section
            id="jogo"
            style="display: none;"
        >

            <div class="dificuldade-atual">

                <span>Dificuldade:</span>

                <strong id="dificuldade"></strong>

            </div>

            <div class="vez">

                <span id="texto-vez">
                    Sua vez
                </span>

            </div>


            <div class="tabuleiro">

                <button
                    class="casa"
                    data-posicao="0"
                    onclick="jogar(0)"
                ></button>

                <button
                    class="casa"
                    data-posicao="1"
                    onclick="jogar(1)"
                ></button>

                <button
                    class="casa"
                    data-posicao="2"
                    onclick="jogar(2)"
                ></button>

                <button
                    class="casa"
                    data-posicao="3"
                    onclick="jogar(3)"
                ></button>

                <button
                    class="casa"
                    data-posicao="4"
                    onclick="jogar(4)"
                ></button>

                <button
                    class="casa"
                    data-posicao="5"
                    onclick="jogar(5)"
                ></button>

                <button
                    class="casa"
                    data-posicao="6"
                    onclick="jogar(6)"
                ></button>

                <button
                    class="casa"
                    data-posicao="7"
                    onclick="jogar(7)"
                ></button>

                <button
                    class="casa"
                    data-posicao="8"
                    onclick="jogar(8)"
                ></button>

            </div>


            <div id="mensagem"></div>

                <button
                    id="botao-voltar"
                    class="w3-button w3-round-large botao-voltar"
                    onclick="voltarDificuldades()"
                >
                    Voltar
                </button>

                <button
                    id="botao-nova-partida"
                    class="w3-button w3-round-large"
                    onclick="voltarDificuldades()"
                    style="display: none;"
                >
                    Jogar novamente
                </button>
            
            </div>

        </section>

        <br>

        <a
            href="../rankings/Rvelha.php"
            class="w3-button botao-ranking"
        >
            Ver ranking do Jogo
        </a>

        <br>

        <a

            href="../index.php"

            class="w3-button botao-menu">

            Menu

        </a>

        <br></br>

    </section>

</main>

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

<script src="../js/velha.js"></script>

</body>

</html>