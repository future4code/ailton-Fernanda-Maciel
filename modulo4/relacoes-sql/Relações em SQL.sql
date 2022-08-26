`SELECT * FROM `ailton-fernanda-maciel`.Filmes;
DESCRIBE Filmes;
DESCRIBE Rating;
SELECT * FROM Rating;
 -- /exercicio 1
--  a) Explique o que é uma chave estrangeira
-- resposta: É a FOREIGN KEY, onde se cria uma relação com outra tabela.


CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);


-- b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

-- c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Filme muito longo!",
    5,
		"00m"
);


-- d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Filmes 
DROP COLUMN avaliacao;

-- e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
DELETE FROM Rating WHERE name = "Doce Mãe";

-- exercicio 2
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- a) Explique, com as suas palavras, essa tabela
-- Resposta : vai mostrar o id das 2 tabelas, Filmes e Actor através das 2 chaves estrangeiras; 

-- b) Crie, ao menos, 6 relações nessa tabela 
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"005",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"006",
    "003"
);
`