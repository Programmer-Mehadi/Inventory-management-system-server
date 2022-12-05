const router = require('express').Router();

const veriftJwt = require('../Jwt/verifyJwt');
console.log('dsad')
router.get('/', veriftJwt.verifyJWT, veriftJwt.verifyUser);

module.exports = router;