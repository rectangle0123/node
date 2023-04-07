-- 作家テーブル
CREATE TABLE authors (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

-- 作品テーブル
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    author INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author) REFERENCES authors(id)
);
