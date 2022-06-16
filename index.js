// ./index.js

// 1. IMPORTACIONES

const express		= require("express")
const app			= express()

const cors			= require("cors")

// 2. MIDDLEWARES
require("dotenv").config()


app.use(cors())

app.use(express.json({extended: true}))

// 3. RUTEO

app.use("/", require("./routes/index"))


// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))









