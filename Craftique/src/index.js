import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env') });

// console.log("PORT from env:", process.env.PORT);
// console.log("MONGODB_URI from env:", process.env.MONGODB_URI);
dotenv.config();

import connectDB from "./db/db.js";

connectDB();




/*
import express from "express";
const app=express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })
    } catch(error) {
        console.error("ERROR: ", error);
        throw err;
    }
})();
*/