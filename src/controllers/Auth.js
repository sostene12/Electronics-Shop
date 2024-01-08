import User from "../model/User";
import Supplier from "../model/Supplier";
import CryptoJS from "crypto-js";
import { sign } from "../helpers/jwt";
import jwt from "jsonwebtoken";
import mailer from "../helpers/emails";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

class AuthController {
  static async signup(req, res) {
    try {
      const newUser = await new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString(),
        // age:req.body.age,
        // gender:req.body.gender,
        role: req.body.role,
        emailToken: crypto.randomBytes(16).toString("hex"),
      });

      const user = await newUser.save();
      await mailer(
        { email: newUser.email, emailToken: newUser.emailToken },
        "CreateUser"
      );
      res.status(201).json(user);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.username });
      if (!user) {
        return res.status(404).json({ error: "Wrong Credentials" });
      }
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET_KEY
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (originalPassword !== req.body.password) {
        return res.status(401).json({ error: "Wrong Credentials" });
      }
      const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SCRETE_KEY,
        { expiresIn: "24h" }
      );

      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, accessToken });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async emailVerification(req, res) {
    const token = req.params.token;
    try {
      const user = await User.findOne({ emailToken: token });
      if (user) {
        user.emailToken = null;
        user.isVerified = true;
        await user.save();
        return res
          .status(200)
          .json({ message: "account verified succcessfullyS" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async allUsers(req, res) {
    try {
      const users = await User.find();
      console.log(users);
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  static async approveSupplier(req, res) {
    const id = req.params.id;
    try {
    } catch (error) {}
  }
}

export default AuthController;
