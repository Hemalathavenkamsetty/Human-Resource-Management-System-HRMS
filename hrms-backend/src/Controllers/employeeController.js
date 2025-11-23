const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
};

exports.getEmployees = async (req, res) => {
    const employees = await Employee.findAll();
    res.json({ employees });
};
