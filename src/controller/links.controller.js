import { Router } from "express";
import { pool } from "../db.js";
const router = Router();

export const form = (req, res) => {
  res.render("links/add");
};

export const add = (req, res) => {
  res.send("RECIBIDO");
};
