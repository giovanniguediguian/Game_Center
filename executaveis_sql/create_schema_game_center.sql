create schema game_center;

use game_center;

create table jogadores (
	id int not null auto_increment,
    nome varchar(80) not null,
    senha varchar(255) not null,
    
    constraint pk_jogadores primary key (id),
    constraint uk_jogadores_nome unique (nome)
);

create table estatisticas (
	id int not null auto_increment,
    id_jogador int not null unique,
    jokenpo double(10, 2) not null default 0,
    forca double(10, 2) not null default 0,
    velha double(10, 2) not null default 0,
    blackjack double(10, 2) not null default 0,
<<<<<<< HEAD
    reflexo double(10,2) not null default 0,
=======
    reflexo double(10, 2) not null default 0,
>>>>>>> 576d7b5a9b0f78eed5681d5d6791ccc9a94fc854
    
    constraint pk_estatisticas primary key (id),
    constraint fk_id_jog_est foreign key (id_jogador) references jogadores (id)
);
