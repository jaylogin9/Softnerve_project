const express = require ('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const db = require('./database/db.js');
const patientRoute = require('./routes/index.js');

/* Middleware*/
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST","PUT","DELETE"]
}));

app.use(express.urlencoded({ extended: false }));
app.use("/", patientRoute);

app.listen(port,() => console.log(`Server is runing on http:localhost:${port}`));