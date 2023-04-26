import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


//mongoose.connect("mongodb+srv://alura:123@alura.dkjed.mongodb.net/alura-node");

mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;