const crytpo = require('crypto')

module.exports = function gerarId(){
    return crytpo.randomBytes(4).toString('HEX');
}