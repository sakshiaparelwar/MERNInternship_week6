const foodSchema = require("../models/foodSchema");

//create data
exports.createData = async (req, res) => {
  try {
    const data = await foodSchema.create(req.body);
    //   console.log(data);

    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "INternal Server error" });
  }
};

//get data
exports.showData = async (req, res) => {
  try {
    const alldata = await foodSchema.find({});
    // console.log(alldata);

    res.status(201).send(alldata);
  } catch (error) {
    console.log(error);
  }
};

// //update data
exports.updateData = async (req, res) => {
  try {
    const id = req.params.id;
    let updateData = await foodSchema.findById(id);

    if (!updateData) {
      return res.status(404).json({
        message: "Food DAta not found",
      });
    }
    const updatedData = await foodSchema.findByIdAndUpdate(id, {
      $set: req.body,
      new: true,
      runValidators: true,
    });
    // console.log(updateData);
    res.status(201).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete data
exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedata = await foodSchema.findByIdAndDelete(id);
    // console.log(deletedata);
    res.status(201).send(deletedata);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
