let tabuleiro = [

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""

];


let dificuldadeAtual = "";

let jogoEncerrado = false;

let vitorias = 0;

let pontuacao = 0;

let partidas = 0;


const combinacoes = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

];


function iniciarJogo(dificuldade) {

    dificuldadeAtual = dificuldade;

    tabuleiro = [

        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""

    ];

    jogoEncerrado = false;

    document.getElementById("selecao-dificuldade").style.display =
        "none";

    document.getElementById("jogo").style.display =
        "block";

    document.getElementById("dificuldade").textContent =
        dificuldadeTexto(dificuldade);

    document.getElementById("botao-nova-partida").style.display =
        "none";

    document.getElementById("botao-voltar").style.display =
    "inline-block";

    document.getElementById("mensagem").textContent =
        "";

    document.getElementById("mensagem").className =
        "";

    document.getElementById("texto-vez").textContent =
        "Sua vez";

    atualizarTabuleiro();

    habilitarTabuleiro();

    atualizarPlacar();

}


function dificuldadeTexto(dificuldade) {

    const nomes = {

        aprendiz: "Aprendiz",

        veterano: "Veterano",

        mestre: "Mestre",

        "grande-mestre": "Grande Mestre"

    };

    return nomes[dificuldade];

}


function atualizarTabuleiro() {

    const casas = document.querySelectorAll(".casa");

    casas.forEach(function(casa, indice) {

        casa.textContent = tabuleiro[indice];

        casa.classList.remove(
            "casa-x",
            "casa-o"
        );

        if (tabuleiro[indice] === "X") {

            casa.classList.add("casa-x");

        }

        if (tabuleiro[indice] === "O") {

            casa.classList.add("casa-o");

        }

    });

}


function atualizarPlacar() {

    document.getElementById("vitorias").textContent =
        vitorias;

    document.getElementById("pontuacao").textContent =
        pontuacao.toFixed(2);

    document.getElementById("partidas").textContent =
        partidas;

}


function jogar(posicao) {

    if (jogoEncerrado) {

        return;

    }

    if (tabuleiro[posicao] !== "") {

        mostrarMensagem(
            "Essa casa já está ocupada.",
            "erro"
        );

        return;

    }

    tabuleiro[posicao] = "X";

    atualizarTabuleiro();

    if (verificarVitoria("X")) {

        vencer();

        return;

    }

    if (tabuleiroCheio()) {

        empate();

        return;

    }

    document.getElementById("texto-vez").textContent =
        "Vez do " + adversarioNome();

    document.getElementById("texto-vez").textContent =
    "Vez do " + adversarioNome();

    desabilitarTabuleiro();

    let pontos = 0;

    const intervalo = setInterval(function() {
        pontos++;

        if (pontos > 3) {
            pontos = 1;
        }

    document.getElementById("texto-vez").textContent =
        "Vez do " + adversarioNome() + ".".repeat(pontos);
    }, 200);

    setTimeout(function() {
        clearInterval(intervalo);
        jogadaComputador();
    }, 2000);

}


function jogadaComputador() {

    if (jogoEncerrado) {

        return;

    }

    let posicao;


    if (dificuldadeAtual === "aprendiz") {

        posicao = jogadaAprendiz();

    }

    else if (dificuldadeAtual === "veterano") {

        posicao = jogadaVeterano();

    }

    else if (dificuldadeAtual === "mestre") {

        posicao = jogadaMestre();

    }

    else {

        posicao = jogadaGrandeMestre();

    }


    if (posicao !== null) {

        tabuleiro[posicao] = "O";

    }

    atualizarTabuleiro();


    if (verificarVitoria("O")) {

        perder();

        return;

    }


    if (tabuleiroCheio()) {

        empate();

        return;

    }


    document.getElementById("texto-vez").textContent =
        "Sua vez";

    habilitarTabuleiro();

}


