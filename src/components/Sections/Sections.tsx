"use client";

import { Card } from "primereact/card";
import styles from "./Sections.module.css";

const Sections: React.FC = () => {
  const items = [
    {
      id: 1,
      image: "./assets/1.png",
      text: "Elevate Your Team's Potential with Corporate Training partnered with experts",
    },
    {
      id: 2,
      image: "./assets/3.png",
      text: "Explore a range of training programs designed to empower your workforce with the skills needed to thrive in a competitive business landscape",
    },
    {
      id: 3,
      image: "./assets/2.png",
      text: "Unleashing Innovtion for Tomorrow's Challenges",
    },
  ];

  return (
    <div
      id="sections"
      className="py-8 px-10 min-1/2 flex flex-col items-center space-around"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
        {items.map((i) => (
          <Card key={i.id} className="w-full">
            <div className="flex flex-col gap-5 w-full">
              <img src={i.image} className="w-full h-auto" />
              <h1
                className={`${styles.sectionText} text-2xl font-semibold text-center`}
              >
                {i.text}
              </h1>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sections;
