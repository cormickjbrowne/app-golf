require('dotenv').config();

const express = require('express');
const enrouten = require('express-enrouten');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(enrouten({
    directory: 'controllers'
}));

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
