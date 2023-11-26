"use client";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import styles from "./Offerings.module.css";

const Offerings: React.FC = () => {
  const [offerDetail, setOfferDetail] = useState<any>(null);
  const [detailVisisble, setDetailVisisble] = useState(false);

  const learnMore = (id: number) => {
    const item: any = offeringItems.find((o) => o.id === id);
    setOfferDetail(item);
    setDetailVisisble(true);
  };

  const footerContent = (
    <div>
      <Button
        label="Close"
        icon="pi pi-times"
        onClick={() => setDetailVisisble(false)}
        className="p-button-text"
        severity="danger"
      />
      <Button
        label="Download Brochure"
        icon="pi pi-download"
        //   onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  const offeringItems = [
    {
      id: 1,
      title: "INSTITUTIONS AND ORGANIZATIONS",
      description:
        "TG: Schools/ Colleges / Offices • Includes 3 courses for 3 different levels of proficiency based on personality, 1Q & EQ test • Includes short term services like brand value training, POSH, Employee engagement sessions etc",
      image: "./assets/offering-1.png",
      points: [
        {
          title: "Campus to Corporate",
          details:
            "TG : Schools (+2) | Colleges | Freshers Modules : 5 | 10 | 10 + 1 | Duration : TBD",
        },
        {
          title: "The Corporate Code",
          details:
            "TG : Junior/Mid Level Managers || Senior Execs || Leads Modules: 4 | 4 | 4 + 1 Duration : TBD",
        },
        {
          title: "People Management",
          details:
            "Modules : Employee Engagement | HR sessions | Workshops | Retreats | Extra curricular Duration : TBD",
        },
      ],
    },
    {
      id: 2,
      title: "BECOME A COACH",
      description:
        "TG: Trainers/ Coaches interested to get certified • 3 proficiency levels based on individual assessments • Chance to be a part of The Pro Factor as a training consultant",
      image: "./assets/offering-2.png",
      points: [
        {
          title: "Level 1",
          details:
            "Modules: 5 | Topics: Comms. Skills: ALP basics, Coaching Skills, Presentation & Public Speaking Skills, Assessments | Duration : TBD",
        },
        {
          title: "Level 2",
          details:
            "Modules: 4 | Topics: ALP Advanced, Feedback & Coaching, Strategizing & Curating content, Proactiveness | Duration : TBD",
        },
        {
          title: "Level 3",
          details:
            "Modules: 6 | Topics: Comms. Skills Advanced, Leadership Skills, Change Mindset, Organizational Skills, Teacher vs Trainer, Coach vs Educator, Case Studies | Duration : TBD",
        },
      ],
    },
    {
      id: 3,
      title: "PERSONAL COACHING",
      description:
        "Specialised Coaching depending on the learner's ask and demand • Industry competent prices and course content • Long term association and potential collaboration",
      image: "./assets/offering-3.png",
    },
  ];
  return (
    <div id="offerings" className="py-8">
      <h1
        className={`${styles.primaryColorText} text-5xl text-center font-bold`}
      >
        What We Offer
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
        {offeringItems.map((o) => {
          return (
            <div key={o.id} className="p-8 text-center">
              <Card>
                <div
                  className={`${styles.primaryColorText} flex flex-col gap-5 w-full p-5`}
                >
                  <img
                    src={o.image}
                    className="w-2/3 h-auto rounded-full m-4 mx-auto"
                  />
                  <h1 className="text-2xl font-semibold text-center">
                    {o.title}
                  </h1>
                  <Button
                    label="Learn More"
                    className="w-full"
                    onClick={() => learnMore(o.id)}
                  />
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <Dialog
        header={offerDetail?.title}
        visible={detailVisisble}
        className="w-screen md:w-1/2"
        footer={footerContent}
        onHide={() => setDetailVisisble(false)}
      >
        <p className="text-lg m-3">{offerDetail?.description}</p>
        {offerDetail?.points?.map((point: any) => (
          <div className="w-full my-3">
            <h1 className="text-xl font-semibold">{point.title}</h1>
            <p className="font-normal">{point.details}</p>
          </div>
        )) || (
          <p className="font-normal">
            For more information, refer our brochure
          </p>
        )}
      </Dialog>
    </div>
  );
};

export default Offerings;
