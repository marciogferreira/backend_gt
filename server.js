const express = require('express')
const cors = require('cors')

const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');
// import UsersRotas from './rotas/UsersRotas.js';
const host = 'localhost'
const port = 3000

const app = express()
app.use(express.json())

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))


app.get('/', (request, response) => {
    return response.send("Hello Express")
})

app.use(RotasPublicas);
app.use('/api', RotasPrivadas);

// 3 FORMAS DE PASSAR DADOS PARA O BACKEND
// FORMA 1 - QUERYS
// FORMA 2 - PARAMS
// FORMA 3 - BODY

app.get('/teste/:id/:chave', (request, response) => {
    let query = request.query;
    let params = request.params
    let body = request.body;

    const passagemDadosBack = {
        query: query,
        params: params,
        body: body
    }
    return response.json(passagemDadosBack);
})

app.listen(port, host, () => {
    console.log('Servidor executando na http://localhost:3000')
})