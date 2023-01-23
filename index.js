const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());

//read

app.get('/capak', function(req, res){
    fs.readFile('./capak.json', function(err, data) {
        res.send(JSON.parse(data));
    });
});

//read by name
app.get('/capak/:name', function(req, res){
    const name = req.params.name;
    fs.readFile('./capak.json', function(err, data) {
        const capak = (JSON.parse(data));
        const capaByName = capak.find((capa) => capa.name === name);
            if (!capaByName) {
                res.status(404);
                res.send({error: `name: ${name} Not found`});
                return;
            }
            res.status(200);
            res.send(capaByName);
    });
});


app.listen(9000);