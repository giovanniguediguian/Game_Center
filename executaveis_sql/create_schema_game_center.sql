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
    jokenpo int not null default 0,
    forca int not null default 0,
    velha int not null default 0,
    blackjack int not null default 0,
    reflexo int not null default 0,
    
    constraint pk_estatisticas primary key (id),
    constraint fk_id_jog_est foreign key (id_jogador) references jogadores (id)
);