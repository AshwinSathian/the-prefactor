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
        className={`${styles.header} w-full hidden lg:flex items-center justify-between p-2 px-5`}
      >
        <img
          src="/assets/logo-1.png"
          alt="The Pro-Factor"
          className="hidden lg:flex w-60"
        />
        <div className="hidden lg:flex items-center gap-4">
          <nav>
            {items.map((item) => (
              <a key={item.label} href={item.id}>
                <Button label={item.label} severity="secondary" text />
              </a>
            ))}
          </nav>
        </div>
      </header>
      <header
        className={`${styles.header} w-full lg:hidden flex items-center justify-center p-2 px-5 min-h-1/2`}
      >
        <Button icon="pi pi-bars" onClick={toggleSidebar} className="text-md" />
      </header>

      <Sidebar
        visible={showSidebar}
        position="top"
        onHide={toggleSidebar}
        style={{ minHeight: "50vh" }}
        showCloseIcon={false}
        className="bg-primary-color"
      >
        <div className="flex flex-col gap-3 h-full text-center">
          <img
            src="/assets/logo-1.png"
            alt="The Pro-Factor"
            className="w-9/10 mx-auto lg:hidden"
          />
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
