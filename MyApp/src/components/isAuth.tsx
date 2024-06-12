"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useDataContext } from "@/context/data.context";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { user } = useDataContext()


    useEffect(() => {
      if (!user) {
        toast.error("You need to be logged in to access this functionality.");
        return redirect("/");
      }
    }, [user]);


    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}