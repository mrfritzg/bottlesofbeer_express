//Load express
const express = require('express');

//create the express app
const app = express();

//create a Port
const PORT = 3003;

let numOfBottles = 99;

function randomly(num) {
const minusOne = num1 => num1-=1;
const arrOfFuncs =[
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    minusOne(num), minusOne(num),
    Math.floor(Math.random() * 1000)
]
return arrOfFuncs[Math.floor(Math.random() * arrOfFuncs.length)]
}

//Create a "root" route
app.get('/', (req, res) => {
    res.send(`<p> ${numOfBottles} Bottles of beer on the wall</p>
    <p> ${numOfBottles} Bottles of beer</p>
    <a href="/${randomly(numOfBottles)}"> Take one down, pass it around</a>`)
})


//Create a "root" route
app.get('/:number_of_bottles', (req, res) => {
    numOfBottles = req.params.number_of_bottles;
    if (numOfBottles > 0) {
        res.send(
            `<p> ${req.params.number_of_bottles} Bottles of beer on the wall</p>
    <p> ${req.params.number_of_bottles} Bottles of beer</p>
       <a href="/${randomly(numOfBottles)}"> Take one down, pass it around</a><br>`
        )
    } else {
        numOfBottles = 99;
        res.send(`<p> ${req.params.number_of_bottles} Bottles of beer on the wall</p>
        <p> ${req.params.number_of_bottles} Bottles of beer</p>
        <p>No More Bottles of Beer on the Wall<p>
        <a href="/"> START OVER</a>`)
    }
})


app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})