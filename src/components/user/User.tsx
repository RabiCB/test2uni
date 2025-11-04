"use client"

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  console.log(user)

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return;

    fetch("http://localhost:5000/api/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Failed to fetch user:", err));
  }, []);

  if (!user) return <p>Loading user info...</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>City: {user.city}</p>
      <p>Country: {user.country}</p>
    </div>
  );
}
