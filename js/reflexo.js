let dificuldadeAtual = "";

let tamanhoTabuleiro = 0;

let vidas = 0;

let pontuacao = 0;

let partidas = 0;

let vitorias = 0;

let vitoriasFacil = 0;

let vitoriasMedio = 0;

let vitoriasDificil = 0;

let pontuacaoTotal = 0;

let pontuacaoFacil = 0;

let pontuacaoMedio = 0;

let pontuacaoDificil = 0;

let intervaloAparicao = 0;

let duracaoLuz = 0;

let quantidadeLuzes = 0;

let tempoTransicao = 500;

let tempoIntervaloVisual = 200;

let jogoAtivo = false;

let luzesAtivas = [];

let temporizadorAparicao = null;

let temporizadoresLuzes = [];

let vidaPerdidaNoCiclo = false;

const configuracoes = {

    facil: {

        nome: "Fácil",

        tamanho: 2,

        vidas: 3,

        maximo: 30,

        pontosPorAcerto: 1,

        intervalo: 0,

        duracao: 1100,

        quantidade: 1

    },

    medio: {

        nome: "Médio",

        tamanho: 4,

        vidas: 5,

        maximo: 60,

        pontosPorAcerto: 1,

        intervalo: -400,

        duracao: 1000,

        quantidade: 1

    },

    dificil: {

        nome: "Difícil",

        tamanho: 6,

        vidas: 7,

        maximo: 90,

        pontosPorAcerto: 1,

        intervalo: -1000,

        duracao: 1000,

        quantidade: 2

    }

};



function iniciarJogo(dificuldade) {

    const configuracao = configuracoes[dificuldade];

    dificuldadeAtual = dificuldade;

    tamanhoTabuleiro = configuracao.tamanho;

    vidas = configuracao.vidas;

    pontuacao = 0;

    intervaloAparicao = configuracao.intervalo;

    duracaoLuz = configuracao.duracao;

    quantidadeLuzes = configuracao.quantidade;

    tempoTransicao = 500;

    tempoIntervaloVisual = 200;

    jogoAtivo = true;

    luzesAtivas = [];

    vidaPerdidaNoCiclo = false;

    limparTemporizadores();

    document.getElementById("selecao-dificuldade").style.display =
        "none";

    document.getElementById("jogo").style.display =
        "block";

    document.getElementById("dificuldade").textContent =
        configuracao.nome;

    document.getElementById("vidas").textContent =
        vidas;

    document.getElementById("pontos-jogo").textContent =
        pontuacao;

    document.getElementById("mensagem").textContent =
        "";

    document.getElementById("mensagem").className =
        "";

    document.getElementById("botao-voltar").style.display =
        "inline-block";

    document.getElementById("botao-nova-partida").style.display =
        "none";

    document.getElementById("texto-vez").textContent =
        "Prepare-se...";

    criarTabuleiro();

    atualizarPlacar();

    setTimeout(function() {

        if (!jogoAtivo) {
            return;
        }

        document.getElementById("texto-vez").textContent =
            "Encontre as luzes!";

        iniciarCiclo();

    }, 800);

}



function criarTabuleiro() {

    const tabuleiro =
        document.getElementById("tabuleiro");

    tabuleiro.innerHTML = "";

    tabuleiro.style.gridTemplateColumns =
        `repeat(${tamanhoTabuleiro}, 1fr)`;

    tabuleiro.style.gridTemplateRows =
        `repeat(${tamanhoTabuleiro}, 1fr)`;

    const quantidadeCasas =
        tamanhoTabuleiro * tamanhoTabuleiro;

    for (let i = 0; i < quantidadeCasas; i++) {

        const casa =
            document.createElement("button");

        casa.className =
            "casa-reflexo";

        casa.dataset.posicao =
            i;

        casa.dataset.expirada =
            "false";

        aplicarFundoXadrez(
            casa,
            i
        );

        casa.addEventListener(
            "click",
            function() {

                clicarCasa(i);

            }
        );

        tabuleiro.appendChild(
            casa
        );

    }

}



