let baralho = [];

let maoJogador = [];

let maoComputador = [];

let modoAtual = "";

let jogoEncerrado = false;

let vezComputador = false;

let jogadorBateu21 = false;

let ultimoPasse = null;

let acaoForcada = null;

let vitorias = 0;

let pontuacao = 0;

let partidas = 0;

const naipes = [

    "♠",

    "♥",

    "♦",

    "♣"

];

const valores = [

    "A",

    "2",

    "3",

    "4",

    "5",

    "6",

    "7",

    "8",

    "9",

    "10",

    "J",

    "Q",

    "K"

];

function iniciarJogo(modo) {

    modoAtual = modo;

    jogoEncerrado = false;

    vezComputador = false;

    jogadorBateu21 = false;

    ultimoPasse = null;

    acaoForcada = null;

    maoJogador = [];

    maoComputador = [];

    criarBaralho();

    embaralharBaralho();

    document.getElementById("selecao-dificuldade").style.display =

        "none";

    document.getElementById("jogo").style.display =

        "block";

    document.getElementById("modo").textContent =

        modoTexto(modo);

    document.getElementById("botao-voltar").style.display =

        "inline-block";

    document.getElementById("botao-nova-partida").style.display =

        "none";

    document.getElementById("botao-passar").style.display =

        "inline-block";

    document.getElementById("botao-mostrar").style.display =

        "inline-block";

    document.getElementById("monte").style.pointerEvents =

        "auto";

    document.getElementById("monte").style.opacity =

        "1";

    document.getElementById("mensagem").textContent =

        "";

    document.getElementById("mensagem").className =

        "";

    document.getElementById("texto-vez").textContent =

        "Sua vez";

    distribuirCartas();

    atualizarJogo();

    atualizarPlacar();

    const totalInicial =

        calcularTotal(maoJogador);

    if (

        modoAtual === "normal" &&

        totalInicial === 21

    ) {

        jogadorBateu21 = true;

        document.getElementById(

            "botao-passar"

        ).style.display =

            "none";

        document.getElementById(

            "monte"

        ).style.pointerEvents =

            "none";

        document.getElementById(

            "monte"

        ).style.opacity =

            "0.5";

        document.getElementById(

            "mensagem"

        ).textContent =

            "Você bateu 21! Mostre sua mão.";

    }

}

function modoTexto(modo) {

    if (modo === "as-cegas") {

        return "Às cegas";

    }

    return "Normal";

}

function criarBaralho() {

    baralho = [];

    for (let naipe of naipes) {

        for (let valor of valores) {

            baralho.push({

                valor: valor,

                naipe: naipe

            });

        }

    }

}

function embaralharBaralho() {

    for (let i = baralho.length - 1; i > 0; i--) {

        const j =

            Math.floor(Math.random() * (i + 1));

        const temp =

            baralho[i];

        baralho[i] =

            baralho[j];

        baralho[j] =

            temp;

    }

}

function comprarDoBaralho() {

    return baralho.pop();

}

function distribuirCartas() {

    maoJogador.push(

        comprarDoBaralho()

    );

    maoComputador.push(

        comprarDoBaralho()

    );

    maoJogador.push(

        comprarDoBaralho()

    );

    maoComputador.push(

        comprarDoBaralho()

    );

}

function valorCarta(carta) {

    if (carta.valor === "A") {

        return 11;

    }

    if (

        carta.valor === "J" ||

        carta.valor === "Q" ||

        carta.valor === "K"

    ) {

        return 10;

    }

    return Number(carta.valor);

}

function calcularTotal(mao) {

    let total = 0;

    let ases = 0;

    for (let carta of mao) {

        total += valorCarta(carta);

        if (carta.valor === "A") {

            ases++;

        }

    }

    while (total > 21 && ases > 0) {

        total -= 10;

        ases--;

    }

    return total;

}

function valorAtualCarta(carta, mao) {

    if (carta.valor !== "A") {

        return valorCarta(carta);

    }

    let total = 0;

    for (let outraCarta of mao) {

        if (outraCarta === carta) {

            continue;

        }

        total += valorCarta(outraCarta);

    }

    if (total + 11 <= 21) {

        return 11;

    }

    return 1;

}

function atualizarJogo() {

    mostrarCartasJogador();

    mostrarCartasComputador();

    atualizarTotais();

}

