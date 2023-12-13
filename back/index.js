const express = require("express");
const cors = require("cors");
const {Client} = require("pg")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const fs = require('fs');
const path = require('path');

const client = new Client({
    host: '109.68.215.157',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'qwerty12',
    // password:'qwerty'
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
app.get('/',(req,res)=>{
    res.send('<h1>Studio Server Active</h1>')
})
app.post("/upload/photo", (req, res) => {
    // client.query(`INSERT INTO public.testphoto(photo)
    //     VALUES ('${req.body.data}');`, (err, res) => {
    //     if (err) console.log(err)
    //   })
    // ;
        console.log(req.body.user)
        for(let n = 0; n < req.files.file.length; n++){
            const file = req.files.file[n]
            file.mv(`${__dirname}/files/${req.body.user[n]}/${req.files.file[n].name}`, err => {
                console.log(err)
            })
        }
        res.send("ok")
    // // else{
    //     console.log(req.body)}


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


app.use("/photos", express.static(__dirname + "/files"))

app.post("/user/getPhotos", (req,res)=>{
    const folder = req.body.login;
  const folderPath = path.join(__dirname, 'files/' + folder);
  console.log("se")
  // Читаем содержимое папки
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Ошибка чтения папки', err);
      res.status(500).send('Ошибка сервера');
    } else {
      // Отправляем список файлов на фронтенд
        console.log("su")
        files = {
            files : files,
            folder : folder
        }
      res.json(files);
    }
  });
    // const folder = req.body.login;
    // const filename = '1.jpeg'
    // const imagePath = path.join(__dirname, 'files/' + folder, filename);
    
    // res.sendFile(imagePath);

    // const filePath = `/files/${req.body.login}`; // Укажите путь к файлу, который вы хотите отправить
    // const fileName = '*'; // Укажите имя файла, которое будет видно на фронтенде
  
    // const fullPath = path.join(__dirname, filePath); // Полный путь к файлу
    // const fileStream = fs.createReadStream(fullPath); // Создание потока чтения файла
    // console.log(filePath)
    // console.log(fileStream)
    // res.setHeader('Content-Disposition', `attachment; filename="${fileStream}"`); // Установка заголовка Content-Disposition для указания имени файла при загрузке  
    // // fileStream.pipe(res); // Перенаправление потока файла на ответ res
    // fileStream.pipe(res); // Перенаправление потока файла на ответ res
    // console.log(__dirname)
    // console.log(req.body.login)
    // const da = app.use('user/getPhotos',express.static(__dirname, + `/file/${req.body.login}`))
    // console.log(da)
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

app.post('/delete/order',(req,re) =>{
    const info = req.body
    console.log(info)
    client.query(`DELETE FROM public.shooting
        WHERE id_user = ${info.user} AND day = '${info.day}';`,
        (err,res)=>console.log(err))
})