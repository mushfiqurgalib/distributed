const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');



// get all employees
// router.get('/', employeeController.getEmployeeList);

// get employee by ID
router.post('/login',employeeController.getUserByemail);

// create new employee
router.post('/', employeeController.createnewuser);

router.post('/status', employeeController.createnewstatus);

router.get('/profile/:jwt',employeeController.verifyJWT);

router.get('/viewstatus/:email', employeeController.getAllStatus);
// update employee
router.put('/:id', employeeController.updateEmployee);

// delete employee
router.delete('/:id',employeeController.deleteEmployee);

module.exports = router;