function aplicarFundoXadrez(casa, posicao) {

    const cor =
        escolherCor(posicao);

    if (cor === "roxo") {

        casa.style.setProperty(
            "background",
            "rgba(108, 77, 255, 0.08)",
            "important"
        );

    } else {

        casa.style.setProperty(
            "background",
            "rgba(255, 122, 0, 0.07)",
            "important"
        );

    }

}



function iniciarCiclo() {

    if (!jogoAtivo) {
        return;
    }

    vidaPerdidaNoCiclo =
        false;

    removerLuzesAtivas();

    const novasPosicoes =
        escolherPosicoes();

    novasPosicoes.forEach(
        function(posicao, indice) {

            const casa =
                document.querySelector(
                    `.casa-reflexo[data-posicao="${posicao}"]`
                );

            if (!casa) {
                return;
            }

            const cor =
                escolherCor(posicao);

            setTimeout(
                function() {

                    if (!jogoAtivo) {
                        return;
                    }

                    ativarLuz(
                        casa,
                        posicao,
                        cor
                    );

                },
                tempoIntervaloVisual +
                (indice * 30)
            );

        }
    );

    /*
     * O próximo ciclo só começa depois que
     * a duração da luz terminar.
     *
     * No Difícil, a luz que permanecer acesa
     * pode receber mais 1 segundo.
     */
    const tempoExtraPossivel =
        dificuldadeAtual === "dificil"
            ? 1000
            : 0;

    const tempoProximoCiclo =
        tempoIntervaloVisual +
        duracaoLuz +
        tempoExtraPossivel +
        intervaloAparicao +
        tempoTransicao;

    temporizadorAparicao =
        setTimeout(
            function() {

                iniciarCiclo();

            },
            tempoProximoCiclo
        );

}



function escolherPosicoes() {

    const total =
        tamanhoTabuleiro *
        tamanhoTabuleiro;

    const posicoes = [];

    while (
        posicoes.length <
        quantidadeLuzes
    ) {

        const posicao =
            Math.floor(
                Math.random() * total
            );

        if (
            !posicoes.includes(
                posicao
            )
        ) {

            posicoes.push(
                posicao
            );

        }

    }

    return posicoes;

}



function escolherCor(posicao) {

    const linha =
        Math.floor(
            posicao /
            tamanhoTabuleiro
        );

    const coluna =
        posicao %
        tamanhoTabuleiro;

    if (
        (linha + coluna) % 2 === 0
    ) {

        return "roxo";

    }

    return "laranja";

}



function ativarLuz(casa, posicao, cor) {

    if (!jogoAtivo) {
        return;
    }

    casa.classList.remove(
        "luz-roxa",
        "luz-laranja",
        "acertado",
        "ofuscado"
    );

    casa.style.removeProperty(
        "background"
    );

    casa.style.removeProperty(
        "opacity"
    );

    casa.dataset.expirada =
        "false";

    casa.classList.add(
        cor === "roxo"
            ? "luz-roxa"
            : "luz-laranja"
    );

    const luz = {

        posicao: posicao,

        clicada: false,

        tempoExtra: false,

        tempoRestante: duracaoLuz,

        temporizador: null

    };

    luzesAtivas.push(
        luz
    );

    luz.temporizador =
        setTimeout(
            function() {

                expirarLuz(
                    posicao
                );

            },
            luz.tempoRestante
        );

    temporizadoresLuzes.push(
        luz.temporizador
    );

}



