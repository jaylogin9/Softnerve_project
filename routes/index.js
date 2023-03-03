const express = require ('express');
const router = express.Router();

const create = require ('../controllers/create.controller.js');
const getAll = require ('../controllers/get.controller.js');
const getSingle = require ('../controllers/getsingle.controller.js');
const update = require ('../controllers/update.controller.js');
const deleted = require ('../controllers/delect.controller.js');
const login = require('../controllers/login.controller.js');
const signup = require('../controllers/signup.controller.js');

/* Routing the page */
router.post("/add-patient",create);
router.get("/add-get",getAll);
router.get("/add-single/:id",getSingle);
router.put("/update/:id", update);
router.delete("/delete/:id", deleted);
router.post('/login',login);
router.post('/signup',signup);

module.exports= router;