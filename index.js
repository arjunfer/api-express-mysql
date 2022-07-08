import express from "express";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import route from "./routes/AuthRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import SewaRoute from "./routes/SewaRoute.js";
import OutletRoute from "./routes/OutletRoute.js";
dotenv.config();
const app = express()


try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}


app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(fileUpload());
app.use(cookieParser());
app.use(express.json());
app.use(route);
app.use(ProductRoute);
app.use(SewaRoute);
app.use(OutletRoute);

app.listen(5000, ()=> console.log('Server running at port 3000'));