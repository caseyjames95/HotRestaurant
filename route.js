const axios = require('axios')

const express = require('express')
const path = require('path')
const app = express()

// these are superduper important middleware USE THIS
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log('you did a great thing')
})


let table = {
    name: document.getElementById('name').value,
    email: document.getElementById('phone').value,
    phone: document.getElementById('email').value
}

axios.post('/table', table)
    .then(res => {
        console.log(res)
    })
    .catch(e => console.log(e))

