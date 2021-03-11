const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));