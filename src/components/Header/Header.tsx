"use client";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const items = [
    {
      label: "What We Offer",
      id: "#offerings",
    },
    {
      label: "Who Are We?",
      id: "#about",
    },
    {
      label: "Contact Us",
      id: "#contact",
    },
  ];

  return (
    <>
      <header
        className={`${styles.header} w-full flex items-center justify-between p-2 px-5`}
      >
        <div className="text-2xl font-semibold">The ProFactor</div>
        <div className="hidden lg:flex items-center gap-4">
          {items.map((item) => (
            <a key={item.label} href={item.id}>
              <Button label={item.label} severity="secondary" text />
            </a>
          ))}
        </div>
        <Button
          icon="pi pi-bars"
          onClick={toggleSidebar}
          className="lg:hidden text-md"
        />
      </header>

      <Sidebar visible={showSidebar} position="right" onHide={toggleSidebar}>
        <div className="w-full flex flex-col gap-3">
          {items.map((item) => (
            <a key={item.label} href={item.id} onClick={toggleSidebar}>
              <Button label={item.label} severity="secondary" text />
            </a>
          ))}
        </div>
      </Sidebar>
    </>
  );
};

export default Header;
