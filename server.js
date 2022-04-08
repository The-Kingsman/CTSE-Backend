const express = require('express')
const mongo = require('mongoose')
const router = express.Router()
const config = require('config')
const app = express()

const teacherRoute = require('./routes/teacher.routes')
const subjectRoute = require('./routes/Subject.routes')
const ratingRoute = require('./routes/Rating.routes')
const studentRoute = require('./routes/student.routes')
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
router.use('/subject', subjectRoute)
router.use('/rating', ratingRoute)
router.use('/student', studentRoute)

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
