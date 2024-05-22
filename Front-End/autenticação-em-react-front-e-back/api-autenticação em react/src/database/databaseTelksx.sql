

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    text_post VARCHAR(100)
);

CREATE TABLE user_post (
    user_id TEXT NOT NULL,
    post_id TEXT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (post_id) REFERENCES posts (id)
);

DROP TABLE users;
DROP TABLE posts;

DROP Table user_post;

select * from users;

INSERT INTO users (id, name, email, password)
VALUES("01", "Juliana Moraes", "ju@email.com", "1234567")

INSERT INTO users (id, name, email, password)
VALUES
("02", "João Moraes", "joao@email.com", "1234567"), 
("03", "Maria Linda", "maria@email.com", "12345678"),
("04", "Teresa Maria", "teresa@email.com", "123456")

INSERT INTO posts (id, text_post)
VALUES 
("001", "um novo post");

INSERT INTO user_post VALUES ("01", "001");