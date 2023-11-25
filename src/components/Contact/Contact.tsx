"use client";

import { Card } from "primereact/card";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
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
        <div>
          <Card className="w-full">
            <div
              className={`${styles.primaryColorText} flex flex-col items-center gap-3`}
            >
              <i className="pi pi-envelope" style={{ fontSize: "3rem" }}></i>
              <div className="flex flex-col text-center">
                <div className="font-semibold">Email</div>
                <a href="mailto:connect.theprofactor@gmail.com">
                  <div className="font-normal">
                    connect.theprofactor@gmail.com
                  </div>
                </a>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-full">
            <div
              className={`${styles.primaryColorText} flex flex-col items-center gap-3`}
            >
              <i className="pi pi-phone" style={{ fontSize: "3rem" }}></i>
              <div className="flex flex-col text-center">
                <div className="font-semibold">Email</div>
                <a href="">
                  <div className="font-normal">+91 99123 43212</div>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
