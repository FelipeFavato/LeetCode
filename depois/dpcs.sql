-- SELECT DISTINCT 
--     p.name AS nome_professor,
--     c.name as course_name
-- FROM 
--     professor p
-- JOIN 
--     schedule s ON p.id = s.professor_id
-- JOIN 
--     course c ON s.course_id = c.id
-- JOIN 
--     department d ON c.department_id = d.id
-- LEFT JOIN 
--     department d_prof ON p.department_id = d_prof.id
-- WHERE 
--     d_prof.id IS NULL OR d.id <> d_prof.id;

Este código SQL é uma consulta que retorna os nomes distintos dos professores
(p.name aliás AS nome_professor) juntamente com os nomes dos cursos (c.name aliás AS course_name)
que esses professores ministram, sob certas condições definidas pelas
cláusulas JOIN, LEFT JOIN e WHERE. Vou explicar cada parte:

SELECT DISTINCT: Isso seleciona registros distintos do resultado da consulta.
Se houver registros duplicados, apenas uma instância de cada conjunto de
valores duplicados será retornada.

p.name AS nome_professor, c.name as course_name: Isso seleciona os campos
name das tabelas professor e course, respectivamente. Os AS estão renomeando
esses campos para nome_professor e course_name, respectivamente.

FROM professor p: Define a tabela professor e a abrevia como p.

JOIN schedule s ON p.id = s.professor_id: Isso junta a tabela schedule
à tabela professor com base na correspondência entre p.id (id do professor)
e s.professor_id (id do professor na tabela de horários).

JOIN course c ON s.course_id = c.id: Isso junta a tabela course à tabela
schedule com base na correspondência entre s.course_id (id do curso na tabela
de horários) e c.id (id do curso).

JOIN department d ON c.department_id = d.id: Isso junta a tabela department
à tabela course com base na correspondência entre c.department_id (id do
departamento na tabela de cursos) e d.id (id do departamento).

LEFT JOIN department d_prof ON p.department_id = d_prof.id: Isso junta a
tabela department à tabela professor com base na correspondência entre
p.department_id (id do departamento na tabela de professores) e d_prof.id
(id do departamento). No entanto, é um LEFT JOIN, o que significa que todos
os registros da tabela professor serão incluídos, mesmo que não haja
correspondência com a tabela department.

WHERE d_prof.id IS NULL OR d.id <> d_prof.id: Isso filtra os resultados
da junção anterior. A condição d_prof.id IS NULL verifica se o id do
departamento do professor é nulo, o que indica que o professor não
está associado a nenhum departamento. A condição d.id <> d_prof.id
verifica se o id do departamento do curso é diferente do id do
departamento do professor, o que indica que o curso está associado
a um departamento diferente daquele do professor. Ambas as condições
combinadas significam que queremos encontrar cursos ministrados por
professores que não estão associados a um departamento ou que estão
associados a um departamento diferente do departamento do curso.

Em resumo, esta consulta retorna os nomes dos professores e os nomes
dos cursos que eles ministram, desde que os professores não estejam
associados a um departamento ou estejam associados a um departamento
diferente do departamento do curso.