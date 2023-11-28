"use client";

import { Card } from "primereact/card";
import styles from "./About.module.css";

const About: React.FC = () => {
  const aboutItems = [
    {
      id: 1,
      text: "A training partner venture to help you identify your strengths, map your career path and upskill to reach your goals",
      image: "./assets/about-1.png",
    },
    {
      id: 2,
      text: "The Pro-Factor helps in your holistic personal growth while fueling your professional finesse and presentation",
      image: "./assets/about-2.png",
    },
  ];

  return (
    <div
      id="about"
      className="py-8 px-10 min-1/2 flex flex-col items-center space-around"
    >
      <h1
        className={`${styles.primaryColorText} text-5xl text-center font-bold`}
      >
        Who Are We?
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        {aboutItems.map((a) => (
          <Card key={a.id} className="w-full">
            <div
              className={`${styles.primaryColorText} flex flex-col gap-5 w-full p-5`}
            >
              <img
                src={a.image}
                alt={a.text}
                className="w-2/3 md:w-1/3 h-auto rounded-full m-4 mx-auto"
              />
              <h1 className="text-2xl font-semibold text-center text-primary-color">
                {a.text}
              </h1>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
