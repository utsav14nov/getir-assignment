const express = require("express");
const path = require("path");

const indexRouter = require('./routes/index');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', indexRouter);

const port = process.env.PORT || "8000";

app.listen(port, () => {
  console.log(`Listening to requests on ${port}`);
});