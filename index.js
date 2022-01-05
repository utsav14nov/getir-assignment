const express = require("express"); // Express Module

const indexRouter = require('./routes/index'); // Route Module

const app = express();

// CORS Management
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

//MiddleWare to json payload in request body
app.use(express.json());

// Adding Routes
app.use('/v1', indexRouter);

const port = process.env.PORT || "8000";

// Starting server
app.listen(port, () => {
  console.log(`Listening to requests on ${port}`);
});