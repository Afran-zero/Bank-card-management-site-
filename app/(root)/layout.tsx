import { Sidebar } from "lucide-react";
import type { Metadata } from "next";
import { Inter ,IBM_Plex_Serif} from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
     const loggedIn = { firstName : "John", lastName: "Doe" };
  return (
  <main className="flex h-screen w-full font-inter">
     <Sidebar />
     {children}
  </main>
  );
}
