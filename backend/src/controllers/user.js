const { delete } = require('../routes');
const gerarId = require('../utils/gerarId')

module.exports ={
    async show(req, res){
        try{
            const userMail = findUserMail(userMail);
            if(!userMail) return console.log("Email de usuário não encontrado.")

            const userPassword = findUserPassword(userPassword);
            if(!userPassword) return console.log("Senha não confere.") 

        }catch(err){
            console.log(err)
        }
    },

    async create(req, res){
        const {
            nome,
            email,
            senha
        } = req.body;

        const id = gerarId();

        const newUser = new newUser({
            id,
            nome,
            email,
            senha
        })

        await newUser.
    },

    async delete(req, res){

    }
}