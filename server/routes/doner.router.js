const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Get Route - return doner information
router.get('/', (req, res) => {
    console.log('/doner GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "doner_details" WHERE "user_id" = $1`;
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

router.get('/id', (req, res) => {
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "doner_details" WHERE "user_id" = $1 AND "id" = $2;`;
        pool.query(queryText, [req.user.id, req.params.id]).then((result) => {
            res.send(result.rows[0]); 
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

// POST Route - add doner information 

router.post("/", (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "doner_details" ("doner_first_name", "doner_last_name", "doner_email", "doner_phone", "doner_company")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [
        req.body.doner_first_name, 
        req.body.doner_last_name,
        req.body.doner_email, 
        req.body.doner_phone, 
        req.body.doner_company,  
    ]).then((result) => {
        res.sendStatus(200);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
    }else {
        res.sendStatus(403);
    }
});

module.exports = router;