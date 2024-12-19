--Найдите автора, у которого наибольшее количество постов с тегами. 
--Выведите имя и фамилию автора, количество его таких постов и список этих постов.

WITH PostsWithTags AS (
SELECT posts.*, post_tag.*, tags.*
FROM post_tag
JOIN posts ON posts.id = post_tag.post_id
JOIN tags ON tags.id= post_tag.tag_id
), PostCounts AS (
SELECT author_id, COUNT(*) AS post_count
FROM PostsWithTags pwt
GROUP BY author_id
), RankedAuthors AS (
SELECT pc.author_id, pc.post_count,
RANK() OVER (ORDER BY pc.post_count DESC) AS rank
FROM PostCounts AS pc
)
SELECT a.first_name, a.last_name, pwt.title, pwt.likes, pwt.name AS tag_name, ra.post_count
FROM RankedAuthors AS ra
JOIN authors AS a ON ra.author_id = a.id
JOIN PostsWithTags AS pwt ON ra.author_id = pwt.author_id
WHERE ra.rank = 1