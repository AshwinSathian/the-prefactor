"use client";

import { Card } from "primereact/card";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const contactItems = [
    {
      id: 1,
      name: "Email",
      icon: "pi-envelope",
      link: "mailto:connect.theprofactor@gmail.com",
      value: "connect.theprofactor@gmail.com",
    },
    {
      id: 2,
      name: "Phone",
      icon: "pi-phone",
      link: "tel:+919433115533",
      value: "+91 9433115533",
    },
  ];
  return (
    <div
      id="contact"
      className="py-8 min-h-1/3 flex flex-col items-center space-around"
    >
      <h1
        className={`${styles.primaryColorText} text-5xl text-center font-bold`}
      >
        Get in Touch
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {contactItems.map((c) => (
          <div key={c.id}>
            <Card className="w-full">
              <div
                className={`${styles.primaryColorText} flex flex-col items-center gap-3`}
              >
                <i className={`pi ${c.icon}`} style={{ fontSize: "3rem" }}></i>
                <div className="flex flex-col text-center">
                  <div className="font-semibold">{c.name}</div>
                  <a href={c.link} target="_blank">
                    <div className="font-normal">{c.value}</div>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
