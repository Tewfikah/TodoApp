const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');
const p = require ("./router/ttos")
app.use("/todos" ,p)

db.sequelize.sync().then(() => {
    app. listen(5000,() => {
        console.log("server running on port 5000" );
    });
})

