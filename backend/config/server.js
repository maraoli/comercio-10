const app = require('./app');

const PORT = process.env.PORT || 3001;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT ,()=>{
    console.log(`Servidor rodando em http://${HOSTNAME}:${PORT}`);
})