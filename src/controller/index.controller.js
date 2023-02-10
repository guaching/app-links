import { Router } from "express";
import { pool } from "../db.js";
const router = Router();


export const index = (req, res) => {
    res.send("inicial");
}

export const ping = async (req, res, next) => {
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
}