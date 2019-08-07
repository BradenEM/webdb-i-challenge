const express = require('express');

const db = require('../dbConfig.js');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const accounts = await db.select('*').from('accounts');
		
		res.status(200).json(accounts);
	} catch (error) {
		res.status(500).json(error);
	}
})

module.exports = router;