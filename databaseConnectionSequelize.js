 
const is_heroku = process.env.IS_HEROKU || false;
const dbConfigHeroku ="mysql://nwz8w7njjfmhxqnx:lpoxb3gfqbv1c9ua@m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/iq34cn3n1kedclod";
const dbConfigLocal = "mysql://root:R751956r@localhost/lab_example";
if (is_heroku) {
    var databaseConnectionString = dbConfigHeroku;
} else {
    var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;