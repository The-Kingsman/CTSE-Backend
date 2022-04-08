const express = require('express')
const mongo = require('mongoose')
const router = express.Router()
const config = require('config')
const app = express()

const teacherRoute = require('./routes/teacher.routes')
const classRoute = require('./routes/Class.routes')
const ratingRoute = require('./routes/Rating.routes')
const userRoute = require('./routes/User.routes');

const cors = require('cors')

app.use(cors());
app.use(express.json());

const port = config.get('port')
const url = config.get('db')

mongo
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err))

const connection = mongo.connection

connection.once('open', () => {
  console.log('Database connected!')
})

router.use('/teacher', teacherRoute)
router.use('/class', classRoute)
router.use('/rating', ratingRoute)
router.use('/user', userRoute)

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