function clicarCasa(posicao) {

    if (!jogoAtivo) {
        return;
    }

    const casa =
        document.querySelector(
            `.casa-reflexo[data-posicao="${posicao}"]`
        );

    if (
        casa &&
        casa.dataset.expirada ===
        "true"
    ) {

        return;

    }

    const luz =
        luzesAtivas.find(
            function(luzAtual) {

                return (
                    luzAtual.posicao ===
                    posicao
                );

            }
        );

    if (!luz) {

        perderVida();

        return;

    }

    if (luz.clicada) {

        return;

    }

    luz.clicada =
        true;

    if (
        luz.temporizador !==
        null
    ) {

        clearTimeout(
            luz.temporizador
        );

    }

    if (casa) {

        casa.classList.add(
            "acertado"
        );

    }

    pontuacao++;

    if (
        pontuacao >
        configuracoes[
            dificuldadeAtual
        ].maximo
    ) {

        pontuacao =
            configuracoes[
                dificuldadeAtual
            ].maximo;

    }

    document.getElementById(
        "pontos-jogo"
    ).textContent =
        pontuacao;

    if (
        dificuldadeAtual ===
        "dificil" &&
        luzesAtivas.length === 2
    ) {

        const outraLuz =
            luzesAtivas.find(
                function(luzAtual) {

                    return (
                        luzAtual.posicao !==
                        posicao &&
                        !luzAtual.clicada
                    );

                }
            );

        if (
            outraLuz &&
            !outraLuz.tempoExtra
        ) {

            adicionarTempoExtra(
                outraLuz
            );

        }

    }

    verificarCicloConcluido();

    if (
        pontuacao >=
        configuracoes[
            dificuldadeAtual
        ].maximo
    ) {

        finalizarJogo();

    }

}



function adicionarTempoExtra(luz) {

    if (
        luz.clicada ||
        luz.tempoExtra
    ) {

        return;

    }

    luz.tempoExtra =
        true;

    if (
        luz.temporizador !==
        null
    ) {

        clearTimeout(
            luz.temporizador
        );

    }

    luz.tempoRestante +=
        1000;

    luz.temporizador =
        setTimeout(
            function() {

                expirarLuz(
                    luz.posicao
                );

            },
            luz.tempoRestante
        );

    temporizadoresLuzes.push(
        luz.temporizador
    );

}



function verificarCicloConcluido() {

    if (
        luzesAtivas.length ===
        0
    ) {

        return;

    }

    const todasClicadas =
        luzesAtivas.every(
            function(luz) {

                return luz.clicada;

            }
        );

    if (!todasClicadas) {

        return;

    }

}



function expirarLuz(posicao) {

    if (!jogoAtivo) {
        return;
    }

    const luz =
        luzesAtivas.find(
            function(luzAtual) {

                return (
                    luzAtual.posicao ===
                    posicao
                );

            }
        );

    /*
     * Se a luz não existe mais ou já foi clicada,
     * não perde vida.
     */
    if (
        !luz ||
        luz.clicada
    ) {

        return;

    }

    const casa =
        document.querySelector(
            `.casa-reflexo[data-posicao="${posicao}"]`
        );

    if (casa) {

        casa.classList.remove(
            "luz-roxa",
            "luz-laranja"
        );

        casa.dataset.expirada =
            "true";

        aplicarFundoXadrez(
            casa,
            posicao
        );

    }

    /*
     * A luz terminou seu tempo sem
     * o jogador ter clicado nela.
     */
    if (
        !vidaPerdidaNoCiclo
    ) {

        vidaPerdidaNoCiclo =
            true;

        perderVida();

    }

    luzesAtivas =
        luzesAtivas.filter(
            function(luzAtual) {

                return (
                    luzAtual.posicao !==
                    posicao
                );

            }
        );

}



function perderVida() {

    if (!jogoAtivo) {
        return;
    }

    vidas--;

    document.getElementById(
        "vidas"
    ).textContent =
        vidas;

    if (vidas <= 0) {

        vidas = 0;

        document.getElementById(
            "vidas"
        ).textContent =
            vidas;

        finalizarJogo();

    }

}



