const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>So far on this project I have used git to utilize docker to make a containerized application. Now I am involving the use of node.js to give the project some dynamic content instead of the task being finished with a blank local host screen. Until now the local host was simply a Nginx web server with static files in html and css. I am unsure how useful any of this is but I like the experience.</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

