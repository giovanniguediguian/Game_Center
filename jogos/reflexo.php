<?php

session_start();

include "../protecao.php";

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Desafio de Reflexo - Game Center</title>

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
        href="../css/reflexo.css"
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

<section class="conteudo-reflexo">

    <h2 class="titulo-jogo">
        Desafio de Reflexo
    </h2>

    <p class="descricao-jogo">
        Teste seus reflexos, encontre as luzes e clique o mais rápido possível!
    </p>

<div class="placar">

    <div class="card-placar card-vitorias">

        <span class="titulo-placar">
            Vitórias
        </span>

        <strong id="vitorias">
            0
        </strong>

        <div class="subplacar">

            <div>
                <span>Fácil</span>
                <strong id="vitorias-facil">0</strong>
            </div>

            <div>
                <span>Médio</span>
                <strong id="vitorias-medio">0</strong>
            </div>

            <div>
                <span>Difícil</span>
                <strong id="vitorias-dificil">0</strong>
            </div>

        </div>

    </div>

    <div class="card-placar card-partidas">

        <span class="titulo-placar">
            Partidas
        </span>

        <strong id="partidas">
            0
        </strong>

    </div>

    <div class="card-placar card-pontuacao">

        <span class="titulo-placar">
            Pontuação
        </span>

        <strong id="pontuacao">
            0
        </strong>

        <div class="subplacar">

            <div>
                <span>Fácil</span>
                <strong id="pontuacao-facil">0</strong>
            </div>

            <div>
                <span>Médio</span>
                <strong id="pontuacao-medio">0</strong>
            </div>

            <div>
                <span>Difícil</span>
                <strong id="pontuacao-dificil">0</strong>
            </div>

        </div>

    </div>

</div>

    <section id="selecao-dificuldade">

        <h3>
            Escolha uma dificuldade
        </h3>

        <div class="dificuldades">

            <button
                class="w3-button w3-round-large"
                onclick="iniciarJogo('facil')"
            >
                Fácil
            </button>

            <button
                class="w3-button w3-round-large"
                onclick="iniciarJogo('medio')"
            >
                Médio
            </button>

            <button
                class="w3-button w3-round-large"
                onclick="iniciarJogo('dificil')"
            >
                Difícil
            </button>

        </div>

    </section>

    <section
        id="jogo"
        class="area-jogo"
        style="display: none;"
    >

        <div class="dificuldade-atual">

            <span>Dificuldade:</span>

            <strong id="dificuldade"></strong>

        </div>

        <div class="vez">

            <span id="texto-vez">
                Prepare-se...
            </span>

        </div>

        <div class="informacoes-jogo">

            <div>
                <span>Vidas</span>
                <strong id="vidas">0</strong>
            </div>

            <div>
                <span>Pontos</span>
                <strong id="pontos-jogo">0</strong>
            </div>

        </div>

        <div
            id="tabuleiro"
            class="tabuleiro"
        ></div>

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

    </section>

        <br>

        <a
            href="../rankings/Rreflexo.php"
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

<script src="../js/reflexo.js"></script>

</body>

</html>