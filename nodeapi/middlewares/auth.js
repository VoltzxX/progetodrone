const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = {
    eAdmin: async function(req, res, next){
        const autHeader = req.headers.authorization;
        console.log(autHeader);
    }
}