import express from 'express'
import * as path from 'path'
const server = express();

server.get('/', (req,res)=> {
    let clientIp: string = null;
    if(req.headers['x-forwarded-for']) {
        clientIp = (req.headers['x-forwarded-for'])[0]
    } else if(req.connection && req.connection.remoteAddress) {
        clientIp = req.connection.remoteAddress;
    } else {
        clientIp = req.ip;
    }
    console.log("Client "+ clientIp +" connected")
    res.sendFile(path.join(__dirname, '/index.html'))
});

const port = 8080;
const host = '10.0.0.188'

server.listen(port, host, () => {
    console.log(`Server listening at http://${host}:${port}`);
});