"use client"
import { useEffect, useState } from "react";
import { LOGIN_VIEW } from "@/interfaces/enums";
import Button from "@/components/Button";
import signUp from "@/services/auth/signUp";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IRegisterProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const Register = ({ setCurrentView }: IRegisterProps) => {
  const [userFirstName, setUserFirstName] = useState<string>("")
  const [userLastName, setUserLastName] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { status, message } = await signUp(userEmail, userPassword);
    
    if (status === 400 && message) {
      toast.error(message, { toastId: "fail" })
    }
    else {
      toast.success(message, { toastId: "register" })
      router.push("/")
    }
  };

  useEffect(() => {
    if (userFirstName && userLastName && userEmail && userPassword) {
      setIsSubmitDisabled(false)
    }
    else {
      setIsSubmitDisabled(true)
    }
  }, [userEmail, userPassword, userFirstName, userLastName])

  return (
    <div 
      id="register-pages" 
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800"
    >
      <div id="onboarding-card" className="bg-white p-2 md:p-4 rounded-lg shadow-lg shadow-black">
        <div 
          id="onboarding-form" 
          className="flex flex-col justify-center w-full text-center"
        >
          <h2 className="text-lg font-bold mb-2 md:mb-4">BECOME A MEMBER</h2>
          <p className="text-sm mb-4">Create your Member profile, and get access to an Jira Beta experience.</p>
          <form onSubmit={handleRegister}>
            <div className="mb-2 md:mb-4">
              <input
                id="first-name"
                type="text"
                name="first-name"
                placeholder="First Name"
                title="Enter your first name"
                value={userFirstName}
                onChange={(e) => setUserFirstName(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-2 md:mb-4">
              <input
                id="last-name"
                type="text"
                name="last-name"
                placeholder="Last Name"
                title="Enter your last name"
                value={userLastName}
                onChange={(e) => setUserLastName(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-2 md:mb-4">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                title="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-2 md:mb-4">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                title="Enter your password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <Button 
              name="Sign up" 
              isDisabled={isSubmitDisabled} 
              className="text-sm px-3 py-1 transition-colors duration-200 hover:bg-gray-700" 
            />
            <div className="mt-4">
              <button 
              onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)} 
              className="text-sm text-blue-500 hover:underline mb-2 mt-0"
              >
              I have account
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
