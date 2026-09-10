<?php

session_start();

include "../protecao.php";

?>

<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Blackjack - Game Center</title>

    <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/5/w3.css"
    >

    <link
        rel="stylesheet"
        href="../css/estilo.css"
    >

    <link
        rel="stylesheet"
        href="../css/bj.css"
    >

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

<section class="conteudo-bj">

    <h2 class="titulo-jogo">
        Blackjack 21
    </h2>

    <p class="descricao-jogo">
        Chegue o mais perto possível de 21 sem estourar!
    </p>


    <div class="placar">

        <div>

            <span>Vitórias</span>

            <strong id="vitorias">
                0
            </strong>

        </div>

        <div>

            <span>Pontuação</span>

            <strong id="pontuacao">
                0
            </strong>

        </div>

        <div>

            <span>Partidas</span>

            <strong id="partidas">
                0
            </strong>

        </div>

    </div>


    <section id="selecao-dificuldade">

        <h3>
            Escolha um modo
        </h3>

        <div class="dificuldades">

            <button
                class="w3-button w3-round-large"
                onclick="iniciarJogo('normal')"
            >
                Normal
            </button>

            <button
                class="w3-button w3-round-large"
                onclick="iniciarJogo('as-cegas')"
            >
                Às cegas
            </button>

        </div>

    </section>


    <section
        id="jogo"
        class="area-jogo"
        style="display: none;"
    >

        <div class="modo-atual">

            <span>Modo:</span>

            <strong id="modo">
            </strong>

        </div>

        <div class="vez">
            <span id="texto-vez">Sua vez</span>
        </div>


        <div class="mao-computador">

            <h3>
                Mão do Rei do Cassino
            </h3>

            <div
                id="cartas-computador"
                class="cartas"
            >
            </div>

            <div
                id="total-computador"
                class="total-mao"
            >
            </div>

        </div>


        <div class="area-monte">
            <div id="monte" class="monte" onclick="comprarCarta()"></div>

            <p id="instrucao-monte">
                Clique no baralho para comprar uma carta
            </p>
        </div>


        <div class="mao-jogador">

            <h3>
                Sua mão
            </h3>

            <div
                id="cartas-jogador"
                class="cartas"
            >
            </div>

            <div
                id="total-jogador"
                class="total-mao"
            >
            </div>

        </div>


        <div id="mensagem">
        </div>


        <div class="acoes">

            <button
                id="botao-passar"
                class="w3-button w3-round-large"
                onclick="passarVez()"
            >
                Passar a vez
            </button>

            <button
                id="botao-mostrar"
                class="w3-button w3-round-large"
                onclick="mostrarMao()"
            >
                Mostrar mão
            </button>

        </div>


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

    </section>

        <br>

        <a
            href="../rankings/Rbj.php"
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


<script src="../js/bj.js"></script>

</body>

</html>