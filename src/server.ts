import dotenv from "dotenv";

dotenv.config();

import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    hello: "world",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
