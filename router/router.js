import express from "express";
import { slackConnection,discordMessages } from "../route/route.js";
const router = express.Router()

router.post("/slackmessage" , slackConnection)
router.post("/discordMessage" , discordMessages)

export default router