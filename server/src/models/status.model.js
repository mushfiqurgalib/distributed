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

module.exports=Status;