function finalizarJogo() {

    if (!jogoAtivo) {
        return;
    }

    jogoAtivo =
        false;

    limparTemporizadores();

    removerLuzesAtivas();

    partidas++;

    const configuracao =
        configuracoes[
            dificuldadeAtual
        ];

    let pontosBanco =
        0;

    let venceu =
        false;

    if (
        pontuacao === 0
    ) {

        pontosBanco =
            0;

    } else if (
        pontuacao >=
        configuracao.maximo
    ) {

        if (
            dificuldadeAtual ===
            "facil"
        ) {

            pontosBanco =
                1;

        } else if (
            dificuldadeAtual ===
            "medio"
        ) {

            pontosBanco =
                2;

        } else {

            pontosBanco =
                3;

        }

        venceu =
            true;

    } else if (
        pontuacao >
        configuracao.maximo / 2
    ) {

        pontosBanco =
            0.5;

        venceu =
            true;

    } else {

        pontosBanco =
            0.25;

    }

    if (venceu) {

        vitorias++;

        if (
            dificuldadeAtual ===
            "facil"
        ) {

            vitoriasFacil++;

        } else if (
            dificuldadeAtual ===
            "medio"
        ) {

            vitoriasMedio++;

        } else {

            vitoriasDificil++;

        }

    }

    if (
        dificuldadeAtual ===
        "facil"
    ) {

        pontuacaoFacil +=
            pontuacao;

    } else if (
        dificuldadeAtual ===
        "medio"
    ) {

        pontuacaoMedio +=
            pontuacao;

    } else {

        pontuacaoDificil +=
            pontuacao;

    }

    pontuacaoTotal +=
        pontosBanco;

    atualizarPlacar();

    ofuscarTabuleiro();

    document.getElementById(
        "botao-voltar"
    ).style.display =
        "none";

    document.getElementById(
        "botao-nova-partida"
    ).style.display =
        "inline-block";

    document.getElementById(
        "texto-vez"
    ).textContent =
        "Fim de Jogo";

    mostrarMensagemFinal();

    registrarPontuacao(
        pontosBanco
    );

}



function mostrarMensagemFinal() {

    const mensagem =
        document.getElementById(
            "mensagem"
        );

    mensagem.className =
        "";

    let mensagens =
        [];

    const configuracao =
        configuracoes[
            dificuldadeAtual
        ];

    if (
        pontuacao >=
        configuracao.maximo
    ) {

        mensagens = [

            "Parabéns! Reflexos lendários!",

            "Incrível! Você dominou o desafio!",

            "Perfeito! Seus reflexos estão afiados!",

            "Sensacional! Você foi rápido demais!"

        ];

        mensagem.classList.add(
            "mensagem-vitoria"
        );

    } else if (
        pontuacao >
        configuracao.maximo / 2
    ) {

        mensagens = [

            "Muito bom! Seus reflexos estão ótimos!",

            "Mandou bem! Você chegou longe!",

            "Boa! Seus reflexos estão afiados!",

            "Excelente desempenho! Tente chegar ao máximo!"

        ];

        mensagem.classList.add(
            "mensagem-vitoria"
        );

    } else if (
        pontuacao > 0
    ) {

        mensagens = [

            "Boa tentativa! Dá para melhorar!",

            "Você conseguiu alguns pontos. Tente novamente!",

            "Quase! Um pouco mais de velocidade!",

            "Continue treinando seus reflexos!"

        ];

        mensagem.classList.add(
            "mensagem-neutra"
        );

    } else {

        mensagens = [

            "Dessa vez os reflexos não ajudaram!",

            "Nem uma luz escapou do seu caminho... tente novamente!",

            "Foi rápido demais para você!",

            "Seus reflexos precisam de um aquecimento!"

        ];

        mensagem.classList.add(
            "mensagem-erro"
        );

    }

    const indice =
        Math.floor(
            Math.random() *
            mensagens.length
        );

    mensagem.textContent =
        mensagens[indice];

}



