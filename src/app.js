import express from "express";
import  cors  from "cors";


const app = express();


app.use(cors({
    origin:process.env.ORIGIN_URL,
    credentials:true
}));
// Common Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// Connect to DB
import  connectDB  from "./Database/index.js";
connectDB();


// Routes
import  routes  from "../src/Routes/HealthCheck.route.js";
app.use("/api",routes);

export  default app 