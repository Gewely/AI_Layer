"use client";

import { useState } from "react";

export default function SignUpPage() {
  const [status, setStatus] = useState("");
  return (
    <form
      className="card max-w-md m-10 space-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const res = await fetch("/api/auth/register", { method: "POST", body: JSON.stringify(Object.fromEntries(fd)), headers: { "content-type": "application/json" } });
        setStatus(res.ok ? "Account created" : "Failed");
      }}
    >
      <input name="name" className="w-full border p-2" placeholder="Name" />
      <input name="email" className="w-full border p-2" placeholder="Email" />
      <input name="password" type="password" className="w-full border p-2" placeholder="Password" />
      <input name="workspaceName" className="w-full border p-2" placeholder="Workspace name" />
      <button className="rounded bg-black text-white px-3 py-2">Create workspace</button>
      <p>{status}</p>
    </form>
  );
}
