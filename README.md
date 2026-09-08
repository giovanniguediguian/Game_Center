# Game Center

**O projeto "Game Center" foi desenvolvido com o objetivo de aprendizagem e desenvolvimento.**

---

## Sobre o projeto

O Game Center é um projeto desenvolvido em Python com o objetivo de colocar em prática conhecimentos de programação, utilizando funções, estruturas de repetição, condicionais, arquivos JSON e outros conceitos.

O projeto reúne diferentes jogos em um único programa, permitindo que o jogador utilize uma conta e acumule vitórias em cada jogo.

---

## Jogos

O Game Center possui atualmente os seguintes jogos:

### Jokenpô

O clássico jogo de Pedra, Papel e Tesoura, jogado contra o computador.

### Jogo da Forca

O jogador deve descobrir uma palavra antes que suas tentativas acabem.

O jogo possui diferentes categorias de palavras:

- Animais;
- Frutas;
- Países.

### Jogo da Velha

Jogo da Velha contra o computador, utilizando um tabuleiro de 3x3.

### Blackjack 21

Um jogo baseado no Blackjack, no qual o objetivo é chegar o mais próximo possível de 21 sem ultrapassar esse valor.

### Desafio de Reflexo

Um desafio no qual o jogador precisa reagir rapidamente ao comando apresentado pelo programa.

O tempo de reação é utilizado para determinar se o jogador conseguiu completar o desafio.

---

## Sistema de jogadores

O Game Center possui um sistema simples de cadastro e login de jogadores.

Cada jogador possui uma senha e suas próprias estatísticas de vitórias em cada jogo.

As informações dos jogadores são armazenadas em um arquivo chamado `jogadores.json`.

O arquivo permite que os dados sejam mantidos mesmo depois que o programa é encerrado.

---

## Ranking

O projeto possui um sistema de ranking que utiliza as vitórias acumuladas em cada jogo.

As estatísticas dos jogos são somadas para calcular a pontuação total de cada jogador.

Os jogadores são organizados de acordo com essa pontuação, formando um ranking geral.

Os três primeiros colocados recebem uma medalha de acordo com sua posição:

- 1º lugar — Ouro;
- 2º lugar — Prata;
- 3º lugar — Bronze.

---

## Tecnologias utilizadas

### Python

Utilizado para desenvolver toda a lógica do Game Center, incluindo os jogos, sistema de jogadores, ranking e armazenamento das informações.

### JSON

Utilizado para armazenar os dados dos jogadores e suas estatísticas no arquivo `jogadores.json`.

## Status do projeto

**Versão atual: v0.1**

Esta é a versão inicial do Game Center, desenvolvida em Python.

O projeto possui os jogos, sistema de jogadores, armazenamento em JSON e ranking funcionando.

Futuramente, o projeto será expandido e transformado em uma aplicação web utilizando tecnologias como PHP, MySQL, HTML e CSS.