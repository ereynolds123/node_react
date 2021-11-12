//Import the sum function from the helpers file
const helpers = require("./helpers")


//Could also do const {sum}= require("./helpers"). This is destructuring

const total = helpers.sum(10,2);

//Total is 12
console.log(total)

//Creating a server that listens on port 3000
const http = require("http");
const port = process.env.PORT || 3000

const app = http.createServer((req, res)=> {
    res.end("Hello World from Node JS")

})

app.listen(port, () => console.log(`Listening on port ${port}!`))

