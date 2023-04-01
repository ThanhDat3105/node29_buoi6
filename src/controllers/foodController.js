const { Op } = require("sequelize");
const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const { successCode, failCode } = require("../config/response");
const model = initModels(sequelize);

const getLikeRes = async (req, res) => {
  // try {
  let data = await model.like_res.findAll({ include: ["re", "user"] });
  successCode(res, data, "Thành Công");
  // } catch (error) {
  //   failCode(res, "Lỗi BE");
  // }
};

const getRateResUser = async (req, res) => {
  try {
    let data = await model.rate_res.findAll({ include: ["re", "user"] });
    successCode(res, data, "Thành Công");
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const createLikeRes = async (req, res) => {
  try {
    const { user_id, res_id, date_like } = req.body;

    let modelUpdate = {
      user_id,
      res_id,
      date_like,
    };

    let data = await model.like_res.create(modelUpdate);
    successCode(res, data, "Thành Công");
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const createRateRes = async (req, res) => {
  try {
    const { user_id, res_id, amount, date_rate } = req.body;

    let modelUpdate = {
      user_id,
      res_id,
      amount,
      date_rate,
    };

    let data = await model.rate_res.create(modelUpdate);
    successCode(res, data, "Thành Công");
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const createOrder = async (req, res) => {
  try {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;

    let modelUpdate = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };

    let data = await model.order.create(modelUpdate);
    successCode(res, data, "Thành Công");
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const removeLike = async (req, res) => {
  try {
    let { user_id } = req.params;
    let { res_id } = req.params;

    await model.like_res.destroy({ where: { user_id, res_id } });
    successCode(res, "Thành Công");
  } catch (error) {
    res.status(500).send("Lỗi BE");
  }
};

module.exports = {
  getLikeRes,
  createLikeRes,
  createRateRes,
  removeLike,
  getRateResUser,
  createOrder,
};
