const mysql=require('mysql');

const dbConn = mysql.createConnection({
    port:3308,
    host:'localhost',
    user:'username',
    password:'password',
    database:'distributed'
});

dbConn.connect(function(error){
if(error) throw error;
console.log('database connected');
})

module.exports=dbConn;