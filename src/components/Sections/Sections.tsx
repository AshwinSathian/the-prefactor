"use client";

import { Card } from "primereact/card";

const Sections: React.FC = () => {
  const items = [
    {
      id: 1,
      image: "./assets/section-new-1.jpeg",
      title: "Hey there!",
      text: "Welcome to The Pro-Factor—your go-to creative coaching buddy! 🚀 We're not your average coaching gig; we're the team that spices up your professional journey, whether you're a big-shot company or a lone wolf carving your path. ",
    },
    {
      id: 2,
      image: "./assets/section-new-2.jpeg",
      title: "What's our Deal? 🤔",
      text: "We're in the business of making magic happen. Picture this: Companies, big and small, partnering with us to sprinkle a bit of that Pro-Factor charm on their teams. We're not just coaches; we're the creative force that fuels your brand's success. ",
    },
    {
      id: 3,
      image: "./assets/section-new-3.jpeg",
      title: "Why Us? Because we're not boring! 🌈",
      text: "Expect a sprinkle of creativity, a dash of fun, and a whole lot of growth. We're not your typical coaching crew; we're The Pro-Factor, and we're here to turn ordinary into extraordinary, one coaching session at a time. Ready to dial up your awesomeness? Let's do this! 🚀 ",
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
            <div className="text-primary-color flex flex-col gap-5 w-full text-center">
              <img src={i.image} alt={i.text} className="w-full h-auto" />
              <h1 className="text-2xl font-semibold text-center">{i.title}</h1>
              <p className="text-xl">{i.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sections;
