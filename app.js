const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('oke')
})

app.listen(8000)