function mostrarCartasJogador() {

    const area =

        document.getElementById(

            "cartas-jogador"

        );

    area.innerHTML = "";

    for (let carta of maoJogador) {

        const elemento =

            criarElementoCarta(

                carta,

                maoJogador,

                true

            );

        area.appendChild(elemento);

    }

}

function mostrarCartasComputador() {

    const area =

        document.getElementById(

            "cartas-computador"

        );

    area.innerHTML = "";

    for (let carta of maoComputador) {

        if (!jogoEncerrado) {

            const elemento =

                criarCartaEscondida();

            area.appendChild(elemento);

        }

        else {

            const elemento =

                criarElementoCarta(

                    carta,

                    maoComputador,

                    true

                );

            area.appendChild(elemento);

        }

    }

}

function criarElementoCarta(

    carta,

    mao,

    mostrarValor

) {

    const cartaElemento =

        document.createElement("div");

    cartaElemento.className =

        "carta";

    const cantoSuperior =

        document.createElement("span");

    cantoSuperior.className =

        "valor-superior";

    cantoSuperior.textContent =

        carta.valor + carta.naipe;

    const centro =

        document.createElement("span");

    centro.className =

        "naipe-carta";

    centro.textContent =

        carta.naipe;

    const cantoInferior =

        document.createElement("span");

    cantoInferior.className =

        "valor-inferior";

    cantoInferior.textContent =

        carta.valor + carta.naipe;

    cartaElemento.appendChild(

        cantoSuperior

    );

    cartaElemento.appendChild(

        centro

    );

    cartaElemento.appendChild(

        cantoInferior

    );

    if (

        carta.naipe === "♥" ||

        carta.naipe === "♦"

    ) {

        cartaElemento.classList.add(

            "carta-vermelha"

        );

    }

    if (

        mostrarValor &&

        (

            modoAtual === "normal" ||

            jogoEncerrado

        )

    ) {

        const valor =

            document.createElement("div");

        valor.className =

            "valor-atual";

        valor.textContent =

            valorAtualCarta(

                carta,

                mao

            );

        cartaElemento.appendChild(

            valor

        );

    }

    return cartaElemento;

}

function criarCartaEscondida() {

    const carta =

        document.createElement("div");

    carta.className =

        "carta carta-escondida";

    return carta;

}

function atualizarTotais() {

    const totalJogador =

        document.getElementById(

            "total-jogador"

        );

    const totalComputador =

        document.getElementById(

            "total-computador"

        );

    if (modoAtual === "normal") {

        totalJogador.textContent =

            "Total: " +

            calcularTotal(maoJogador);

    }

    else {

        totalJogador.textContent =

            "";

    }

    if (jogoEncerrado) {

        totalComputador.textContent =

            "Total: " +

            calcularTotal(maoComputador);

    }

    else {

        totalComputador.textContent =

            "";

    }

}

function comprarCarta() {

    if (

        jogoEncerrado ||

        vezComputador

    ) {

        return;

    }

    const totalAtual =

        calcularTotal(maoJogador);

    if (

        modoAtual === "normal" &&

        totalAtual >= 21

    ) {

        return;

    }

    const carta =

        comprarDoBaralho();

    maoJogador.push(carta);

    ultimoPasse = null;

    acaoForcada = null;

    atualizarJogo();

    const total =

        calcularTotal(maoJogador);

    if (total > 21) {

        finalizarRodada(

            "estouro-jogador"

        );

        return;

    }

    if (total === 21) {

        jogadorBateu21 = true;

        if (modoAtual === "normal") {

            document.getElementById(

                "botao-passar"

            ).style.display =

                "none";

            document.getElementById(

                "monte"

            ).style.pointerEvents =

                "none";

            document.getElementById(

                "monte"

            ).style.opacity =

                "0.5";

            document.getElementById(

                "mensagem"

            ).textContent =

                "Você bateu 21! Mostre sua mão.";

        }

        else {

            finalizarRodada(

                "vinteum-jogador"

            );

        }

        return;

    }

    passarVezAutomaticamente();

}

