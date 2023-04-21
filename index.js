const express = require ('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const port = process.env.PORT || 8080;
const db = require('./database/db.js');
const patientRoute = require('./routes/index.js');
const compression = require('compression');
/* Middleware*/
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(cors({
    origin: "https://softnerve-project.vercel.app",
    methods: ["GET","POST","PUT","DELETE"]
}));
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use((req,res,next)=>{
    res.set('Cache-Control','no-cache,private,must-revalidate,no-store');
    next();
})
app.use("/", patientRoute);

app.listen(port,() => console.log(`Server is runing on http:localhost:${port}`));