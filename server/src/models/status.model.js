var dbConn  = require('../../config/db.config');

var Status=function(status){
    this.email=status.email;
    this.status=status.status;
}


Status.createStatus=(employeeReqData,result)=>{
    dbConn.query('INSERT INTO status SET ?',employeeReqData,(err,res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Status created successfully');
            result(null, res)
        }
    })
}

//get all employees
Status.getAllStatus = (employeeReqData,result) =>{
    dbConn.query('SELECT * FROM(SELECT * FROM `status` ORDER BY id DESC LIMIT 10)VAR1 WHERE email!=?',[employeeReqData.email], (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}
module.exports=Status;