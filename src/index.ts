import express from "express";

const app = express();

const port = process.env.PORT || 8989;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`The application is running on port http://localhost:${port}`);
});
