import { Router } from "express";
import { add, form } from "../controller/links.controller";

const router = Router();

router.get("/add", form);
router.post("/add", add);
module.exports = router;
