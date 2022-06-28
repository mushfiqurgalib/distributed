const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// get all employees
// router.get('/', employeeController.getEmployeeList);

// get employee by ID
router.post('/login',employeeController.getUserByname);

// create new employee
router.post('/', employeeController.createnewuser);

// update employee
router.put('/:id', employeeController.updateEmployee);

// delete employee
router.delete('/:id',employeeController.deleteEmployee);

module.exports = router;