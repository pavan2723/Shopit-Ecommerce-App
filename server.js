
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRoute = require("./routes/UserRoutes");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://atlaspavan:atlaspavan@cluster0.ryhnvki.mongodb.net/ecommerce?retryWrites=true&w=majority").then(()=>console.log("DB Connected successfully...")).catch((err)=>console.log(err));


app.use("/user",UserRoute);

app.listen(5001,()=>{
    console.log("Server running on Port 5001");
})


//mongodb+srv://atlaspavan:<password>@cluster0.ryhnvki.mongodb.net/?retryWrites=true&w=majority