function passarVezAutomaticamente() {

    vezComputador = true;

    document.getElementById(

        "botao-passar"

    ).style.display =

        "none";

    document.getElementById(

        "botao-mostrar"

    ).style.display =

        "none";

    document.getElementById(

        "monte"

    ).style.pointerEvents =

        "none";

    document.getElementById(

        "monte"

    ).style.opacity =

        "0.5";

    document.getElementById(

        "texto-vez"

    ).textContent =

        "Vez do Rei...";

    setTimeout(function() {

        turnoComputador();

    }, 1000);

}

function passarVez() {

    if (

        jogoEncerrado ||

        vezComputador

    ) {

        return;

    }

    const total =

        calcularTotal(maoJogador);

    if (

        modoAtual === "normal" &&

        total === 21

    ) {

        return;

    }

    if (acaoForcada === "jogador") {

        return;

    }

    if (ultimoPasse === "computador") {

        acaoForcada = "computador";

        ultimoPasse = null;

        passarVezAutomaticamente();

        return;

    }

    ultimoPasse = "jogador";

    passarVezAutomaticamente();

}

function mostrarMao() {

    if (

        jogoEncerrado ||

        vezComputador

    ) {

        return;

    }

    vezComputador = true;

    ultimoPasse = null;

    acaoForcada = null;

    document.getElementById(

        "botao-passar"

    ).style.display =

        "none";

    document.getElementById(

        "botao-mostrar"

    ).style.display =

        "none";

    document.getElementById(

        "monte"

    ).style.pointerEvents =

        "none";

    document.getElementById(

        "monte"

    ).style.opacity =

        "0.5";

    if (jogadorBateu21) {

        finalizarRodada(

            "vinteum-jogador"

        );

    }

    else {

        finalizarRodada(

            "mostrar-jogador"

        );

    }

}

function turnoComputador() {

    if (jogoEncerrado) {

        return;

    }

    const total =

        calcularTotal(maoComputador);

    if (total > 21) {

        finalizarRodada(

            "estouro-oponente"

        );

        return;

    }

    if (total === 21) {

        finalizarRodada(

            "vinteum-oponente"

        );

        return;

    }

    let decisao;

    if (acaoForcada === "computador") {

        decisao =

            decidirJogadaComputadorObrigatoria();

    }

    else {

        decisao =

            decidirJogadaComputador();

    }

    if (decisao === "comprar") {

        const carta =

            comprarDoBaralho();

        maoComputador.push(carta);

        ultimoPasse = null;

        acaoForcada = null;

        atualizarJogo();

        const novoTotal =

            calcularTotal(maoComputador);

        if (novoTotal > 21) {

            finalizarRodada(

                "estouro-oponente"

            );

            return;

        }

        if (novoTotal === 21) {

            finalizarRodada(

                "vinteum-oponente"

            );

            return;

        }

        setTimeout(function() {

            voltarParaJogador();

        }, 1000);

        return;

    }

    if (decisao === "passar") {

        if (ultimoPasse === "jogador") {

            acaoForcada = "jogador";

            ultimoPasse = null;

        }

        else {

            ultimoPasse = "computador";

        }

        setTimeout(function() {

            voltarParaJogador();

        }, 700);

        return;

    }

    if (decisao === "mostrar") {

        ultimoPasse = null;

        acaoForcada = null;

        finalizarRodada(

            "mostrar-oponente"

        );

    }

}

function decidirJogadaComputadorObrigatoria() {

    const sorte =

        Math.random();

    if (sorte < 0.65) {

        return "comprar";

    }

    return "mostrar";

}

function voltarParaJogador() {

    if (jogoEncerrado) {

        return;

    }

    vezComputador = false;

    document.getElementById(

        "botao-passar"

    ).style.display =

        "inline-block";

    document.getElementById(

        "botao-mostrar"

    ).style.display =

        "inline-block";

    document.getElementById(

        "monte"

    ).style.pointerEvents =

        "auto";

    document.getElementById(

        "monte"

    ).style.opacity =

        "1";

    document.getElementById(

        "texto-vez"

    ).textContent =

        "Sua vez";

    document.getElementById(

        "mensagem"

    ).textContent =

        "";

    if (acaoForcada === "jogador") {

        document.getElementById(

            "botao-passar"

        ).style.display =

            "none";

        document.getElementById(

            "mensagem"

        ).textContent =

            "O Rei passou. Você deve comprar ou mostrar a mão!";

    }

}

