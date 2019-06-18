const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


const superheroes = [
    { name : 'Wonder-Woman', food : 'Salad'},
    { name : 'Spider-Man', food : 'Nuts'},
    { name : 'Batman', food : 'Cereal'}
];

app.get('/', (req, res) =>{
    res.send('hello')
})
// GET

app.get('/api/superheroe', (req, res) => {
    res.send(superheroes)
});

// POST
app.post('/api/superheroe', (req, res) => {
 const superheroe = {
     name: req.body.name,
     food: req.body.food
 };
 superheroes.push(superheroe);
 res.send(superheroe);
});

// PUT

app.put('/api/superheroe/:name', (req, res) => {
    const superheroe = superheroes.find(target => target.name === req.params.name);
    superheroe.name = req.body.name;
        res.send(superheroe);
});

// DELETE

app.delete('/api/superheroe/:name', (req, res) => {
    const superheroe = superheroes.find(target => target.name === req.params.name);
    let index = superheroes.indexOf(superheroe);
    superheroes.splice(index, 1);
    res.send(superheroe);
});


app.listen(3000, function () {
    console.log('estoy aqui, me ves?')
});
