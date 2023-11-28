"use client";

import { Button } from "primereact/button";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const socials = [
    {
      id: 1,
      icon: "pi-facebook",
      link: "https://www.facebook.com/theprofactor",
    },
    {
      id: 2,
      icon: "pi-instagram",
      link: "https://www.instagram.com/theprofactor/",
    },
    {
      id: 3,
      icon: "pi-linkedin",
      link: "https://www.linkedin.com/company/the-pro-factor/",
    },
    {
      id: 4,
      icon: "pi-youtube",
      link: "https://www.youtube.com/theprofactor",
    },
  ];
  return (
    <footer id="footer" className={styles.megaFooter}>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          <img
            src="/assets/logo-2.png"
            alt="The Pro-Factor"
            className="hidden lg:flex w-1/4 mx-auto"
          />
          <img src="/assets/logo-2.png" className="lg:hidden mx-auto" />
        </div>
      </div>

      <h3 className="text-2xl text-center text-accent-color">
        Let's stay connected
      </h3>
      <div className="w-full flex items-center justify-center gap-3">
        {socials.map((s) => (
          <a key={s.id} href={s.link} target="_blank">
            <Button
              icon={`pi ${s.icon}`}
              rounded
              text
              size="large"
              severity="secondary"
            />
          </a>
        ))}
      </div>

      <p className="m-3 text-sm text-center font-light">
        &copy; {new Date().getFullYear()} by The ProFactor. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
