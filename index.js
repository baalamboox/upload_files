import express from 'express'
import dotenv from 'dotenv'
import fileupload from 'express-fileupload'

dotenv.config()

const server = express()

server.set('view engine', 'hbs')
server.use('/static', express.static('./public'))
server.use(fileupload())

server.get('/', (_, res) => {
    res.render('index', { title: 'Inicio' })
})

server.post('/upload', (req, res) => {
    let file = req.files.uploaded_file
    file.mv(`./public/files/${file.name}`)
    res.redirect('/')
})

server.listen(process.env.SERVER_PORT, () => {
    console.log('Servidor trabajando!')
})
