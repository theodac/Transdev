const User = require("../models/user.model");

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "User not found",
      });
    }

    const isMatch = await user.compareEncryptedPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Invalid credentials",
      });
    }

    // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES_IN,
    // });

    return res.status(200).json({
      success: true,
      token: "test",
    });
  },
};
