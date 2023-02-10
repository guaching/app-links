import { Router } from "express";
import { add } from "../controller/links.controller";

const router = Router();

router.get("/add", add);

module.exports = router;
