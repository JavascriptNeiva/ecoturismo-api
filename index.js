const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const routerHandle = require('./routes')

const app = express()
app.use(bodyParser.json())

app.use('/user', routerHandle.user)

app.listen(port, err => {
  if (err) {
    console.log(`ocurrio un error al tratar de levantar el servidor: ${err.message}`)
    process.exit(0)
  }
  console.log('server running')
})
