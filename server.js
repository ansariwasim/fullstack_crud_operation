// Server start 

import 'dotenv/config';
import app from "./src/app.js"
import { connectDB } from "./src/db/db.js";

connectDB()

app.listen(process.env.PORT, ()=>{
    console.log("Server listen on port:3000");
})