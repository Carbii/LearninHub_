import express from "express";

import estudianteRoutes from "./Routes/estudiantes.routes.js";
import indexRoute from "./Routes/index.routes.js";

const app = express()

app.use(express.json())
app.use(indexRoute)
app.use(estudianteRoutes)

app.listen(3000)
console.log('server running port 3000')
