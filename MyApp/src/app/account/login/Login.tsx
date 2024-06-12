"use client"
import { useEffect, useState } from "react";
import { LOGIN_VIEW } from "@/interfaces/enums";
import Button from "@/components/Button";
import signIn from "../../../services/auth/signIn";
import { useDataContext } from "@/context/data.context";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


interface ILoginProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const Login = ({ setCurrentView }: ILoginProps) => {
  const { setUser } = useDataContext();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { response, status, message } = await signIn(userEmail, userPassword);

    if (status === 400 && message) {
      toast.error(message, { toastId: "fail" });
    } else {
      setUser(response!);
      toast.success(message, { toastId: "success" });
      router.push("/");
    }
  };


  
  useEffect(() => {
    setIsSubmitDisabled(!(userEmail && userPassword));
  }, [userEmail, userPassword]);

  return (
    <div 
      id="login-pages" 
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800"
    >
      <div id="onboarding-card" className="bg-white p-8 rounded-lg shadow-lg shadow-black">
        <div 
          id="onboarding-form" 
          className="flex flex-col justify-center w-full text-center"
        >
          <h2 className="text-lg font-bold mb-4">WELCOME BACK</h2>
          <p className="text-sm mb-6">Log in to access an enhanced Jira Beta experience.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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
            <div className="mb-4">
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
              name="Sign in" 
              isDisabled={isSubmitDisabled} 
              className="text-sm px-4 py-2 transition-colors duration-200 hover:bg-gray-700" 
            />
          </form>
          <div className="mt-4">
            <button 
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)} 
              className="text-sm text-blue-500 hover:underline"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