function jogadaAprendiz() {

    const vazias = casasVazias();

    const indice = Math.floor(
        Math.random() * vazias.length
    );

    return vazias[indice];

}


function jogadaVeterano() {

    const vazias = casasVazias();


    if (Math.random() < 0.35) {

        const vitoria = encontrarJogadaVencedora("O");

        if (vitoria !== null) {

            return vitoria;

        }

    }


    if (Math.random() < 0.50) {

        const bloqueio = encontrarJogadaVencedora("X");

        if (bloqueio !== null) {

            return bloqueio;

        }

    }


    if (
        tabuleiro[4] === "" &&
        Math.random() < 0.50
    ) {

        return 4;

    }


    const indice = Math.floor(
        Math.random() * vazias.length
    );

    return vazias[indice];

}


function jogadaMestre() {

    const vitoria = encontrarJogadaVencedora("O");

    if (vitoria !== null) {

        return vitoria;

    }


    const bloqueio = encontrarJogadaVencedora("X");

    if (bloqueio !== null) {

        return bloqueio;

    }


    if (tabuleiro[4] === "") {

        return 4;

    }


    const cantos = [

        0,
        2,
        6,
        8

    ].filter(function(posicao) {

        return tabuleiro[posicao] === "";

    });


    if (cantos.length > 0) {

        return cantos[
            Math.floor(
                Math.random() * cantos.length
            )
        ];

    }


    return casasVazias()[0];

}


function jogadaGrandeMestre() {

    let melhorPontuacao = -Infinity;

    let melhorJogada = null;


    const vazias = casasVazias();


    for (let posicao of vazias) {

        tabuleiro[posicao] = "O";

        const pontuacaoJogada =
            minimax(tabuleiro, false);

        tabuleiro[posicao] = "";


        if (pontuacaoJogada > melhorPontuacao) {

            melhorPontuacao =
                pontuacaoJogada;

            melhorJogada =
                posicao;

        }

    }


    return melhorJogada;

}


function minimax(tabuleiroAtual, maximizando) {

    if (verificarVitoriaNoTabuleiro(
        tabuleiroAtual,
        "O"
    )) {

        return 10;

    }


    if (verificarVitoriaNoTabuleiro(
        tabuleiroAtual,
        "X"
    )) {

        return -10;

    }


    if (
        !tabuleiroAtual.includes("")
    ) {

        return 0;

    }


    if (maximizando) {

        let melhorPontuacao = -Infinity;


        for (
            let posicao = 0;
            posicao < 9;
            posicao++
        ) {

            if (tabuleiroAtual[posicao] === "") {

                tabuleiroAtual[posicao] = "O";

                const pontuacaoJogada =
                    minimax(
                        tabuleiroAtual,
                        false
                    );

                tabuleiroAtual[posicao] = "";

                melhorPontuacao =
                    Math.max(
                        melhorPontuacao,
                        pontuacaoJogada
                    );

            }

        }


        return melhorPontuacao;

    }


    else {

        let melhorPontuacao = Infinity;


        for (
            let posicao = 0;
            posicao < 9;
            posicao++
        ) {

            if (tabuleiroAtual[posicao] === "") {

                tabuleiroAtual[posicao] = "X";

                const pontuacaoJogada =
                    minimax(
                        tabuleiroAtual,
                        true
                    );

                tabuleiroAtual[posicao] = "";

                melhorPontuacao =
                    Math.min(
                        melhorPontuacao,
                        pontuacaoJogada
                    );

            }

        }


        return melhorPontuacao;

    }

}


function encontrarJogadaVencedora(jogador) {

    for (let posicao = 0; posicao < 9; posicao++) {

        if (tabuleiro[posicao] === "") {

            tabuleiro[posicao] = jogador;

            const venceu =
                verificarVitoria(jogador);

            tabuleiro[posicao] = "";

            if (venceu) {

                return posicao;

            }

        }

    }


    return null;

}


