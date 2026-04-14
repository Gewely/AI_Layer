import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  ["Dashboard", "/dashboard"],
  ["Websites", "/websites"],
  ["Journeys", "/journeys"],
  ["Pages", "/pages"],
  ["Components", "/components"],
  ["Friction", "/friction"],
  ["Recommendations", "/recommendations"],
  ["Jira", "/jira"],
  ["Figma", "/figma"],
  ["Jobs", "/jobs"],
  ["SDK", "/sdks"]
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen grid grid-cols-[220px_1fr]">
          <aside className="border-r bg-white p-4 space-y-2">
            <h1 className="text-lg font-semibold">JourneyOps AI</h1>
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block text-sm text-slate-700 hover:text-black">
                {label}
              </Link>
            ))}
          </aside>
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
