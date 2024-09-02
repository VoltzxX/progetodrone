
const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { eAdmin } = require('./middlewares/auth');

const User =  require('./models/user');
const { Model } = require('sequelize');

app.use(express.json());

//parte de permissão ao navegador para fazer requests para a pagina.

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', eAdmin,  async (req, resp) =>{
    await user.findAll({
        attributes: ['id', 'name', 'email'],
        order: [['id', "DESC"]]
    })
    .then((user) =>{
        return resp.json({
            erro: false,
            users: user 
        });
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "erro: não foi possivel cadastrar o usuario"
        });
    });
    
});

app.post('/cadastrar', async (req, res) => {
    console.log(req.body);
    var dados = req.body;


    dados.password = await bcrypt.hash(dados.password, 8);


    await User.create(dados)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado com sucesso"
        });    
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "erro: não foi possivel cadastrar o usuario"
        });  
    });
    
});

app.post('/login', async (req,res) => {
    console.log(req.body);

    const user = await User.findOne({
         attributes: ['id','name','email','password'],
         where: {
            email: req.body.email
         }
    });

    if(user === null){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Email incorreto! nenhum usuario com este email!"
        });
    };

    if(!(await bcrypt.compare(req.body.password, user.password))){ 
        return res.status(400).json({
        erro: true,
        mensagem: "Erro: senha incorreta!"
    });
    }

    var token = jwt.sign({id: user.id}, "kmsfijreVnlksPdgoigelk03E502106Tuts64AARES038", {
        // expiresIn: 600 10 mim
        expiresIn: '7d' // 7 dias
    });

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso",
        token
    });
});


app.get('/listausuarios', async (req, res) => {
    try {
        const lista = await User.findAll();

        return res.status(200).json(lista);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080");
});