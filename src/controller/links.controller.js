import { Router } from "express";
import { pool } from "../db.js";
const router = Router();

export const add = (req, res) => {
  res.render("links/add");
};
