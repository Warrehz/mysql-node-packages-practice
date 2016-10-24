CREATE DATABASE TopSongsDB

USE TopSongsDB

CREATE TABLE Top3000 (
	id INT(100) NOT NULL AUTO_INCREMENT,
    artist VARCHAR(100) NULL,
    album VARCHAR(100) NULL,
    year INT(100) NULL,
    raw_total DECIMAL(10, 4) NULL,
    raw_usa DECIMAL(10, 4) NULL,
    raw_uk DECIMAL(10, 4) NULL,
    raw_eur DECIMAL(10, 4) NULL,
    raw_row DECIMAL(10, 4) NULL,
    PRIMARY KEY (id));
    
    LOAD DATA LOCAL INFILE 'C:/TopAlbums.csv' INTO TABLE Top3000 FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    (id, artist, album, year, raw_total, raw_usa, raw_uk, raw_eur, raw_row);
    
    SELECT * FROM Top5000
    
    SELECT * FROM Top3000
    
    SELECT * FROM Top5000 WHERE id > 1000
    
    SELECT artist FROM Top3000
    INNER JOIN Top5000
    ON Top3000.year = Top5000.year;
    