function verificarVitoria(jogador) {

    return verificarVitoriaNoTabuleiro(
        tabuleiro,
        jogador
    );

}


function verificarVitoriaNoTabuleiro(
    tabuleiroAtual,
    jogador
) {

    for (let combinacao of combinacoes) {

        const [a, b, c] = combinacao;

        if (
            tabuleiroAtual[a] === jogador &&
            tabuleiroAtual[b] === jogador &&
            tabuleiroAtual[c] === jogador
        ) {

            return true;

        }

    }

    return false;

}


function tabuleiroCheio() {

    return !tabuleiro.includes("");

}


function casasVazias() {

    const vazias = [];

    for (let posicao = 0; posicao < 9; posicao++) {

        if (tabuleiro[posicao] === "") {

            vazias.push(posicao);

        }

    }

    return vazias;

}


function vencer() {

    jogoEncerrado = true;

    vitorias++;

    partidas++;

    let pontos = pontuacaoDificuldade();

    pontuacao += pontos;

    mostrarMensagem(
        "Você venceu! Ganhou " +
        pontos.toString().replace(".", ",") +
        " ponto.",
        "vitoria"
    );

    registrarPontuacao(pontos);

    finalizarJogo();

}


function perder() {

    jogoEncerrado = true;

    partidas++;

    mostrarMensagem(
        "O grande mestre venceu! Você não ganhou pontos.",
        "derrota"
    );

    registrarPontuacao(0);

    finalizarJogo();

}


function empate() {

    jogoEncerrado = true;

    partidas++;

    mostrarMensagem(
        "Empate! Ninguém ganhou pontos.",
        "neutra"
    );

    registrarPontuacao(0);

    finalizarJogo();

}


function pontuacaoDificuldade() {

    const pontos = {

        aprendiz: 0.25,

        veterano: 0.5,

        mestre: 0.75,

        "grande-mestre": 1

    };

    return pontos[dificuldadeAtual];

}


function adversarioNome() {

    if (
        dificuldadeAtual === "aprendiz" ||
        dificuldadeAtual === "veterano"
    ) {

        return "Veterano";

    }

    return "Grande Mestre";

}


function desabilitarTabuleiro() {

    const casas =
        document.querySelectorAll(".casa");

    casas.forEach(function(casa) {

        casa.disabled = true;

    });

}


function habilitarTabuleiro() {

    const casas =
        document.querySelectorAll(".casa");

    casas.forEach(function(casa, indice) {

        if (tabuleiro[indice] === "") {

            casa.disabled = false;

        }

    });

}


function finalizarJogo() {

    desabilitarTabuleiro();

    document.getElementById("botao-nova-partida").style.display = 
    "inline-block";

    document.getElementById("botao-voltar").style.display =
    "none";

    document.getElementById("texto-vez").textContent =
    "Fim de Jogo";

    atualizarPlacar();

}


function mostrarMensagem(texto, tipo = "neutra") {

    const mensagem =
        document.getElementById("mensagem");

    mensagem.textContent = texto;

    mensagem.className = "";

    if (!texto) {

        return;

    }

    mensagem.classList.add(
        "mensagem-" + tipo
    );

}


function voltarDificuldades() {

    jogoEncerrado = true;

    document.getElementById("jogo").style.display =
        "none";

    document.getElementById("selecao-dificuldade").style.display =
        "block";

    document.getElementById("botao-voltar").style.display =
        "none";

    document.getElementById("botao-nova-partida").style.display =
        "none";

    document.getElementById("mensagem").textContent = "";

    document.getElementById("mensagem").className = "";

}
 

function registrarPontuacao(pontos) {

    fetch("registrar_pontuacao.php", {

        method: "POST",

        headers: {

            "Content-Type":
                "application/x-www-form-urlencoded"

        },

        body:
            "jogo=velha&pontos=" +
            encodeURIComponent(pontos)

    });

}