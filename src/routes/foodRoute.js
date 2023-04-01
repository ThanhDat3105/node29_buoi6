const express = require("express");
const {
  createLikeRes,
  // updateLikeRes,
  removeLike,
  getLikeRes,
  createRateRes,
  getRateResUser,
  createOrder,
} = require("../controllers/foodController");
const foodRouter = express.Router();

foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser", getRateResUser);
foodRouter.post("/create-likeRes", createLikeRes);
foodRouter.post("/create-rateRes", createRateRes);
foodRouter.post("/create-order", createOrder);
foodRouter.delete("/remove-like/:user_id/:res_id", removeLike);

module.exports = foodRouter;
