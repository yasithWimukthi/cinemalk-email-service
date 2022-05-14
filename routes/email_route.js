import express from "express";
import email from "../controllers/email_controller.js";
import validator from "../validation/email_validation.js"
import schema from "../validation/email_schema.js";
const router = express.Router();

router.post("/email",validator(schema), email);


export default router;
