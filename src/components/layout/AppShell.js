"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
