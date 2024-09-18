const { userModel } = require("../model");

const handleUserDelete = async (req, res) => {
  const { id } = req.query;

  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (deletedUser) {
      res
        .status(200)
        .json({ Message: "User Deleted Successfully", deletedUser });
    }
  } catch (error) {
    res.status(500).json({ Message: "Error while deleting user" }, error);
  }
};

module.exports = { handleUserDelete };
