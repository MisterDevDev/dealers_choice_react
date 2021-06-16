const { default: axios } = require('axios');
const express = require('express');
const path = require('path');
const app = express();

const API_KEY = '6c93a148aa30236b2b03b7571f3929ce4ba0b3f1bfec802794cae11494347e4b'
const url = `https://portal.suncom.myflorida.com/stash/protected/mfn2/erate_complex.json?auth=${API_KEY}`;

const DIST_PATH = path.join(__dirname, './dist');
const PUBLIC_PATH = path.join(__dirname, './public');
const PORT = process.env.PORT || 1337;


app.use(express.static(DIST_PATH));
app.use(express.static(PUBLIC_PATH));


app.get('/api/fy', async (req, res) => {
    let data;
    data = (await axios.get(url)).data;
    res.send(data)
})

app.get('*', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, './public/index.html'));    
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))