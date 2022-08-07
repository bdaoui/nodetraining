const chalk = require("chalk");

const http = require('http'); // loading http package
const port = 4000; // gateway to my code

console.log(chalk.blue("hello world"));


const server = http.createServer( (request, response) =>{
    if(request.url === '/') return response.write("this is the home page");
    if(request.url === '/about') return response.write("this is the about page");

    return response.write("<h1>404 page not found <h1>")


})

server.listen(port, () => console.log(`server is listeningon port ${port}`))