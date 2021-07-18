const Pool = require('pg').Pool;
const Pool2 = require('mysql');


// local postgresql db connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "niiayittey",
    port: 5432
});

const pool2 = Pool2.createConnection({
    user: "root",
    host: "localhost",
    database: "students",
    password: "niiayittey",
    port: 3306
})
module.exports = {
    pool,
    pool2,
}