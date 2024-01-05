import * as bcrypt from "bcrypt";
import User from "../models/User";
import { IUser } from "../utils/types/user";
import { validateUserRegister, validateUserLogin } from "../utils/validation/authValidation";
import jwt from "jsonwebtoken";


export const register = async (body: IUser): Promise<any> => {
   const validationResult = validateUserRegister(body);

   if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message);
   }

   const existUser = await User.find({
      $or: [{ username: body.fullname }, { email: body.email }],
   });

   if (existUser.length > 0) {
      throw new Error("Username or email is already registered!");
   }

   body.password = await bcrypt.hashSync(body.password as string, 10);

   const newUser = new User(body);
   await newUser.save();

   return "User registered successfully!";
};

export const login = async (body: IUser): Promise<any> => {
   const validationResult = validateUserLogin(body);

   if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message);
   }

   console.log(body);
   const existUser = await User.findOne({
      fullname: body.fullname,
   });

   if (!existUser) {
      throw new Error("Username or email not found!");
   }

   const token = jwt.sign({existUser}, "helloworld", { expiresIn: "1d" });

   return token;
};