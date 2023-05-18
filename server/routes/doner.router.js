const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Get Route - return doner information


// POST Route - add doner information 
router.post('/', (req, res)=> {
    console.log('doner POST route');
    console.log(req.body);

    const queryText = `INSERT INTO "doner_details" ("doner_first_name", 
                        "doner_last_name", "doner_email", "doner_phone", 
                        "doner_company")
                        VALUES ($1, $2, $3, $4, $5) RETURNING "id";`;
    pool.query(queryText, [
        req.body.doner_first_name, 
        req.body.doner_last_name,
        req.body.doner_email, 
        req.body.doner_phone, 
        req.body.doner_company,  
    ]).then((result) => {
        res.sendStatus(201);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
})

module.exports = router;