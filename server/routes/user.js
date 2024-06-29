const express = require("express");
const pool = require("../db");
const app = express();
const router = express.Router();
const { authenticate } = require("../seed");
const { createUserAndGenerateToken } = require("../seed");
app.use(express.json());

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    const users = result.rows;
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const userID = req.params.id;

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [
      userID,
    ]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error("Error fetching user by id", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    res.send(await authenticate(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res) => {
  const { name, lastname, email, password } = req.body;

  if (!name || !lastname || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  try {
   const{token , user} = await createUserAndGenerateToken(req.body);
    res
      .status(201)
      .json({ message: "User registered successfully", user, token });
  } catch (err) {
    console.error("Error registering user", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
