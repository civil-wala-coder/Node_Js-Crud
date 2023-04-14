const mongoose = require("mongoose");

const dbConnect = async () => {

    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            dbName: "demo-crud",
        });
        console.log("db connected successfully !!");
    } catch (error) {
        console.log("error ==> ", error.message);
    }
}

module.exports = dbConnect;