function decidirJogadaComputador() {

    const total =

        calcularTotal(maoComputador);

    if (total < 14) {

        const sorte =

            Math.random();

        if (sorte < 0.90) {

            return "comprar";

        }

        return "passar";

    }

    if (

        total >= 15 &&

        total <= 19

    ) {

        const sorte =

            Math.random();

        if (

            total === 15 ||

            total === 16 ||

            total === 17

        ) {

            if (sorte < 0.60) {

                return "comprar";

            }

            if (sorte < 0.95) {

                return "passar";

            }

            return "mostrar";

        }

        if (total === 18) {

            if (sorte < 0.40) {

                return "comprar";

            }

            if (sorte < 0.70) {

                return "passar";

            }

            return "mostrar";

        }

        if (total === 19) {

            if (sorte < 0.20) {

                return "comprar";

            }

            if (sorte < 0.60) {

                return "passar";

            }

            return "mostrar";

        }

    }

    if (total === 20) {

        if (Math.random() < 0.55) {

            return "mostrar";

        }

        return "passar";

    }

    return "mostrar";

}

function finalizarRodada(motivo = "") {

    if (jogoEncerrado) {

        return;

    }

    jogoEncerrado = true;

    vezComputador = false;

    partidas++;

    atualizarJogo();

    const jogadorTotal =

        calcularTotal(maoJogador);

    const computadorTotal =

        calcularTotal(maoComputador);

    if (

        jogadorTotal === 21 &&

        computadorTotal === 21

    ) {

        pontuacao += 0.5;

        registrarPontuacao(0.5);

        if (

            motivo === "vinteum-jogador"

        ) {

            mostrarMensagem(

                "Você bateu 21! Empate. Você ganhou 0,5 ponto.",

                "neutra"

            );

        }

        else if (

            motivo === "vinteum-oponente"

        ) {

            mostrarMensagem(

                "Rei bateu 21! Empate. Você ganhou 0,5 ponto.",

                "neutra"

            );

        }

        else {

            mostrarMensagem(

                "Ambos bateram 21! Empate. Você ganhou 0,5 ponto.",

                "neutra"

            );

        }

        finalizarJogo();

        return;

    }

    if (jogadorTotal > 21) {

        mostrarMensagem(

            "Você estourou! Perdeu.",

            "derrota"

        );

        registrarPontuacao(0);

        finalizarJogo();

        return;

    }

    if (computadorTotal > 21) {

        const pontos =

            modoAtual === "as-cegas"

                ? 3

                : 1;

        vitorias++;

        pontuacao += pontos;

        registrarPontuacao(

            pontos

        );

        mostrarMensagem(

            "O Rei do Cassino estourou! Você venceu e ganhou " +

            pontos.toString().replace(".", ",") +

            " ponto(s).",

            "vitoria"

        );

        finalizarJogo();

        return;

    }

    if (

        jogadorTotal > computadorTotal

    ) {

        const pontos =

            modoAtual === "as-cegas"

                ? 3

                : 1;

        vitorias++;

        pontuacao += pontos;

        registrarPontuacao(

            pontos

        );

        if (

            motivo === "mostrar-oponente"

        ) {

            mostrarMensagem(

                "O Rei do Cassino mostrou a mão! Você venceu e ganhou " +

                pontos.toString().replace(".", ",") +

                " ponto(s).",

                "vitoria"

            );

        }

        else if (

            motivo === "mostrar-jogador"

        ) {

            mostrarMensagem(

                "Você mostrou a mão! Você venceu e ganhou " +

                pontos.toString().replace(".", ",") +

                " ponto(s).",

                "vitoria"

            );

        }

        else if (

            motivo === "vinteum-oponente"

        ) {

            mostrarMensagem(

                "O Rei bateu 21! Você venceu e ganhou " +

                pontos.toString().replace(".", ",") +

                " ponto(s).",

                "vitoria"

            );

        }

        else if (

            motivo === "vinteum-jogador"

        ) {

            mostrarMensagem(

                "Você bateu 21! Você venceu e ganhou " +

                pontos.toString().replace(".", ",") +

                " ponto(s).",

                "vitoria"

            );

        }

        else {

            mostrarMensagem(

                "Você venceu! Ganhou " +

                pontos.toString().replace(".", ",") +

                " ponto(s).",

                "vitoria"

            );

        }

        finalizarJogo();

        return;

    }

    if (

        jogadorTotal < computadorTotal

    ) {

        registrarPontuacao(0);

        if (

            motivo === "mostrar-oponente"

        ) {

            mostrarMensagem(

                "O Rei do Cassino mostrou a mão! Você perdeu.",

                "derrota"

            );

        }

        else if (

            motivo === "mostrar-jogador"

        ) {

            mostrarMensagem(

                "Você mostrou a mão! Você perdeu.",

                "derrota"

            );

        }

        else if (

            motivo === "vinteum-oponente"

        ) {

            mostrarMensagem(

                "O Rei bateu 21! Você perdeu.",

                "derrota"

            );

        }

        else if (

            motivo === "vinteum-jogador"

        ) {

            mostrarMensagem(

                "Você bateu 21! Você perdeu.",

                "derrota"

            );

        }

        else {

            mostrarMensagem(

                "O Rei venceu! Você não ganhou pontos.",

                "derrota"

            );

        }

        finalizarJogo();

        return;

    }

    pontuacao += 0.5;

    registrarPontuacao(0.5);

    if (

        motivo === "mostrar-oponente"

    ) {

        mostrarMensagem(

            "O Rei do Cassino mostrou a mão! Empate. Você ganhou 0,5 ponto.",

            "neutra"

        );

    }

    else if (

        motivo === "mostrar-jogador"

    ) {

        mostrarMensagem(

            "Você mostrou a mão! Empate. Você ganhou 0,5 ponto.",

            "neutra"

        );

    }

    else if (

        motivo === "vinteum-oponente"

    ) {

        mostrarMensagem(

            "O Rei bateu 21! Empate. Você ganhou 0,5 ponto.",

            "neutra"

        );

    }

    else if (

        motivo === "vinteum-jogador"

    ) {

        mostrarMensagem(

            "Você bateu 21! Empate. Você ganhou 0,5 ponto.",

            "neutra"

        );

    }

    else {

        mostrarMensagem(

            "Empate! Você ganhou 0,5 ponto.",

            "neutra"

        );

    }

    finalizarJogo();

}

