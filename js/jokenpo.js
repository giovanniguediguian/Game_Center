let vitorias = 0;

let derrotas = 0;

let empates = 0;

let sequencia = 0;

let maiorSequencia = 0;

let pontuacao = 0;

let escolhaAtual = null;

const historico = [];



const opcoes = {

    pedra: {

        nome: "Pedra",

        icone: "🪨"

    },

    papel: {

        nome: "Papel",

        icone: "📄"

    },

    tesoura: {

        nome: "Tesoura",

        icone: "✂️"

    }

};



const mensagensVitoria = [

    "Boa! Você venceu!",

    "Mandou bem!",

    "Essa foi sua!",

    "O monge não teve chance!",

    "Vitória!"

];



const mensagensDerrota = [

    "Dessa vez o monge levou!",

    "Quase! Tente novamente.",

    "O monge Joken Poo ganhou essa!",

    "Essa foi por pouco!",

    "Derrota! Mas ainda dá para recuperar."

];



const mensagensEmpate = [

    "Empate! Ninguém levou essa.",

    "Os dois escolheram igual!",

    "Essa foi equilibrada!",

    "Empate! Mais uma rodada?"

];



function jogar(escolhaJogador) {

    if (escolhaAtual !== null) {

        return;

    }

    escolhaAtual = escolhaJogador;

    bloquearBotoes();

    limparResultado();

    document.getElementById("escolha-jogador").textContent =

        opcoes[escolhaJogador].icone;



    document.getElementById("escolha-computador").textContent =

        "❔";



    iniciarContagem();

}



function iniciarContagem() {

    const contagem = document.getElementById("contagem");

    contagem.textContent = "3";

    setTimeout(function() {

        contagem.textContent = "2";

    }, 700);



    setTimeout(function() {

        contagem.textContent = "1";

    }, 1400);



    setTimeout(function() {

        contagem.textContent = "JÁ!";

    }, 2100);



    setTimeout(function() {

        finalizarRodada();

    }, 2700);

}



function finalizarRodada() {

    const opcoesComputador = [

        "pedra",

        "papel",

        "tesoura"

    ];



    const escolhaComputador =

        opcoesComputador[

            Math.floor(Math.random() * opcoesComputador.length)

        ];



    document.getElementById("escolha-computador").textContent =

        opcoes[escolhaComputador].icone;



    let resultado;



    if (escolhaAtual === escolhaComputador) {

        resultado = "empate";

    } else if (

        (escolhaAtual === "pedra" &&

            escolhaComputador === "tesoura") ||

        (escolhaAtual === "papel" &&

            escolhaComputador === "pedra") ||

        (escolhaAtual === "tesoura" &&

            escolhaComputador === "papel")

    ) {

        resultado = "vitoria";

    } else {

        resultado = "derrota";

    }



    atualizarPlacar(resultado);

    mostrarResultado(resultado);

    adicionarHistorico(

        escolhaAtual,

        escolhaComputador,

        resultado

    );



    document.getElementById("contagem").textContent = "";

    document.getElementById("botao-novamente").disabled = false;

}



function atualizarPlacar(resultado) {

    if (resultado === "vitoria") {

        vitorias++;

        sequencia++;



        if (sequencia > maiorSequencia) {

            maiorSequencia = sequencia;

        }



        pontuacao += sequencia;



        registrarPontuacao(sequencia);

    }



    if (resultado === "derrota") {

        derrotas++;

        sequencia = 0;

    }



    if (resultado === "empate") {

        empates++;

        pontuacao += 0.5;



        registrarPontuacao(0.5);

    }



    document.getElementById("vitorias").textContent =

        vitorias;

    document.getElementById("derrotas").textContent =

        derrotas;

    document.getElementById("empates").textContent =

        empates;

    document.getElementById("sequencia").textContent =

        sequencia;

    document.getElementById("pontuacao").textContent =

        pontuacao.toFixed(1);

}



function registrarPontuacao(pontos) {

    fetch("registrar_pontuacao.php", {

        method: "POST",

        headers: {

            "Content-Type": "application/x-www-form-urlencoded"

        },

        body: "jogo=jokenpo&pontos=" + pontos

    });

}



function mostrarResultado(resultado) {

    const elementoResultado =

        document.getElementById("resultado");

    const mensagem =

        document.getElementById("mensagem-resultado");



    if (resultado === "vitoria") {

        elementoResultado.textContent =

            "VOCÊ VENCEU!";

        mensagem.textContent =

            mensagensVitoria[

                Math.floor(

                    Math.random() * mensagensVitoria.length

                )

            ];

    }



    if (resultado === "derrota") {

        elementoResultado.textContent =

            "VOCÊ PERDEU!";

        mensagem.textContent =

            mensagensDerrota[

                Math.floor(

                    Math.random() * mensagensDerrota.length

                )

            ];

    }



    if (resultado === "empate") {

        elementoResultado.textContent =

            "EMPATE!";

        mensagem.textContent =

            mensagensEmpate[

                Math.floor(

                    Math.random() * mensagensEmpate.length

                )

            ];

    }



    if (sequencia >= 2) {

        mensagem.textContent +=

            " 🔥 " + sequencia + " vitórias seguidas!";

    }

}



function adicionarHistorico(

    escolhaJogador,

    escolhaComputador,

    resultado

) {

    historico.push({

        jogador: escolhaJogador,

        computador: escolhaComputador,

        resultado: resultado

    });



    const elementoHistorico =

        document.getElementById("historico");



    elementoHistorico.innerHTML = "";



    for (

        let i = historico.length - 1;

        i >= 0;

        i--

    ) {

        const rodada = historico[i];



        let textoResultado;



        if (rodada.resultado === "vitoria") {

            textoResultado = "Vitória";

        } else if (rodada.resultado === "derrota") {

            textoResultado = "Derrota";

        } else {

            textoResultado = "Empate";

        }



        const linha =

            document.createElement("p");



        linha.textContent =

            "Rodada " +

            (i + 1) +

            " — " +

            opcoes[rodada.jogador].icone +

            " x " +

            opcoes[rodada.computador].icone +

            " — " +

            textoResultado;



        elementoHistorico.appendChild(linha);

    }

}



function jogarNovamente() {

    escolhaAtual = null;

    document.getElementById("escolha-jogador").textContent =

        "👤";

    document.getElementById("escolha-computador").textContent =

        "🧘";

    document.getElementById("resultado").textContent =

        "";

    document.getElementById("mensagem-resultado").textContent =

        "";

    document.getElementById("botao-novamente").disabled =

        true;

    desbloquearBotoes();

}



function limparResultado() {

    document.getElementById("resultado").textContent =

        "";

    document.getElementById("mensagem-resultado").textContent =

        "";

}



function bloquearBotoes() {

    document.getElementById("botao-pedra").disabled =

        true;

    document.getElementById("botao-papel").disabled =

        true;

    document.getElementById("botao-tesoura").disabled =

        true;

}



function desbloquearBotoes() {

    document.getElementById("botao-pedra").disabled =

        false;

    document.getElementById("botao-papel").disabled =

        false;

    document.getElementById("botao-tesoura").disabled =

        false;

}