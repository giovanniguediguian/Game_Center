const palavras = {

    animais: [
        {
            palavra: "cachorro",
            dicas: [
                "É um animal doméstico.",
                "É conhecido por ser o melhor amigo do homem.",
                "Pode latir."
            ]
        },
        {
            palavra: "elefante",
            dicas: [
                "É um dos maiores animais terrestres.",
                "Possui uma tromba.",
                "Suas orelhas são grandes."
            ]
        },
        {
            palavra: "girafa",
            dicas: [
                "É um animal muito alto.",
                "Possui um pescoço comprido.",
                "Vive principalmente na África."
            ]
        },
        {
            palavra: "tigre",
            dicas: [
                "É um grande felino.",
                "Possui listras pelo corpo.",
                "É um animal carnívoro."
            ]
        },
        {
            palavra: "coelho",
            dicas: [
                "Possui orelhas compridas.",
                "É conhecido por comer cenouras.",
                "Pode ser criado como animal doméstico."
            ]
        }
    ],

    frutas: [
        {
            palavra: "banana",
            dicas: [
                "É uma fruta muito popular.",
                "Geralmente possui casca amarela.",
                "É rica em potássio."
            ]
        },
        {
            palavra: "abacaxi",
            dicas: [
                "Possui uma casca áspera.",
                "Tem uma coroa de folhas.",
                "É uma fruta tropical."
            ]
        },
        {
            palavra: "morango",
            dicas: [
                "É uma fruta vermelha.",
                "Possui pequenas sementes do lado de fora.",
                "É muito usado em doces."
            ]
        },
        {
            palavra: "melancia",
            dicas: [
                "É uma fruta grande.",
                "Possui bastante água.",
                "Geralmente possui casca verde e polpa vermelha."
            ]
        },
        {
            palavra: "laranja",
            dicas: [
                "Possui uma casca alaranjada.",
                "É muito usada para fazer suco.",
                "É rica em vitamina C."
            ]
        }
    ],

    paises: [
        {
            palavra: "brasil",
            dicas: [
                "Fica na América do Sul.",
                "Possui cinco regiões.",
                "Sua capital é Brasília."
            ]
        },
        {
            palavra: "argentina",
            dicas: [
                "Faz fronteira com o Brasil.",
                "Fica na América do Sul.",
                "Sua capital é Buenos Aires."
            ]
        },
        {
            palavra: "japao",
            dicas: [
                "É um país asiático.",
                "É formado por várias ilhas.",
                "Sua capital é Tóquio."
            ]
        },
        {
            palavra: "alemanha",
            dicas: [
                "Fica na Europa.",
                "Sua capital é Berlim.",
                "É conhecida por sua história e indústria."
            ]
        },
        {
            palavra: "australia",
            dicas: [
                "É um país e continente.",
                "Fica no hemisfério sul.",
                "É conhecida pelos cangurus."
            ]
        }
    ],

    objetos: [
        {
            palavra: "cadeira",
            dicas: [
                "É usada para sentar.",
                "Pode ter quatro pernas.",
                "É comum em casas e escolas."
            ]
        },
        {
            palavra: "computador",
            dicas: [
                "É um dispositivo eletrônico.",
                "Pode ser usado para estudar e trabalhar.",
                "Possui componentes como processador e memória."
            ]
        },
        {
            palavra: "telefone",
            dicas: [
                "Pode ser usado para fazer chamadas.",
                "Existem versões celulares.",
                "Também pode acessar a internet."
            ]
        },
        {
            palavra: "guarda-chuva",
            dicas: [
                "É usado em dias de chuva.",
                "Pode ser aberto e fechado.",
                "Ajuda a evitar que a pessoa fique molhada."
            ]
        },
        {
            palavra: "mochila",
            dicas: [
                "Pode ser carregada nas costas.",
                "É usada para transportar objetos.",
                "É muito comum entre estudantes."
            ]
        }
    ],

    aplicativos: [
        {
            palavra: "whatsapp",
            dicas: [
                "É usado para enviar mensagens.",
                "Possui chamadas de voz e vídeo.",
                "Tem um ícone verde."
            ]
        },
        {
            palavra: "instagram",
            dicas: [
                "É uma rede social.",
                "É muito conhecida por fotos e vídeos.",
                "Possui o recurso de Stories."
            ]
        },
        {
            palavra: "youtube",
            dicas: [
                "É uma plataforma de vídeos.",
                "Possui canais e inscrições.",
                "Também oferece transmissões ao vivo."
            ]
        },
        {
            palavra: "spotify",
            dicas: [
                "É usado principalmente para ouvir música.",
                "Possui playlists.",
                "Também oferece podcasts."
            ]
        },
        {
            palavra: "discord",
            dicas: [
                "É muito usado por comunidades online.",
                "Possui servidores e canais.",
                "É bastante popular entre jogadores."
            ]
        }
    ]

};


