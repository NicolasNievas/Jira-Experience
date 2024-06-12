import firebase from "../firebase";
import { User, getAuth, signOut } from "firebase/auth";

import { AuthResponse } from "@/interfaces/data";
import { RESPONSE_STATUS } from "@/interfaces/enums";

import ErrorHandler from "@/helper/errorHandler.helper";

const auth = getAuth(firebase.app);

const logOut = async (): Promise<AuthResponse<User>> => {
    try {
      await signOut(auth)
      return { status: RESPONSE_STATUS.OK, message: "Sign out successfully" }
    } catch (error: any) {
      const errorMessage  = error.message
      const errorCode = error.code;

      const message = ErrorHandler(errorCode, errorMessage)
      return { message , status: RESPONSE_STATUS.BAD_REQUEST }
    }
}

export default logOut