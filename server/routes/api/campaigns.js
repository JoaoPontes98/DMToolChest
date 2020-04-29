const express = require('express');
const sql = require('mssql');
const config = require('../config');

const router = express.Router();

//Get All Campaigns
router.get('/', async (req, res) => {
    sql.connect(config.db, function (err) {
        if(err) console.log(err);

        let request = new sql.Request();

        request.query(`SELECT * FROM Campaign`, function (err, result) {
            if (err) console.log(err);
            res.send(result.recordset);
        });
    });
});

//Get Campaign
router.get('/:cid', async (req, res) => {
    sql.connect(config.db, function (err) {
        if (err) console.log(err);

        let request = new sql.Request();

        request.query(`SELECT * FROM Campaign WHERE CampaignID = '${req.params.cid}'`, function (err, result) {
            if (err) console.log(err);
            res.send(result.recordset);
        });
    });
});

//Add Campaigns

//Delete Campaigns

//Get Players from a Campaign
router.get('/:cid/players', async (req, res) => {
    sql.connect(config.db, function (err) {
        if (err) console.log(err);

        let request = new sql.Request();

        request.query(`Select * FROM Player WHERE FK_CampaignID = '${req.params.cid}'`, function (err, result) {
            if (err) console.log(err);
            res.send(result.recordset);
        });
    });
});

//Get A player from a Campaign
router.get('/:cid/players/:pid', async (req, res) => {
    sql.connect(config.db, function (err) {
        if (err) console.log(err);

        let request = new sql.Request();

        request.query(`Select * FROM Player WHERE PlayerID = '${req.params.pid}'`, function (err, result) {
            if (err) console.log(err);
            res.send(result.recordset);
        });
    });
});

module.exports = router;