"use client";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const items = [
    {
      label: "Who Are We?",
      id: "#about",
    },
    {
      label: "What We Offer",
      id: "#offerings",
    },
    {
      label: "Contact Us",
      id: "#contact",
    },
  ];

  return (
    <>
      <header className="w-full flex items-center justify-around p-2 px-5 bg-primary-color">
        <nav className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            {items.map((item) => (
              <a key={item.label} href={item.id}>
                <Button label={item.label} severity="secondary" text />
              </a>
            ))}
          </div>
          <Button
            icon="pi pi-bars"
            onClick={toggleSidebar}
            className="text-md flex lg:hidden"
          />
        </nav>
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
