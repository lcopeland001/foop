
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "doner_details" (
	"id" SERIAL PRIMARY KEY,
	"doner_first_name" VARCHAR(80) NOT NULL,
	"doner_last_name" VARCHAR(80) NOT NULL,
	"doner_email" VARCHAR (80) NOT NULL,
	"doner_phone" INTEGER NOT NULL,
	"doner_company" VARCHAR(80) NULL
);

CREATE TABLE "user_details" (
	"id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user"
	"first_name" VARCHAR(80) NOT NULL,
	"last_name" VARCHAR(80) NOT NULL,
	"email" VARCHAR (80) NOT NULL,
	"phone" INTEGER NOT NULL,
	"street" VARCHAR(80) NULL
	"city" VARCHAR(80) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "access_level" INT DEFAULT 0
);

CREATE TABLE "scholar_details" (
	"id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "scholar_first_name" VARCHAR (80) NOT NULL,
	"scholar_last_name" VARCHAR(80) NOT NULL,
	"scholar_birthday" VARCHAR (80) NOT NULL,
);
