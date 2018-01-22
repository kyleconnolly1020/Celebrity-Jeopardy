CREATE TABLE jeopardy
(
	id int NOT NULL AUTO_INCREMENT,
	contestant_name varchar(255) NOT NULL,
    category_name varchar(255) NOT NULL,
	earnings INTEGER(10) NOT NULL,
    time_created DATETIME NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE category
(
	id int NOT NULL AUTO_INCREMENT,
	contestant_name varchar(255) NOT NULL,
    category_name varchar(255) NOT NULL,
	earnings INTEGER(10) NOT NULL,
    time_created DATETIME NOT NULL,
	PRIMARY KEY (id)
);

SELECT *FROM jeopardy;
SELECT *FROM category;

DROP TABLE jeopardy;