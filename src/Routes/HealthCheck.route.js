import { Router } from "express";

import { healthChecker } from "../controller/HealthChecker.js";

const router = Router();

router.route("/").get(healthChecker);

export default router;