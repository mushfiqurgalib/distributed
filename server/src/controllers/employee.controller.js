
const UserModel = require('../models/employee.model');
const StatusModel=require('../models/status.model');

// get all employee list
exports.getEmployeeList = (req, res)=> {
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}

// get employee by ID
exports.getUserByemail = (req, res)=>{
    //console.log('get emp by id');
    const UserReqData=new UserModel(req.body);
    UserModel.getUserByemail(UserReqData, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single employee data',user);
        res.send(user);
    })
}

// create new employee
exports.createnewuser = (req, res) =>{
    const UserReqData = new UserModel(req.body);
    console.log('employeeReqData', UserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(UserReqData, (err, user)=>{
            if(err){
            res.send(err);}
            else{
            res.json({status: true, message: 'Employee Created Successfully',data:user})}
        })
    }
}

exports.getAllStatus = (req, res)=> {
    //console.log('here all employees list');
    const UserReqData=new StatusModel(req.body);
    console.log('employeeReqData', UserReqData);
    StatusModel.getAllStatus(UserReqData,(err, status) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', status);
        res.send(status)
    })
}

//create new status
exports.createnewstatus = (req, res) =>{
    const UserReqData = new StatusModel(req.body);
    console.log('employeeReqData', UserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        StatusModel.createStatus(UserReqData, (err, user)=>{
            if(err){
            res.send(err);}
            else{
            res.json({status: true, message: 'Status Created Successfully',data:user})}
        })
    }
}
// update employee
exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        })
    }
}

// delete employee
exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
}