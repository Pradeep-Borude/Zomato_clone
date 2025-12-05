// src/middleware/PublicOnlyRoute.jsx
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PublicOnlyRoute({ children }) {
  const [status, setStatus] = useState("checking"); // 'checking' | 'guest' | 'auth'
  const [redirectTo, setRedirectTo] = useState("/");

 useEffect(() => {
  const check = async () => {
    const [partnerRes, userRes] = await Promise.allSettled([
      axios.get("http://localhost:3000/api/auth/food-partner/me", {
        withCredentials: true,
        validateStatus: () => true, 
      }),
      axios.get("http://localhost:3000/api/auth/user/me", {
        withCredentials: true,
        validateStatus: () => true, 
      })
    ]);

    //if Food partner is true
    if (partnerRes.status === "fulfilled" && partnerRes.value.data?.success) {
      setRedirectTo("/food-partner/dashboard");
      setStatus("auth");
      return;
    }

    //if User is true
    if (userRes.status === "fulfilled" && userRes.value.data?.success) {
      setRedirectTo("/user");
      setStatus("auth");
      return;
    }

    setStatus("guest");
  };

  check();
}, []);


  if (status === "checking") return null;

  if (status === "auth") {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
