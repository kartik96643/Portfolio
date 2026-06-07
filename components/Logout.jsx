"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const data = await res.json();
    console.log(data)
    if (data.success) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}