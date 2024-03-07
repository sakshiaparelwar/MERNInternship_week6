const express = require("express");
const {
  createData,
  showData,
  deleteData,
  updateData,
} = require("../controllers/foodController");
const router = express.Router();

router.route("/create-fooddata").post(createData);

router.route("/").get(showData);

router.route("/update-fooddata/:id").put(updateData);

router.route("/delete-fooditem/:id").delete(deleteData);

module.exports = router;
