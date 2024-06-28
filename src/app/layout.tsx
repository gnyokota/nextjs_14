import React, { ReactNode } from "react";

import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "NextJS 14 o'rilley",
  description: "NextJS course from o'rilley",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
};

export default Layout;
