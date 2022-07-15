var dbConn  = require('../../config/db.config');


var Story=function(story){
    this.email=story.email;
    this.name=story.name;
}

Story.createStory=(employeeReqData,result)=>{

    dbConn.query('INSERT INTO story SET ?',employeeReqData,(err,res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Story created successfully');
            result(null, res)
        }
    })
}
module.exports=Story;