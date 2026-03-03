const redisClient = require("../cache/redisClient");
const express = require("express");
const router = express.Router();

const flags = require("../flags/flagsStore");

// GET /flags/:name?env=prod
router.get("/:name", (req, res) => {
  const flagName = req.params.name;
  const env = req.query.env;

  const flag = flags.find(
    f => f.name === flagName && f.environment === env
  );

  if (!flag) {
    return res.status(404).json({ error: "Flag not found" });
  }

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

