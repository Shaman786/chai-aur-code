import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //  get user details from frontend
  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);

  // validation - not empty

  // Check if user already exists: username, email

  //  check for images , check for avatar

  //  upload them to cloudianry, avatar

  //  create user object - create in db

  //  remove password and refresh token field from response

  //  return respone
});

export { registerUser };
