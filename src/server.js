import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// SECTION 02 - EXPRESS
// simple routes
app.get('/d', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/d', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

// simple middleware
const log = (req, res, next) => {
  console.log('logging')
  req.myData = 'middleware data'
  next()
}

app.get('/middleware', [log, log, log], (req, res) => {
  console.log('middleware api')
  res.send({ data: req.myData })
})

// Routers and sub-routers
const router = express.Router()
router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.use('/api', router)

// Router verb methods
// const router1 = express.Router

// router1
//   .route('/cat')
//   .get((req, res) => {
//     res.send({ res: 'res from router1 /cat' })
//   })
//   .post((req, res) => {
//     res.send({ res: 'res is' + req.body })
//   })

// router1
//   .route('/cat/:id')
//   .get((req, res) => {
//     res.send({ res: 'res from router1 /cat:id' })
//   })
//   .put((req, res) => {
//     res.send({ res: 'res from router1 /cat' + req.body })
//   })
//   .delete()

// app.use('/api1', router1)

export const start = () => {
  app.listen(3000, () => {
    console.log('server is started on 3000 port')
  })
}
