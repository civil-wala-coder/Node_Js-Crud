require("dotenv").config();
const express = require("express");
const cors = require("cors");

const dbConnect = require("./utils/dbConnect");
const studentRoute = require("./route/studentRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/",studentRoute);

const init = async () => {

    await dbConnect();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
};

init();