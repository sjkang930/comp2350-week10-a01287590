const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "nwz8w7njjfmhxqnx",
	password: "lpoxb3gfqbv1c9ua",
	database: "iq34cn3n1kedclod",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "R751956r",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		

	