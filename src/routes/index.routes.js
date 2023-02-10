import { Router } from "express";
import { index, ping } from "../controller/index.controller.js";


const router = Router();

router.get("/", index);
router.get( '/ping', ping);


module.exports = router;
