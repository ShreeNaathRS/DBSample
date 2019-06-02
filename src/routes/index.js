const express = require('express');
const router = express.Router();

const createController = require('../app/components/create/create.model');

router.post('/create', createController.create);

module.exports = router;