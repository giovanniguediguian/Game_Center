<?php

session_start();

include "../protecao.php";

?>

<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <link rel="stylesheet" href="../css/estilo.css">

    <link rel="stylesheet" href="../css/jokenpo.css">

    <title>Jokenpô - Game Center</title>

</head>

<body>

<header>

    <img src="../img/logo.png" alt="Logo do Game Center" class="logo">

    <p class="slogan">Seu lugar favorito para jogos!</p>

</header>



<main>

    <div class="card-conteudo card-jokenpo">

        <h1>Jokenpô</h1>

        <p>Escolha sua jogada!</p>



        <div class="placar-jokenpo">

            <div>

                <span>Vitórias</span>

                <strong id="vitorias">0</strong>

            </div>

            <div>

                <span>Derrotas</span>

                <strong id="derrotas">0</strong>

            </div>

            <div>

                <span>Empates</span>

                <strong id="empates">0</strong>

            </div>

            <div>

                <span>Sequência</span>

                <strong id="sequencia">0</strong>

            </div>

            <div>

                <span>Pontuação</span>

                <strong id="pontuacao">0</strong>

            </div>

        </div>



        <div class="jogadas-jokenpo">

            <div class="jogador-jokenpo">

                <h2>Você</h2>

                <div id="escolha-jogador" class="escolha-jokenpo">

                    👤

                </div>

            </div>



            <div class="versus-jokenpo">

                <span>VS</span>

            </div>



            <div class="jogador-jokenpo">

                <h2>Monge Joken Poo</h2>

                <div id="escolha-computador" class="escolha-jokenpo">

                    🧘

                </div>

            </div>

        </div>



        <div id="contagem" class="contagem-jokenpo"></div>



        <div class="opcoes-jokenpo">

            <button

                class="w3-button botao-jokenpo"

                onclick="jogar('pedra')"

                id="botao-pedra">

                <span class="icone-jokenpo">🪨</span>

                Pedra

            </button>



            <button

                class="w3-button botao-jokenpo"

                onclick="jogar('papel')"

                id="botao-papel">

                <span class="icone-jokenpo">📄</span>

                Papel

            </button>



            <button

                class="w3-button botao-jokenpo"

                onclick="jogar('tesoura')"

                id="botao-tesoura">

                <span class="icone-jokenpo">✂️</span>

                Tesoura

            </button>

        </div>



        <div class="resultado-jokenpo">

            <h2 id="resultado"></h2>

            <p id="mensagem-resultado"></p>

        </div>



        <div class="historico-jokenpo">

            <h2>Histórico</h2>

            <div id="historico">

                <p class="historico-vazio">

                    Nenhuma rodada jogada ainda.

                </p>

            </div>

        </div>



        <button

            id="botao-novamente"

            class="w3-button botao-jogar-novamente"

            onclick="jogarNovamente()"

            disabled>

            Jogar novamente

        </button>

        <br><br>

        <a
            href="../rankings/Rjokenpo.php"
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

    </div>

</main>



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

            class="w3-button botao-github">

            GitHub

        </a>

    </div>

</footer>



<script src="../js/jokenpo.js"></script>

</body>

</html>