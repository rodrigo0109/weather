const express = require('express');
const app = express();

const cors = require("cors");
const City = require('../models/City');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.post('/', async(req, res) => {
    let { name, country, weather, dayTime, temp, min, max } = req.body
    //console.log('GET LOG',req.body)
        try {
            let city = await City.create({
                name, country, weather, dayTime, temp, min, max
            })
            res.json(city)
        } catch (error) {
            res.status(400).send(console.log(error))
        }
    }
)

app.get('/cities', async(req, res) => {
    try {
        let cities = await City.findAll()
        res.json(cities)
    } catch (error) {
        res.send(error)
    }
})

app.post('/cities', async(req, res) => {
    let {name} = req.body
    //console.log('destroy',name)
    try {
        await City.destroy({
            where: {
                name: name
            }
        })
        res.redirect('/cities')
    } catch (error) {
        res.send(error)
    }
})

//strarting
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server On Port  ${3001} `)
    City.sync({force: true})
});





