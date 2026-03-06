const flags = require("../flags/flagsStore");
const redisClient = require("../cache/redisClient");

const express = require("express");
const router = express.Router();

// GET /flags/:name?env=prod
router.get("/:name", async (req, res) => {
  const flagName = req.params.name;
  const env = req.query.env;

  const cacheKey = `${flagName}:${env}`;

  // 1️ Check Redis first
  const cached = await redisClient.get(cacheKey);

  if (cached !== null) {
    return res.json({ enabled: cached === "true" });
  }

  // 2️ If not in Redis, check our store
  const flag = flags.find(
    f => f.name === flagName && f.environment === env
  );

  if (!flag) {
    return res.status(404).json({ error: "Flag not found" });
  }

  // 3️ Save result to Redis
  await redisClient.set(cacheKey, flag.enabled.toString());

  // 4️ Send response
  res.json({ enabled: flag.enabled });
});

router.post("/", (req, res) => {
  const { name, environment, enabled } = req.body;

  if (!name || !environment || enabled === undefined) {
    return res.status(400).json({ error: "Invalid flag data" });
  }

  flags.push({ name, environment, enabled });

  res.status(201).json({ message: "Flag created" });
});

module.exports = router;
