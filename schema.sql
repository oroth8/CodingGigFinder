CREATE DATABASE `codeGig_db`;
USE `codeGig_db`;

CREATE TABLE gigs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200),
    technologies VARCHAR(200),
    budget VARCHAR(20),
    description text,
    contact_email VARCHAR(50),
    createdAt date,
    updatedAt date,
    PRIMARY KEY(id)
);

select * from gigs;
