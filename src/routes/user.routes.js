import { Router } from "express";
import userControllers from ".../controller/user.controllers.js";
import {validate} from ".../middlewares/validation.middlewares.js";
import {userSchemas} from ".../schemas/user.schema.js"

const router = Router();

router.post("/user", validate(userSchemas), userControllers.createUserController);

export default router;
