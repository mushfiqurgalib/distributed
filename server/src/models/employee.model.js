var dbConn  = require('../../config/db.config');

var User = function(users){
    this.name     =   users.name;

    this.password          =   users.password;

 
}

// get all employees
// Employee.getAllEmployees = (result) =>{
//     dbConn.query('SELECT * FROM employees', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Employees fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get employee by ID from DB
User.getUserByname = (employeeReqData, result)=>{
    dbConn.query('SELECT * FROM users WHERE name=? AND password=?', [employeeReqData.name,employeeReqData.password], (err, res)=>{
        if(err){
            console.log('Error while fetching employee by name', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
User.createUser = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO users SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Employee created successfully');
            result(null, res)
        }
    })
}

// // update employee
// Employee.updateEmployee = (id, employeeReqData, result)=>{
//     dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the employee');
//             result(null, err);
//         }else{
//             console.log("Employee updated successfully");
//             result(null, res);
//         }
//     });
// }

// // delete employee
// Employee.deleteEmployee = (id, result)=>{
//     // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the employee');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the employee');
//             result(null, err);
//         }else{
//             console.log("Employee deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = User;