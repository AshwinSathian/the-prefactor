"use client";

import { Card } from "primereact/card";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const contactItems = [
    {
      id: 1,
      name: "Drop us a Line",
      icon: "pi-envelope",
      link: "mailto:connect.theprofactor@gmail.com",
      value: "connect.theprofactor@gmail.com",
    },
    {
      id: 2,
      name: "Message us on WhatsApp",
      icon: "pi-whatsapp",
      link: "https://wa.me/919433115533",
      value: "+91 9433115533",
    },
    {
      id: 3,
      name: "Give us a Call",
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
      <h1 className="text-primary-color text-5xl text-center font-bold">
        Get in Touch
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
        {contactItems.map((c) => (
          <div key={c.id} className="px-2">
            <a href={c.link} target="_blank">
              <Card className="bg-primary-color text-accent-color m-3">
                <div className="flex items-center justify-center gap-4 text-center">
                  <i
                    className={`pi ${c.icon}`}
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                  <div className="text-xl font-normal">{c.name}</div>
                </div>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