function ofuscarTabuleiro() {

    const casas =
        document.querySelectorAll(
            ".casa-reflexo"
        );

    casas.forEach(
        function(casa) {

            casa.classList.remove(
                "luz-roxa",
                "luz-laranja",
                "acertado"
            );

            aplicarFundoXadrez(
                casa,
                Number(
                    casa.dataset.posicao
                )
            );

            casa.classList.add(
                "ofuscado"
            );

            casa.style.opacity =
                "0.75";

        }
    );

}



function removerLuzesAtivas() {

    // Verifica se alguma luz do ciclo anterior
    // ainda não foi clicada.
    const luzNaoClicada =
        luzesAtivas.some(
            function(luz) {

                return !luz.clicada;

            }
        );

    // Se havia uma luz que não foi clicada,
    // o jogador perde uma vida.
    if (
        jogoAtivo &&
        luzNaoClicada &&
        !vidaPerdidaNoCiclo
    ) {

        vidaPerdidaNoCiclo =
            true;

        perderVida();

    }

    const casas =
        document.querySelectorAll(
            ".casa-reflexo"
        );

    casas.forEach(
        function(casa) {

            casa.classList.remove(
                "luz-roxa",
                "luz-laranja",
                "acertado"
            );

            casa.style.removeProperty(
                "opacity"
            );

            if (
                casa.dataset.posicao !==
                undefined
            ) {

                aplicarFundoXadrez(
                    casa,
                    Number(
                        casa.dataset.posicao
                    )
                );

            }

        }
    );

    luzesAtivas =
        [];

}



function limparTemporizadores() {

    if (
        temporizadorAparicao !==
        null
    ) {

        clearTimeout(
            temporizadorAparicao
        );

        temporizadorAparicao =
            null;

    }

    temporizadoresLuzes.forEach(
        function(temporizador) {

            clearTimeout(
                temporizador
            );

        }
    );

    temporizadoresLuzes =
        [];

}



function voltarDificuldades() {

    limparTemporizadores();

    jogoAtivo =
        false;

    luzesAtivas =
        [];

    vidaPerdidaNoCiclo =
        false;

    document.getElementById(
        "jogo"
    ).style.display =
        "none";

    document.getElementById(
        "selecao-dificuldade"
    ).style.display =
        "block";

    document.getElementById(
        "botao-voltar"
    ).style.display =
        "inline-block";

    document.getElementById(
        "botao-nova-partida"
    ).style.display =
        "none";

    document.getElementById(
        "mensagem"
    ).textContent =
        "";

    document.getElementById(
        "mensagem"
    ).className =
        "";

    document.getElementById(
        "tabuleiro"
    ).innerHTML =
        "";

}



function atualizarPlacar() {

    document.getElementById(
        "vitorias"
    ).textContent =
        vitorias;

    document.getElementById(
        "vitorias-facil"
    ).textContent =
        vitoriasFacil;

    document.getElementById(
        "vitorias-medio"
    ).textContent =
        vitoriasMedio;

    document.getElementById(
        "vitorias-dificil"
    ).textContent =
        vitoriasDificil;

    document.getElementById(
        "pontuacao"
    ).textContent =
        pontuacaoTotal;

    document.getElementById(
        "pontuacao-facil"
    ).textContent =
        pontuacaoFacil;

    document.getElementById(
        "pontuacao-medio"
    ).textContent =
        pontuacaoMedio;

    document.getElementById(
        "pontuacao-dificil"
    ).textContent =
        pontuacaoDificil;

    document.getElementById(
        "partidas"
    ).textContent =
        partidas;

}



function registrarPontuacao(pontos) {

    if (pontos <= 0) {
        return;
    }

    const dados =
        new URLSearchParams();

    dados.append(
        "jogo",
        "reflexo"
    );

    dados.append(
        "pontos",
        pontos
    );

    fetch(
        "registrar_pontuacao.php",
        {
            method: "POST",

            headers: {

                "Content-Type":
                    "application/x-www-form-urlencoded"

            },

            body:
                dados.toString()

        }
    );

}