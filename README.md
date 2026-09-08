# Game Center

<u><strong>O projeto "Game Center" foi desenvolvido com o objetivo de aprendizagem e desenvolvimento.</strong></u>

---

## Sobre o projeto

O Game Center é um projeto de aprendizagem que começou como um programa em Python e atualmente está sendo transformado em uma aplicação web.

A versão web está sendo desenvolvida utilizando PHP, MySQL, HTML e CSS, com o objetivo de aplicar na prática os conhecimentos adquiridos durante meus estudos de Desenvolvimento de Sistemas.

O projeto ainda está em desenvolvimento e novas funcionalidades serão adicionadas nas próximas versões.

---

## Aviso

Para executar a versão web do Game Center, é necessário utilizar o XAMPP, pois o projeto utiliza PHP e MySQL.

Também é necessário utilizar o MySQL Workbench para executar os arquivos `.sql` localizados na pasta `executaveis_sql`.

Antes de executar o sistema, siga os seguintes passos:

1. Instale e abra o XAMPP.
2. Inicie os serviços Apache e MySQL.
3. Abra o MySQL Workbench e conecte-se ao servidor MySQL.
4. Execute os arquivos `.sql` presentes na pasta `executaveis_sql`.
5. Coloque a pasta do projeto dentro da pasta `htdocs` do XAMPP.
6. Acesse o Game Center pelo navegador através do servidor local.

O banco de dados precisa estar criado e configurado corretamente antes de utilizar o sistema.

---

## Versão Web

A versão web do Game Center possui atualmente um sistema de cadastro e login de jogadores, utilizando um banco de dados MySQL para armazenar as informações.

Cada jogador possui suas próprias estatísticas, que serão utilizadas futuramente pelos jogos e pelo sistema de ranking.

### Cadastro

O sistema permite que novos jogadores criem uma conta utilizando um nome de usuário e uma senha.

Durante o cadastro, são realizadas algumas validações, como:

- Verificação de campos obrigatórios;
- Confirmação da senha;
- Verificação do tamanho mínimo da senha;
- Impedimento de espaços na senha;
- Verificação se o nome de usuário já está cadastrado.

As senhas são armazenadas utilizando `password_hash()`, evitando que sejam salvas diretamente no banco de dados.

### Login

Após realizar o cadastro, o jogador pode entrar utilizando seu nome de usuário e senha.

A autenticação utiliza `password_verify()` para verificar a senha armazenada no banco de dados.

O sistema também utiliza sessões para manter o jogador autenticado enquanto estiver utilizando o Game Center.

### Banco de Dados

O projeto utiliza MySQL para armazenar os dados dos jogadores.

O banco de dados possui atualmente duas tabelas principais:

- `jogadores` — armazena os dados de acesso dos jogadores;
- `estatisticas` — armazena as estatísticas de cada jogador.

Cada jogador possui uma relação de 1 para 1 com suas estatísticas.

### Segurança

O sistema utiliza alguns recursos para melhorar a segurança do projeto, como:

- `password_hash()` para armazenamento das senhas;
- `password_verify()` para autenticação;
- Prepared Statements para as consultas ao banco de dados;
- Sessões para controle de autenticação;
- Validação dos dados recebidos pelos formulários;
- Transações no cadastro do jogador e suas estatísticas.

### Interface

A interface do Game Center está sendo desenvolvida utilizando HTML e CSS, com auxílio do W3.CSS.

As páginas seguem uma estrutura visual padrão, contendo:

- Cabeçalho;
- Conteúdo principal;
- Rodapé;
- Formulários;
- Mensagens de erro e sucesso.

O projeto possui uma identidade visual própria baseada principalmente nas cores roxo, laranja, azul e amarelo.

---

## Tecnologias utilizadas

### PHP

<img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" width="100">

Responsável pela lógica do sistema, autenticação, sessões e comunicação com o banco de dados.

### MySQL

<img src="https://www.mysql.com/common/logos/powered-by-mysql-125x64.png" alt="MySQL" width="125">

Responsável pelo armazenamento dos jogadores e suas estatísticas.

### HTML

<img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML5" width="100">

Utilizado para estruturar as páginas do Game Center.

### CSS

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="100">

Utilizado para a estilização e identidade visual do projeto.

### W3.CSS

<img src="https://www.w3schools.com/w3css/img_w3css.svg" alt="W3.CSS" width="100">

Utilizado como apoio na estilização dos elementos da interface.

---

## Origem do projeto

O Game Center começou como um projeto desenvolvido em Python, contendo alguns jogos e um sistema de ranking.

A versão web é a continuação desse projeto, trazendo a mesma ideia para uma aplicação utilizando tecnologias web.

---

## Status do projeto

**Versão atual: v0.2**

O sistema de cadastro, login, logout, sessões, banco de dados e interface inicial já estão funcionando.

O projeto continuará recebendo atualizações, incluindo novos jogos e funcionalidades.
