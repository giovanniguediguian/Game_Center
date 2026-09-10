<?php

session_start();

include "../protecao.php";

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Jogo da Forca - Game Center</title>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">

    <link rel="stylesheet" href="../css/estilo.css">

    <link rel="stylesheet" href="../css/forca.css">

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

    <section class="conteudo-forca">

        <h2 class="titulo-jogo">
            Jogo da Forca
        </h2>

        <p class="descricao-jogo">
            Escolha uma categoria e tente descobrir a palavra
            antes que suas 6 tentativas acabem!
        </p>

        <!-- PLACAR -->

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
                <span>Tentativas</span>
                <strong id="tentativas">0</strong>
            </div>

        </div>

        <!-- SELEÇÃO DE CATEGORIA -->

        <section id="selecao-categoria">

            <h3>
                Escolha uma categoria
            </h3>

            <div class="categorias">

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('animais')"
                >
                    Animais
                </button>

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('frutas')"
                >
                    Frutas
                </button>

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('paises')"
                >
                    Países
                </button>

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('objetos')"
                >
                    Objetos
                </button>

                <button
                    class="w3-button w3-round-large"
                    onclick="iniciarJogo('aplicativos')"
                >
                    Aplicativos
                </button>

                

            </div>
        
        </section>

        <!-- JOGO -->

        <section
            id="jogo"
            style="display: none;"
        >

            <div class="categoria-atual">

                <span>Categoria:</span>

                <strong id="categoria"></strong>

            </div>

            <div class="forca">

                <div id="desenho-forca"></div>

                <div class="palavra">

                    <span id="palavra"></span>

                </div>

            </div>

            <div class="area-dica">

                <button
                    id="botao-dica"
                    class="w3-button w3-round-large"
                    onclick="mostrarDica()"
                >
                    Dica
                </button>

                <p id="dica"></p>

            </div>

            <div class="entrada">

                <input
                    type="text"
                    id="entrada"
                    maxlength="20"
                    placeholder="Digite uma letra ou a palavra"
                    autocomplete="off"
                >

                <button
                    class="w3-button w3-round-large"
                    onclick="verificarPalpite()"
                >
                    Tentar
                </button>

            </div>

            <div id="letras-tentadas">

                <p>
                    Letras já tentadas:
                </p>

                <span id="lista-letras">
                    Nenhuma
                </span>

            </div>

            <div id="mensagem"></div>

                <button
                    id="botao-voltar"
                    class="w3-button w3-round-large botao-voltar"
                    onclick="voltarCategorias()"
                >
                    Voltar
                </button>

                <button
                    id="botao-nova-partida"
                    class="w3-button w3-round-large"
                    onclick="voltarCategorias()"
                    style="display: none;"
                >
                    Jogar novamente

                </button>

        </section>

        <br>

        <a
            href="../rankings/Rforca.php"
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

        <br><br>

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

<script src="../js/forca.js"></script>

</body>

</html>