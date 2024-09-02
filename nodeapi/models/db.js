const Sequelize = require('sequelize');

const sequelize = new Sequelize('cadastrosite', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(() => {
    console.log("conexão com o banco de dados realizada com sucesso");
}).catch((erro) => {
    console.log("erro: Não foi possivel estabelecer a conexão com o banco de dados erro:" + erro);
});

module.exports = sequelize;