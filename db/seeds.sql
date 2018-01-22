use jeopardy_db;
 INSERT INTO jeopardies (contestant_name, category_name, earnings, createdAt, updatedAt) VALUES 
 ("Jason", "History", 200, now(), now()), 
 ("Kyle", "Art", 100, now(), now());

select * from jeopardies;