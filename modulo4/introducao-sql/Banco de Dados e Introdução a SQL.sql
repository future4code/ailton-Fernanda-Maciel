`USE `ailton-fernanda-maciel`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- resposta A - Varchar é decladaro quando se trata de strings e denteo dos parenteses colocamos a quantidade de carcters 
-- resposta B- SHOW TABLES  aparece as tabelas existentes e SHOW DATABASES aparece informações schema e sobre me dataBase.
SHOW TABLES;
SHOW DATABASES;
-- resposta C- Usamos para conferir a estrutura da tabela
DESCRIBE Actor;


-- EXERCICIO 2


-- insere valores
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

--  Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);

-- b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. 
-- Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female",
"9999-9999"
);
-- ERROR CODE // NÃO EXISTE O VALOR INSERIDO


-- EXERCICIO 2 LETRA C
-- da erro pois não esta sendo declarado a data de nascimento e o genero.

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);


-- exercicio 2 letra D
-- apresenta erro, pois o nome precisa ser declarado. 

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);


-- exercicio 2 letra execute
-- Apresenta erro pois faltou aspas na declaração da data.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
	719,333.33,
  "1979-03-26", 
  "female"
);


-- exercicio 2 letra F
-- Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"003",
"Paulo Gustavo",
300.000,
"1980-08-25",
"male"
);


-- exercicio 3

SELECT * FROM Actor;
SELECT id, salary from Actor ;
SELECT id, name from Actor WHERE gender = "male";

-- a) Escreva uma query que retorne todas as informações das atrizes
SELECT id, name from Actor WHERE gender = "female";


-- b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT id, name, salary from Actor WHERE name = "Tony Ramos";

-- c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

SELECT * from Actor WHERE gender = "invalid";
-- sem retorno, pois nenhum nome estava com o genero invalido.and

-- d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

SELECT id, name, salary from Actor WHERE salary >= 500.000;

-- e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. 
-- Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
-- resposta, o name estava escrito errado. 
SELECT id, name from Actor WHERE id = "002";

-- Exercício 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;


-- a) Explique com as suas palavras a query acima
-- o comparador LIKE permite comparar strings. E o o simbolo de % utilizamos com com o comparador LIKE.
-- LIKE "A%" PESQUISA NOMES COM A PRIMEIRA LETRA  OR (OU) LIKE"%A" PESQUISA NOMES QUE TERMINEM COM A LETRA A.

-- b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * from Actor 
WHERE (name NOT LIKE "A%")AND salary > 350.000;


-- c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

-- d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%G%" OR name LIKE "%g%")AND salary BETWEEN 350000 AND 900000;



-- exercicio 5

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255),
    data_lancamento DATE ,
    avaliacao INT
);

-- a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

INSERT INTO Filmes (id, name, sinopse,  data_lancamento, avaliacao)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Filmes (id, name, sinopse,  data_lancamento, avaliacao)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10

);

INSERT INTO Filmes (id, name, sinopse,  data_lancamento, avaliacao)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8

);

INSERT INTO Filmes (id, name, sinopse,  data_lancamento, avaliacao)
VALUES (
"004",
"Os Farofeiros ",
"Quatro colegas de trabalho se programam para curtir o feriado prolongado em uma casa de praia. Lá, eles descobrem que se meteram em uma tremenda roubada.",
"2017-12-25",
9

);


-- exercicio 6

-- a) Retorne o id, título e avaliação a partir de um id específico;

SELECT id, name, avaliacao FROM Filmes WHERE id = "004";

-- b) Retorne um filme a partir de um nome específico;

SELECT * FROM Filmes WHERE name = "Dona Flor e Seus Dois Maridos";

-- c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

SELECT * FROM Filmes WHERE avaliacao >=7;

-- Exercicio 7
-- a) Retorna um filme cujo título contenha a palavra vida

SELECT * FROM Filmes
WHERE sinopse LIKE "%vida%";

-- b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
SELECT * FROM Filmes 
WHERE sinopse LIKE  "%a%";

-- c) Procure por todos os filmes que já tenham lançado
SELECT* FROM Filmes
WHERE data_lancamento < "2022-08-22";

-- d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
SELECT * FROM Filmes 
WHERE data_lancamento < "2022-08-22" AND (name LIKE "%a%" OR sinopse LIKE "%b%")AND avaliacao < 7;
`
