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
  ];
  return (
    <section
      id="contact"
      className="py-10 flex flex-col items-center space-around w-full md:w-4/5 mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="py-20">
          <h1
            className={`${styles.titleText} text-primary-color text-5xl text-center font-bold`}
          >
            Get in Touch
          </h1>
          <h2 className="text-primary-color text-2xl text-center font-semibold">
            We love our customers!
          </h2>
          <p className="text-primary-color text-md text-center font-normal">
            Let's stay connected!
          </p>

          <div className="flex flex-col items-center space-around gap-3 my-3">
            {contactItems.map((c) => (
              <div key={c.id} className="px-2 w-full">
                <a href={c.link} target="_blank">
                  <Card className="bg-primary-color text-white">
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

        <div className="lg:order-last p-4">
          <img
            src="./assets/contact.jpeg"
            alt="Get In Touch with The Pro-Factor"
            className="w-9/10 h-auto hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
