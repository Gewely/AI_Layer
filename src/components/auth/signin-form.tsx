"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="card max-w-md space-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
      }}
    >
      <input className="w-full border p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full border p-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="rounded bg-black text-white px-3 py-2">Sign in</button>
    </form>
  );
}
