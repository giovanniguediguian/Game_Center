**# Game Center**

\<u>\<strong>O projeto "Game Center" foi desenvolvido com o objetivo de aprendizagem e desenvolvimento.\</strong>\</u>

\---

**## Sobre o projeto**

O Game Center é um projeto de aprendizagem que começou como um programa em Python e atualmente está sendo desenvolvido como uma aplicação web.

A versão web está sendo desenvolvida utilizando PHP, MySQL, HTML, CSS e JavaScript, com o objetivo de aplicar na prática os conhecimentos adquiridos durante meus estudos de Desenvolvimento de Sistemas.

O projeto ainda está em desenvolvimento e novas funcionalidades serão adicionadas nas próximas versões.

\---

**## Aviso**

Para executar a versão web do Game Center, é necessário utilizar o XAMPP, pois o projeto utiliza PHP e MySQL.

Também é necessário utilizar o MySQL Workbench para executar os arquivos \`.sql\` localizados na pasta \`executaveis\_sql\`.

Antes de executar o sistema, siga os seguintes passos:

1\. Instale e abra o XAMPP.

2\. Inicie os serviços Apache e MySQL.

3\. Abra o MySQL Workbench e conecte-se ao servidor MySQL.

4\. Execute os arquivos \`.sql\` presentes na pasta \`executaveis\_sql\`.

5\. Coloque a pasta do projeto dentro da pasta \`htdocs\` do XAMPP.

6\. Acesse o Game Center pelo navegador através do servidor local.

O banco de dados precisa estar criado e configurado corretamente antes de utilizar o sistema.

\---

**## Versão Web**

A versão web do Game Center possui atualmente um sistema de cadastro e login de jogadores, utilizando um banco de dados MySQL para armazenar as informações.

Cada jogador possui suas próprias estatísticas, que são utilizadas pelos jogos e pelo sistema de ranking.

**### Cadastro**

O sistema permite que novos jogadores criem uma conta utilizando um nome de usuário e uma senha.

Durante o cadastro, são realizadas algumas validações, como:

\- Verificação de campos obrigatórios;

\- Confirmação da senha;

\- Verificação do tamanho mínimo da senha;

\- Impedimento de espaços na senha;

\- Verificação se o nome de usuário já está cadastrado.

As senhas são armazenadas utilizando \`password\_hash()\`, evitando que sejam salvas diretamente no banco de dados.

**### Login**

Após realizar o cadastro, o jogador pode entrar utilizando seu nome de usuário e senha.

A autenticação utiliza \`password\_verify()\` para verificar a senha armazenada no banco de dados.

O sistema também utiliza sessões para manter o jogador autenticado enquanto estiver utilizando o Game Center.

**### Banco de Dados**

O projeto utiliza MySQL para armazenar os dados dos jogadores.

O banco de dados possui atualmente duas tabelas principais:

\- \`jogadores\` — armazena os dados de acesso dos jogadores;

\- \`estatisticas\` — armazena as estatísticas de cada jogador.

Cada jogador possui uma relação de 1 para 1 com suas estatísticas.

**### Segurança**

O sistema utiliza alguns recursos para melhorar a segurança do projeto, como:

\- \`password\_hash()\` para armazenamento das senhas;

\- \`password\_verify()\` para autenticação;

\- Prepared Statements para as consultas ao banco de dados;

\- Sessões para controle de autenticação;

\- Validação dos dados recebidos pelos formulários;

\- Transações no cadastro do jogador e suas estatísticas.

**### Interface**

A interface do Game Center está sendo desenvolvida utilizando HTML e CSS, com auxílio do W3.CSS.

As páginas seguem uma estrutura visual padrão, contendo:

\- Cabeçalho;

\- Conteúdo principal;

\- Rodapé;

\- Formulários;

\- Mensagens de erro e sucesso.

O projeto possui uma identidade visual própria baseada principalmente nas cores roxo, laranja, azul e amarelo.

**### Jogos**

A versão web possui atualmente cinco jogos:

\- Jokenpô;

<<<<<<< HEAD
\- Jogo da Forca;

\- Jogo da Velha;

\- Blackjack 21;

\- Desafio de Reflexo.

Cada jogo possui seu próprio sistema de pontuação, e as pontuações são registradas no banco de dados de cada jogador.

**### Ranking**

O Game Center possui um sistema de ranking que utiliza as pontuações registradas pelos jogos.

Existe um ranking geral, que reúne as pontuações dos cinco jogos e apresenta os jogadores de acordo com sua pontuação total.

Também existem rankings individuais para cada jogo, mostrando os 10 jogadores com as maiores pontuações naquele jogo.

\---

**## Tecnologias utilizadas**

**### PHP**

\<img *src*="[https://www.php.net/images/logos/new-php-logo.svg](https://www.php.net/images/logos/new-php-logo.svg)" *alt*="PHP">
=======
<img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" width="100">
>>>>>>> a7467f281086b917d1ac2d68de35d82dec906ccd

Responsável pela lógica do sistema, autenticação, sessões e comunicação com o banco de dados.

**### MySQL**

<<<<<<< HEAD
\<img *src*="[https://www.mysql.com/common/logos/logo-mysql-170x115.png](https://www.mysql.com/common/logos/logo-mysql-170x115.png)" *alt*="MySQL">
=======
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Gmg6JydW3nQI3S6DmiByn2JMXvDsu-2WuGDKSQpm0A&s=10" alt="MySQL" width="100">
>>>>>>> a7467f281086b917d1ac2d68de35d82dec906ccd

Responsável pelo armazenamento dos jogadores e suas estatísticas.

**### HTML**

<<<<<<< HEAD
\<img *src*="[https://www.w3.org/html/logo/downloads/HTML5\_Badge\_512.png](https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png)" *alt*="HTML5">
=======
<img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML5" width="100">
>>>>>>> a7467f281086b917d1ac2d68de35d82dec906ccd

Utilizado para estruturar as páginas do Game Center.

**### CSS**

<<<<<<< HEAD
\<img *src*="[https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg)" *alt*="CSS3">
=======
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="100">
>>>>>>> a7467f281086b917d1ac2d68de35d82dec906ccd

Utilizado para a estilização e identidade visual do projeto.

**### JavaScript**

<<<<<<< HEAD
Utilizado na lógica e funcionamento dos jogos, incluindo interações, controles, pontuação e elementos que precisam ser atualizados durante as partidas.

**### W3.CSS**

\<img *src*="[https://www.w3schools.com/w3css/img\_w3css.svg](https://www.w3schools.com/w3css/img_w3css.svg)" *alt*="W3.CSS">
=======
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiV87omqLi9DKq4QNOz-rJgGO6wdsFfeJGyX0uEIDu2A&s=10" alt="W3.CSS" width="100">
>>>>>>> a7467f281086b917d1ac2d68de35d82dec906ccd

Utilizado como apoio na estilização dos elementos da interface.

\---

**## Origem do projeto**

O Game Center começou como um projeto desenvolvido em Python, contendo alguns jogos e um sistema de ranking.

Depois, o projeto passou a ser desenvolvido como uma aplicação web, mantendo a ideia original e utilizando novas tecnologias para criar um sistema mais completo.

\---

**## Status do projeto**

**\*\*Versão atual: v0.4\*\***

O sistema de cadastro, login, logout, sessões, banco de dados, interface, jogos e sistema de ranking já estão funcionando.

<<<<<<< HEAD
A versão atual possui cinco jogos: Jokenpô, Jogo da Forca, Jogo da Velha, Blackjack 21 e Desafio de Reflexo.

O projeto continuará recebendo atualizações, incluindo novas funcionalidades e melhorias.
=======
O projeto continuará recebendo atualizações, incluindo novos jogos e funcionalidades.
>>>>>>> a7467f281086b917d1ac2d68de35d82dec906ccd
