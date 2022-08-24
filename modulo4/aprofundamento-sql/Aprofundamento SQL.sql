SELECT * FROM `ailton-fernanda-maciel`.Actor;

SET SQL_SAFE_UPDATES = 0;

-- descreve toda a tabela
DESCRIBE Actor;

-- mostra toda a tabela 
SELECT * from Actor;
-- Exercício 1

INSERT INTO Actor 
VALUES(
  "011", 
  "Will Smitch",
  40000000,
  "1979-06-06", 
  "male"
);

-- ALTER TABLE Actor ADD type VARCHAR (255) DEFAULT "NotDirector"; 

-- Leia os comandos abaixo e indique o que eles fazem. 
-- Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  
-- Você, provavelmente, terá que fazer algumas pesquisas para responder

-- ALTER TABLE Actor DROP COLUMN salary;
-- Resposta: deleta a coluna Salary

-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- Resposta : Altera a propriedade gender para sex VARCHAR(6)

-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
 -- Resposta: Altera gender para gender VARCHAR(255)
 
 -- d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercicio 2
-- a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
UPDATE Actor
SET name = "Ian Somerhalder" , birth_date = "1981-11-13"
WHERE id = "003";

-- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. 

UPDATE Actor 
SET name = "JULIANA PAES"
WHERE id = "005";

-- Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor 
SET name = "Juliana Paes"
WHERE id = "005";


-- c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor 
SET name = "Morgan Freeman", salary = 80000, birth_date = "1951-03-19", gender = "male"
WHERE id = "005";

-- d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). 
-- Teste, anote e explique o resultado. 
UPDATE Actor 
SET name ="Fernanda Tiyomi"
WHERE id  = "10";
-- Não deu erro, coloquei um ID que não existia, porém não sei explicar o que houve.and

-- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

DELETE FROM  Actor 
WHERE gender = "male" AND salary > 100000 ;

-- exercicio 4
-- mostra a quantidade de atores
SELECT COUNT(*) FROM Actor;
-- mostra a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- mostra a media de salario. 
SELECT AVG(salary) FROM Actor;

-- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT max(salary) as maior_salario from Actor;

-- b) Escreva uma query que pegue o menor salário das atrizes
SELECT max(salary) as maior_salario_atrizes from Actor
WHERE gender = "female";


-- c) Escreva uma query que pegue a quantidade de atrizes

SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;

-- Exercicio 5

-- a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- resposta: A query soma de ambos os generos, tanto feminino quanto masculino. 

-- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor
ORDER BY name DESC;

-- c) *Faça uma query que retorne todos os atores ordenados pelo salário*
SELECT * FROM Actor
ORDER BY salary ASC;

-- d) Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor 
WHERE gender ="male"
ORDER BY salary DESC
LIMIT 3;

-- e) Faça uma query que retorne a média de salário por gênero

SELECT AVG(salary) gender FROM Actor
GROUP BY gender;

-- Exercicio 6
SELECT * FROM `ailton-fernanda-maciel`.Filmes;
SELECT * FROM Filmes;
DESCRIBE Filmes;
-- a) Altere a tabela de Movie e adicione um novo parâmetro: 
-- playing_limit_date que indique a data limite em que o filme será passado no cinema. 

ALTER TABLE Filmes 
ADD playing_limit_date VARCHAR (10);

-- b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, 
-- como, por exemplo, uma avaliação 8.5.
ALTER TABLE Filmes 
CHANGE avaliacao avaliacao DOUBLE ;

-- c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
UPDATE Filmes
SET playing_limit_date = "2022-08-13"
WHERE id= 004;


-- d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). 
-- Anote o resultado e explique.

	DELETE FROM Filmes WHERE name ="Se Eu Fosse Você";

UPDATE Filmes 
SET sinopse = "Esta obra é incrivel é a história de dois amigos que se reencontram após 30 anos."
WHERE id = 001;

-- Resposta: Não da erro ao atualizar o id que foi excluido, porém não sei explicar o porque disso. 

-- Exercicio 7
-- a) Quantos filmes em cartaz possuem avaliações maiores do que 7.
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;

--  Qual a média das avaliações dos filmes?
SELECT AVG (avaliacao) as media_avaliacao from Filmes;

-- Qual a quantidade de filmes em cartaz?

SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();

--  Qual a quantidade de filmes que ainda irão lançar?

SELECT COUNT(*) FROM Filmes WHERE data_lancamento > CURDATE();

-- Qual a maior nota dos filmes?
SELECT max(avaliacao) as maior_Avaliacao FROM Filmes;

-- Qual a menor nota dos filmes?
SELECT min(avaliacao) as menor_avaliacao FROM Filmes;

-- exercicio 8
-- a) Retorne todos os filmes em ordem alfabética
SELECT * FROM Filmes order by name ASC;

-- b) Retorne os 5 primerios filmes em ordem descrente alfabética 
SELECT * FROM Filmes 
order by name DESC
LIMIT 5;

-- c) Retorne os 3 filmes mais recentes em cartaz
SELECT * FROM Filmes order by data_lancamento DESC 
LIMIT 3;

-- d) Retorne os 3 filmes melhor avalidos
SELECT * FROM Filmes 
order by avaliacao DESC
LIMIT 3
