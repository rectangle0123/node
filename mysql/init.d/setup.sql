-- 著者テーブル作成
CREATE TABLE authors (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

-- 書籍テーブル作成
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    author INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author) REFERENCES authors(id) ON DELETE CASCADE
);

-- 著者データ登録
INSERT INTO authors(name) VALUES('夏目 漱石');
INSERT INTO authors(name) VALUES('森 鷗外');
INSERT INTO authors(name) VALUES('樋口 一葉');

-- 書籍テーブル登録
INSERT INTO books(name, author) VALUES('吾輩は猫である', 1);
INSERT INTO books(name, author) VALUES('坊つちやん', 1);
INSERT INTO books(name, author) VALUES('三四郎', 1);
INSERT INTO books(name, author) VALUES('舞姫', 2);
INSERT INTO books(name, author) VALUES('雁', 2);
INSERT INTO books(name, author) VALUES('高瀬舟', 2);
INSERT INTO books(name, author) VALUES('にごりえ', 3);
INSERT INTO books(name, author) VALUES('十三夜', 3);
INSERT INTO books(name, author) VALUES('たけくらべ', 3);
