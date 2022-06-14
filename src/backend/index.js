const express = require("express")
const cors = require('cors')
const driverRouter = require('./routes/driver.routes')
const penaltyRouter = require('./routes/penalty.routes')
const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', driverRouter)
app.use('/api', penaltyRouter)

app.listen(PORT, () => console.log(`Стартанул на ${PORT}`))