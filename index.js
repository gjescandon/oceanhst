const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cover', (req, res) => res.render('pages/cover'))
  .get('/lookerDemo', (req, res) => res.render('pages/lookerDemo'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
