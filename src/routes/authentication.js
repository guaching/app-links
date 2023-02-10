import { Router } from "express";

const router = Router();

const authentication = router.get("/", (req, res) => {
  res.send("inicial");
});

module.exports = router;
