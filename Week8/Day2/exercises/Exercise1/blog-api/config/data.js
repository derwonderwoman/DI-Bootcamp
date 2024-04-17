import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();

const connection_string = process.env.CONNECTION_STRING;

export const db = postgres(connection_string);