let palavraSecreta = "";
let categoriaAtual = "";
let letrasTentadas = [];
let erros = 6;
let tentativas = 0;
let vitorias = 0;
let pontuacao = 0;
let dicaUsada = false;
let jogoEncerrado = false;


function iniciarJogo(categoria) {

    categoriaAtual = categoria;

    const lista = palavras[categoria];

    const indice = Math.floor(
        Math.random() * lista.length
    );

    palavraSecreta = lista[indice].palavra;

    letrasTentadas = [];

    erros = 6;

    tentativas = 0;

    dicaUsada = false;

    jogoEncerrado = false;

    document.getElementById("selecao-categoria").style.display = "none";

    document.getElementById("jogo").style.display = "block";

    document.getElementById("categoria").textContent =
        categoriaTexto(categoria);

    document.getElementById("entrada").value = "";

    document.getElementById("entrada").disabled = false;

    document.querySelector("#jogo .entrada button").disabled = false;

    document.getElementById("botao-dica").disabled = false;

    document.getElementById("botao-dica").style.display =
        "inline-block";

    document.getElementById("dica").textContent = "";

    mostrarMensagem("");

    document.getElementById("botao-voltar").style.display =
    "inline-block";

    document.getElementById("botao-nova-partida").style.display =
        "none";

    atualizarPlacar();

    atualizarPalavra();

    atualizarLetras();

    document.getElementById("entrada").focus();
}


function categoriaTexto(categoria) {

    const nomes = {

        animais: "Animais",

        frutas: "Frutas",

        paises: "Países",

        objetos: "Objetos",

        aplicativos: "Aplicativos"

    };

    return nomes[categoria];
}


function atualizarPalavra() {

    let resultado = "";

    for (let letra of palavraSecreta) {

        if (letra === "-") {

            resultado += "- ";

        }

        else if (letrasTentadas.includes(letra)) {

            resultado += letra + " ";

        }

        else {

            resultado += "_ ";

        }

    }

    document.getElementById("palavra").textContent =
        resultado.trim();
}


function atualizarPlacar() {

    document.getElementById("vitorias").textContent =
        vitorias;

    document.getElementById("pontuacao").textContent =
        pontuacao.toFixed(2);

    document.getElementById("tentativas").textContent =
        tentativas;
}


function atualizarLetras() {

    document.getElementById("lista-letras").textContent =

        letrasTentadas.length > 0

            ? letrasTentadas.join(", ").toUpperCase()

            : "NENHUMA";
}


function verificarPalpite() {

    if (jogoEncerrado) {

        return;
    }

    const entrada = document.getElementById("entrada");

    let palpite = entrada.value.toLowerCase().trim();

    entrada.value = "";

    if (!palpite) {

        mostrarMensagem(
            "Digite uma letra ou uma palavra.",
            "neutra"
        );

        return;
    }

    if (!/^[a-záàâãéêíóôõúç-]+$/i.test(palpite)) {

        mostrarMensagem(
            "Digite apenas letras.",
            "erro"
        );

        return;
    }

    if (palpite.length === 1) {

        verificarLetra(palpite);

    }

    else {

        verificarPalavra(palpite);

    }
}


function verificarLetra(letra) {

    if (letrasTentadas.includes(letra)) {

        mostrarMensagem(
            "Você já tentou essa letra.",
            "neutra"
        );

        return;
    }

    letrasTentadas.push(letra);

    tentativas++;

    atualizarLetras();

    if (palavraSecreta.includes(letra)) {

        mostrarMensagem(
            "Boa! Você acertou uma letra.",
            "acerto"
        );

        atualizarPalavra();

        verificarVitoria();

    }

    else {

        erros--;

        mostrarMensagem(
            "Letra incorreta! Restam " +
            erros +
            " erros.",
            "erro"
        );

        atualizarPlacar();

        verificarDerrota();
    }
}


