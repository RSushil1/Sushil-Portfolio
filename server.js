const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./db');
const dotenv = require('dotenv')
const {projectByName,createGmail } = require('./services/portfolioService');


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('./client'))

dotenv.config();



// routes
app.get('/api', (req, res) => {
    res.json("Welcome to the Api");
})


// get by name
app.get('/api/project/name/:name', async (req, res) => {
    let result = await projectByName(req.params.name, db);
    res.status(200).json(result);
    
})

//Gmail post method
app.post('/api/gmail', async (req, res) => {
    let result = await createGmail(req.body, db);
    res.status(200).json(result);
})

  

// Database Connection
let db;
connectToDb((err)=>{
    if(!err){
    app.listen(process.env.PORT, () => {
        console.log(`app listening on port ${process.env.PORT}...`)});
    }
    db = getDb();    
})

