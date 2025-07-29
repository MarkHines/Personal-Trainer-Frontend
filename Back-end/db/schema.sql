DROP TABLE IF EXISTS trainers;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password text NOT NULL
);

CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  img_url text NOT NULL, 
  description text NOT NULL
);