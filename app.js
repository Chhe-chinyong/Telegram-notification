var bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000;
const fetch = require('node-fetch');
const Bluebird = require('bluebird');

require('dotenv').config()

fetch.Promise = Bluebird;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello Worl2d1!'+'yong')
})

app.post('/telegram', (req,res) => {
  const body = req.body;
  const token = process.env.token;
  const url =`https://api.telegram.org/bot${token}/sendMessage`;
  const message = {};
  
  const firstName =body.firstName;
  const lastName = body.lastName;
  const phone = body.phone;
 
  const body1 = {
    "chat_id": "-204168198",
    "text": `firstName: ${firstName} \n`+ 
    `lastName: ${lastName} \n`+ 
    `phone: ${phone}`
  };
 
fetch(url, {
        method: 'post',
        body:    JSON.stringify(body1),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));

  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});