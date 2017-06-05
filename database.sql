CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	task varchar(80),
	completed boolean
);

INSERT INTO tasks (task, completed)
VALUES ('clean', false);

SELECT * FROM tasks;