function verificarPalavra(palpite) {

    tentativas++;

    atualizarPlacar();

    if (palpite === palavraSecreta) {

        for (let letra of palavraSecreta) {

            if (
                !letrasTentadas.includes(letra) &&
                letra !== "-"
            ) {

                letrasTentadas.push(letra);

            }

        }

        atualizarPalavra();

        vencer();

    }

    else {

        erros--;

        mostrarMensagem(
            "Palavra incorreta! Restam " +
            erros +
            " erros.",
            "erro"
        );

        atualizarPlacar();

        verificarDerrota();
    }
}


function verificarVitoria() {

    for (let letra of palavraSecreta) {

        if (
            letra !== "-" &&
            !letrasTentadas.includes(letra)
        ) {

            return;
        }

    }

    vencer();
}


function vencer() {

    jogoEncerrado = true;

    vitorias++;

    let pontos = calcularPontuacao();

    pontuacao += pontos;

    let mensagem = "";

    if (dicaUsada) {

        if (pontos === 1) {

            mensagem =
                "Você acertou usando uma dica e ganhou 1 ponto!";

        }

        else if (pontos === 0.5) {

            mensagem =
                "Você acertou usando uma dica e ganhou 0,5 ponto!";

        }

        else {

            mensagem =
                "Você conseguiu! Usando uma dica, ganhou 0,25 ponto.";

        }

    }

    else {

        if (pontos === 3) {

            mensagem =
                "Uau! Você é um gênio! Acertou com apenas " +
                tentativas +
                " ações e ganhou 3 pontos!";

        }

        else if (pontos === 2) {

            mensagem =
                "Mandou bem! Você descobriu a palavra e ganhou 2 pontos!";

        }

        else {

            mensagem =
                "Você conseguiu! A palavra era '" +
                palavraSecreta +
                "'. Ganhou 1 ponto.";

        }

    }

    mostrarMensagem(mensagem, "vitoria");

    registrarPontuacao(pontos);

    finalizarJogo();
}


function calcularPontuacao() {

    if (dicaUsada) {

        if (tentativas <= 5) {

            return 1;

        }

        if (tentativas <= 10) {

            return 0.5;

        }

        return 0.25;
    }

    if (tentativas <= 5) {

        return 3;

    }

    if (tentativas <= 10) {

        return 2;

    }

    return 1;
}


function verificarDerrota() {

    if (erros <= 0) {

        jogoEncerrado = true;

        mostrarMensagem(
            "Fim de jogo! A palavra era '" +
            palavraSecreta +
            "'. Você não ganhou pontos.",
            "derrota"
        );

        registrarPontuacao(0);

        finalizarJogo();
    }
}


function finalizarJogo() {

    document.getElementById("entrada").disabled = true;

    document.querySelector("#jogo .entrada button").disabled =
        true;

    document.getElementById("botao-dica").disabled = true;

    document.getElementById("botao-voltar").style.display =
    "none";

    document.getElementById("botao-nova-partida").style.display =
        "inline-block";

    atualizarPlacar();
}


function mostrarDica() {

    if (dicaUsada || jogoEncerrado) {

        return;
    }

    const lista = palavras[categoriaAtual];

    const palavraAtual = lista.find(
        item => item.palavra === palavraSecreta
    );

    const indice = Math.floor(
        Math.random() * palavraAtual.dicas.length
    );

    document.getElementById("dica").textContent =
        palavraAtual.dicas[indice];

    dicaUsada = true;

    document.getElementById("botao-dica").disabled = true;
}


function mostrarMensagem(texto, tipo = "neutra") {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = texto;

    mensagem.className = "";

    if (!texto) {

        return;
    }

    mensagem.classList.add(
        "mensagem-" + tipo
    );
}


function voltarCategorias() {

    jogoEncerrado = true;

    document.getElementById("jogo").style.display =
        "none";

    document.getElementById("selecao-categoria").style.display =
        "block";

    document.getElementById("botao-voltar").style.display =
        "none";

    document.getElementById("botao-nova-partida").style.display =
        "none";

    mostrarMensagem("");

    document.getElementById("dica").textContent = "";

}


function registrarPontuacao(pontos) {

    fetch("registrar_pontuacao.php", {

        method: "POST",

        headers: {

            "Content-Type":
                "application/x-www-form-urlencoded"

        },

        body:
            "jogo=forca&pontos=" +
            encodeURIComponent(pontos)

    });

}


document.getElementById("entrada").addEventListener(

    "keydown",

    function(event) {

        if (event.key === "Enter") {

            verificarPalpite();

        }

    }

);