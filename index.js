const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

// try {
//     db.sequelize.authenticate().then(() => console.log('Connection has been established successfully.'));
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

app.get('/', async (req, res) => {
    
        res.status(200).send({
            message : "Express Server"
        });
});
app.get('/api/customers', async (req, res) => {
    try {
        let data = await db.User.findAll();
        res.status(200).send({
            data
        });
    } catch (error) {
        res.status(500).send(error);
    }

});
app.post('/api/customer', async (req, res) => {
    try {
        let data = await db.User.create({ name: req.body.name, address: req.body.address });
        res.status(200).send({
            status : true,
            id : data.id,
            name : data.name,
            address : data.address
        });
    } catch (error) {
        res.status(500).send({
            status : false,
            id : null,
            name : req.body.name,
            address : req.body.address
        });
    }

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
