const express = require("express");
const rootRouter = require("./src/routes/rootRoute");
const cors = require("cors")

const app = express();
app.use(express.json()); // cho phép BE req.body đọc được mã json

// tạo sever
app.listen(8080);

app.use("/api", rootRouter);
