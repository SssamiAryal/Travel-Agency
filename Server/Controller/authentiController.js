const { User } = require("../model/userSchema");

const login = async (req, res) => {
  try {
    //fetching all the data from users table
    if (req.body.email == null) {
      return res.status(500).send({ message: "email is required" });
    }
    if (req.body.password == null) {
      return res.status(500).send({ message: "passowrd is required" });
    }
    const user = await User.findOne({ wheree: { email: req.body.email } });
    if (!user) {
      return res.status(500).send({ message: "user not found" });
    }
    if (user.password == req.body.password) {
      return res.status(200).send({
        data: { access_token: token },
        message: "sucessfully logged in",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to login" });
  }
};
