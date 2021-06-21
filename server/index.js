const { default: axios } = require('axios');
const express = require('express');
const path = require('path');
const app = express();
const { dbSync, models: {Application} } = require('./db')

const API_KEY = '6c93a148aa30236b2b03b7571f3929ce4ba0b3f1bfec802794cae11494347e4b'
const url = `https://portal.suncom.myflorida.com/stash/protected/mfn2/erate_complex.json?auth=${API_KEY}`;

const DIST_PATH = path.join(__dirname, '../dist');
const PUBLIC_PATH = path.join(__dirname, '../public');
const PORT = process.env.PORT || 1337;

app.use(express.json())
app.use(express.static(DIST_PATH));
app.use(express.static(PUBLIC_PATH));

app.get('/db', async(req, res) => {
  try {
    res.send(await Application.findAll())
  } catch (error) {
      console.log(error)
  }
})

app.get('/api', async (req, res) => {
    const data = (await axios.get(url)).data;
    res.send(data)
})

app.delete('/db/delete/:id', async (req, res, next) => {
  try {
    const EPC_app = await Application.findByPk(req.params.id);
    await EPC_app.destroy();
    res.send('Delete Successful')
  } catch (error) {
      console.log(error)
  }
} )

app.post('/db/post', async(req, res, next) => {
  try {
    res.send(await Application.create({ 
      appNum: req.body.appNum, total_eligible: req.body.total_eligible
    }))
  } catch (error) {
      console.log(error)
  }
})


app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));    
    } catch (error) {
        console.log(error)
    }
})

dbSync()
app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))