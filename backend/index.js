const express = require("express");
const app = express();


app.get('/', (request, response) => {
    response.send('Home Page');
})
app.get('/about', (request, response) => {
    response.send('About Page');
})


app.post('/', (request, response) => {
    response.send('Home Page');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})