const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
