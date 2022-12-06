var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host:'sql.freedb.tech',
    user:'freedb_shivkant',
    password:'Y&pA8x6q*apyDj$',
    database:'freedb_carwashdatabase',
    port: 3306,
    debug: false,
    multipleStatements: true
});

module.exports.connection = connection;