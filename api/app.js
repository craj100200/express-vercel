const express = require("express");

const port  = 3000;

const app = express();


app.get('/hello-world', (request, response) =>  { 
	response.send("Hello, World!");
});

app.listen(port , () => {console.log("server running!");});

module.exports = app;
