const axios = require('axios')

const express = require('express')
const path = require('path')
const app = express()

let waitList = []

let table = []


// these are superduper important middleware USE THIS
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log('you did a great thing')
})


// let customer = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('phone').value,
//     phone: document.getElementById('email').value
// }

// get customer info
app.post('/table', (req, res)=>{ 
    console.log('ping')  
    if(table.length < 5){
        table.push(req.body)
        console.log(table)
    } else {
        waitList.push(req.body)
    }
})



// look at this
// read table and waitlist data
app.get('/table', (req, res) => {
    res.send({
        table: table,
        waitList: waitList
    })
})

// axios.post('/table', customer)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => console.log(e))




