import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import firebase from "../firebase";

import { AuthResponse } from "@/interfaces/data";
import { RESPONSE_STATUS } from "@/interfaces/enums";

import ErrorHandler from "@/helper/errorHandler.helper";

const auth = getAuth(firebase.app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async (): Promise<AuthResponse<User>> => {
  try {
    const { user } = await signInWithPopup(auth, provider)
    return { response: user, status: RESPONSE_STATUS.CREATED, message: "Sign in successfully" }
  } catch (error: any) {
    const errorMessage  = error.message
    const errorCode = error.code;

    const message = ErrorHandler(errorCode, errorMessage)

    return { message , status: RESPONSE_STATUS.BAD_REQUEST }
  }
}

export default signInWithGoogle