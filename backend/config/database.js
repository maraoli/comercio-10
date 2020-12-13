const { Client } = require('pg');
const connectionString = 'postgres://gdmerpkuvgxkhg:948439acbfea2fbc55989cef2e044ca02a01d4f6d1b4b3dbb4ad6bddd9b82ba0@ec2-50-17-21-170.compute-1.amazonaws.com:5432/d15id8514ueqjp?ssl=true';

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

/*
const client = new Client({
    user: "gdmerpkuvgxkhg",
    password: "948439acbfea2fbc55989cef2e044ca02a01d4f6d1b4b3dbb4ad6bddd9b82ba0",
    database: "d15id8514ueqjp",
    port: 5432,
    host: "ec2-50-17-21-170.compute-1.amazonaws.com",
    ssl: true
})
*/

const client = new Client({connectionString:connectionString})

client.connect()

client.query('SELECT * FROM public.user', (err, res) =>{
    console.log(`\n\n\n\ ERRO: ${err ? err.stack : res.rows[0]}`, `\n\n\n\ REP: ${JSON.stringify(res.rows[0])}`)
    client.end()
})