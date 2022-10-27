/*import { appenFile } from 'fs';
/*import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';


const app = express();

//make req.body work
app.use(express.json());

const db = await sqlite.open({
    filename: './project_plan.db',
    driver: sqlite3.Database
});

console.log('db initialized');

await db.migrate();*/





import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';

const app = express();
app.use(express.static('public'))


//app.use(express.urlencoded({ extended: false }))
app.use(express.json())


/*app.get("/api", function (req, res) {
    res.json({ msg: "Group 5 API" });
});*/

const db = await sqlite.open({
    filename: './project_plan.db',
    driver: sqlite3.Database
});

console.log('db initialized');

await db.migrate();


app.post('/api/Users/update', async function (req, res) {

    console.log(req.body)

    const {
        id,
        Names,
        Surname,
        Contacts
    } = req.body

    const result = await db.run(`update Users set Names = ?,Surname = ?,Contacts = ? where id = ?`,
    Names,
    Surname,
    Contacts,
    id
    );

    console.log(result)

    res.json({
        status: 'success'
    })
});




app.post('/api/Gender/update', async function (req, res) {

    console.log(req.body)

    const {
        Gender
    } = req.body

    const result = await db.run(`update Gender set Sex = ? where Sex = ?`,
        Gender 
    );

    console.log(result)

    res.json({
        status: 'success'
    })
});



app.post('/api/Skintexture/update', async function (req, res) {

    console.log(req.body)

    const {
        Skintexture
    } = req.body

    const result = await db.run(`update Skintexture set typesOfSkin = ?,Recommendations_id = ? where typesOfSkin = ?`,
        Skintexture
    );

    console.log(result)

    res.json({
        status: 'success'
    })
});


app.get('/api/Users', async function(req, res) {
    const Users = await db.all(`select * from Users`);
    res.json({
        Users
    });
});



app.get('/api/Skintexture', async function(req, res) {
    const Skintexture = await db.all(`select * from Skintexture`);
    res.json({
        Skintexture
    });
});



let PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});


