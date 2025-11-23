const Team = require('../models/Team');

exports.createTeam = async (req, res) => {
    const team = await Team.create(req.body);
    res.status(201).json({ team });
};

exports.getTeams = async (req, res) => {
    const teams = await Team.findAll();
    res.json({ teams });
};