function finalizarJogo() {

    jogoEncerrado = true;

    document.getElementById(

        "botao-passar"

    ).style.display =

        "none";

    document.getElementById(

        "botao-mostrar"

    ).style.display =

        "none";

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

    document.getElementById(

        "monte"

    ).style.pointerEvents =

        "none";

    document.getElementById(

        "monte"

    ).style.opacity =

        "0.5";

    atualizarPlacar();

}

function mostrarMensagem(

    texto,

    tipo = "neutra"

) {

    const mensagem =

        document.getElementById(

            "mensagem"

        );

    mensagem.className = "";

    mensagem.textContent =

        texto;

    if (!texto) {

        return;

    }

    mensagem.classList.add(

        "mensagem-" + tipo

    );

}

function atualizarPlacar() {

    document.getElementById(

        "vitorias"

    ).textContent =

        vitorias;

    document.getElementById(

        "pontuacao"

    ).textContent =

        pontuacao.toFixed(1);

    document.getElementById(

        "partidas"

    ).textContent =

        partidas;

}

function voltarDificuldades() {

    jogoEncerrado = true;

    vezComputador = false;

    jogadorBateu21 = false;

    ultimoPasse = null;

    acaoForcada = null;

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

        "none";

    document.getElementById(

        "botao-nova-partida"

    ).style.display =

        "none";

    document.getElementById(

        "botao-passar"

    ).style.display =

        "inline-block";

    document.getElementById(

        "botao-mostrar"

    ).style.display =

        "inline-block";

    document.getElementById(

        "monte"

    ).style.pointerEvents =

        "auto";

    document.getElementById(

        "monte"

    ).style.opacity =

        "1";

    document.getElementById(

        "mensagem"

    ).textContent =

        "";

    document.getElementById(

        "mensagem"

    ).className =

        "";

}

function registrarPontuacao(pontos) {

    fetch(

        "registrar_pontuacao.php",

        {

            method: "POST",

            headers: {

                "Content-Type":

                    "application/x-www-form-urlencoded"

            },

            body:

                "jogo=blackjack&pontos=" +

                encodeURIComponent(pontos)

        }

    );

}