const express = require("express");
const cors = require("cors");
const {Client} = require("pg")
const fs = require("fs")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'qwerty12',
})

const app = express()
const PORT = 3005


app.use(cors())
app.use(fileUpload({
    createParentPath: true,
}))

app.use(bodyParser.json())


app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
})


app.get("/user", (req, re) => {
    client.query('SELECT * FROM public.customer; ', (err, res) => {
        if (err) console.log("err")
        re.send(res.rows)
    })
})

app.post("/upload/photo", (req, res) => {
    // client.query(`INSERT INTO public.testphoto(photo)
    //     VALUES ('${req.body.data}');`, (err, res) => {
    //     if (err) console.log(err)
    //   })
    // ;
    const file = req.files.file
    file.mv(`${__dirname}/files/${req.files.file.name}`, err => {

    })
    console.log(req.files.file)
    res.send(file)
    // res.send(req.body)
})

app.get("/download/photo", (req, re) => {
    client.query(`SELECT * FROM public.testphoto;`, (err, res) => {
        if (err) console.log(err)
        console.log(res.rows[0].photo)
        re.send(res.rows[0].photo)
    })
    ;

})


app.post('/login', (req, res) => {
    const verLogin = req.body
    client.query(`SELECT * FROM public.customer;`, (err, respon) => {
        const dataCustomer = respon.rows
        let ok
        let data
        for (let n = 0; n < respon.rows.length; n++) {
            console.log(n)
            console.log(respon.rows.length)
            if ((dataCustomer[n].login === verLogin.login || dataCustomer[n].mail === verLogin.login)
                && dataCustomer[n].passwd === verLogin.passwd) {
                ok = "ok"
                data = {
                    id: dataCustomer[n].id,
                    login: dataCustomer[n].login,
                    name: dataCustomer[n].name,
                    mail: dataCustomer[n].mail,
                    phone: dataCustomer[n].phone,
                }
                console.log("suck")

                break;
            } else if (n + 1 == respon.rows.length) {
                ok = "notok"
            }
        }
        res.send([ok, data])
    })
})


app.post("/photosession/order", (req, res) => {
    const day = req.body.date.slice(0, 2)
    console.log(day)
    const time = req.body.date.slice(11)
    console.log(time)
    client.query(`INSERT INTO public.shooting(
    id_photographer, id_user, date, comment,day)
    VALUES (1, ${req.body.id_user}, '${time}', 'non','${day}');`, (err, response) => {
        if (err) console.log(err)
    })
    console.log(req.body)
})

app.post("/selectedDate", (req, re) => {
    console.log(req.body.day)
    client.query(`SELECT * FROM public.shooting WHERE day = '${req.body.day}';`, (err, res) => {
        if (err) console.log(err)
        console.log(res.rows)
        re.send(res.rows)
    })
})

app.post("/user/order", (req, re) => {
    console.log(req.body.userId)
    client.query(`SELECT * FROM public.shooting WHERE id_user = '${+req.body.userId}';`, (err, res) => {
        if (err) console.log(err)
        console.log(res)
        re.send(res.rows)
    })
})


app.post("/user/registration", (req, re) => {
    const info = req.body
    client.query(`INSERT INTO public.customer(name, mail, phone, passwd, login)
        VALUES ('${info.name}', '${info.mail}', 
        '${info.number}', '${info.passwd}', '${info.login}');`,
        (err,res) =>{
        if (err) console.log(err)
    })
})