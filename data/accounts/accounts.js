const express = require("express");

const db = require("../dbConfig.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accounts = await db.select("*").from("accounts");

    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await db("accounts").where("id", "=", id);

    res.status(200).json(account);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const account = await db("accounts").insert(body);

    res.status(201).json(account);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const account = await db("accounts")
      .where("id", "=", id)
      .update(body);

    res.status(200).json(account);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await db("accounts")
      .where("id", "=", id)
      .del();

    res.status(204).json(account);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
