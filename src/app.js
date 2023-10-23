import express from 'express'
import cors from 'cors'
import routes from './routes/api.routes.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(port, () => console.log('Servidor rodando na porta ' + port))