// Required Modules
const express = require('express');
const connectToMongo = require('./db');
const helmet = require('helmet');
const dotenv = require('dotenv');
const xss = require('xss-clean');
const morgan = require('morgan')
var cors = require('cors')


// Routing
const userRouter = require('./routes/userRoutes')
const coachRouter = require('./routes/coachRoutes')
const bookingRouter = require('./routes/bookingRoutes')

// Contollers
const bookingController = require('./controllers/bookingController')
const invalidController = require('./controllers/invalidController')

// Loggers
const requestLogger = require('./utilities/requestLogger')
const errorLogger = require('./utilities/errorLogger')

dotenv.config({path: './config.env'})
connectToMongo();
const app = express();
app.use(morgan("dev"))
app.use(helmet())
app.use(xss())
app.use(cors())
app.use(express.json());
app.use(requestLogger)

app.post('/users/booking/:userId/:coachId',bookingController.createBooking)
app.get('/coaches/booking/:coachId', bookingController.getBookingByCoachId)
app.get('/users/booking/:userId', bookingController.getBookingByUserId)
app.use('/users', userRouter)
app.use('/coaches', coachRouter)
app.use('/bookings', bookingRouter) 
app.all('*', invalidController.invalid)
app.use(errorLogger)

const port = process.env.port || 4000
app.listen(port, () => {
  console.log(`App running on port ${port}`);
})