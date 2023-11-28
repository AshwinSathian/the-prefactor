"use client";

import { Button } from "primereact/button";

const Offerings: React.FC = () => {
  const offeringItems = [
    {
      id: 1,
      title: "Team Up for Triumph",
      description:
        "Dive into our courses designed for brands, institutes, or organizations at 3 rad proficiency levels. Tailored to your needs, we conduct a thorough training needs analysis, crafting a curriculum to fit your budget and timelines. Our top-tier trainers deliver best-in-class Executive coaching as well as Outbound learning experiences.",
      image: "./assets/offering-new-1.jpeg",
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
      title: "Boss Mode Activated",
      description:
        "Tailored coaching to match your needs, featuring industry-best content & top-notch coaches. Our focused approach extends beyond certification—join our vibrant learner community for ongoing support. Elevate your learning experience with us!",
      image: "./assets/offering-new-2.jpeg",
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
      title: "Coaching Wizards 101",
      description:
        "Attention all Trainers & Coaches in making! Our certification course offers 3 proficiency levels, personalized based on your skills. Top performers get a shot at joining The Pro-Factor as a training consultant. Ready to elevate your game? 🚀",
      image: "./assets/offering-new-3.jpeg",
    },
  ];

  const moreOfferings = [
    {
      id: 1,
      title: "Brand's Value Training",
      description:
        "Elevate your onboarding experience! Our brand value training isn't just a session; it's a journey into the heart of your brand's essence.",
      image: "./assets/more-offering-1.jpeg",
    },
    {
      id: 2,
      title: "POSH & Other Compliance",
      description:
        "Uplift Your Workplace with Our POSH and Beyond Training! Our POSH & other compliance training isn't your run-of-the-mill session—it's a guided journey into a workplace where rules are not just followed but adopted.",
      image: "./assets/more-offering-2.jpeg",
    },
    {
      id: 3,
      title: "Curriculum & Content Design",
      description:
        "We engineer transformative learning experiences. Our services go beyond content creation; we sculpt curriculums that resonate with your organizational goals.   Let's co-create a training ecosystem that fosters a culture of continuous growth. 🌐📚 ",
      image: "./assets/more-offering-3.jpeg",
    },
    {
      id: 4,
      title: "Life Coaching",
      description:
        "Embark on a path to personal growth with our seasoned life coaches and mental health experts. Let's navigate challenges, nurture resilience, and sculpt a life that truly resonates with your aspirations. Because your journey deserves nothing but the best support! 🌱💙",
      image: "./assets/more-offering-4.jpeg",
    },
    {
      id: 5,
      title: "Career Counselling",
      description:
        "Navigate Your Career Odyssey with Us: Expert Career Counseling customized just for you! Discover clarity, unlock potential, and sail smoothly toward your professional dreams. Let's embark on this journey together! ",
      image: "./assets/more-offering-5.jpeg",
    },
    {
      id: 6,
      title: "Employee Engagement",
      description:
        "Dive into Our Fun-Fueled Employee Engagement Activities! We're not just planners; we're architects of joy at work, where engagement isn't a task but a thrilling adventure. Let's infuse your workplace with laughter, camaraderie, & a sprinkle of fun—because work should not be just a desk! 🎉💼",
      image: "./assets/more-offering-6.jpeg",
    },
  ];

  return (
    <section id="offerings" className="pt-4 pb-10">
      <div className="bg-primary-color text-white py-6">
        <div className="w-full md:w-4/5 mx-auto">
          <h1 className="text-5xl text-center font-bold text-white bg-primary-color">
            What We Offer
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 text-white bg-primary-color">
            {offeringItems.map((o) => {
              return (
                <div key={o.id} className="text-center">
                  <div className="flex flex-col gap-5 w-full p-5">
                    <img
                      src={o.image}
                      alt={o.title}
                      className="w-9/10 md:w-2/3 h-auto rounded-full m-4 mx-auto"
                    />
                    <h1 className="text-2xl font-semibold text-center">
                      {o.title}
                    </h1>
                    <p className="text-lg">{o.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-screen my-10 py-2 flex items-center justify-center">
        <a href="/assets/New_Brochure_TPF.pdf" download="New_Brochure_TPF.pdf">
          <Button
            label="Download out Brochure"
            size="large"
            className="hidden lg:flex min-w-fit"
            rounded
          />
          <Button
            label="Download out Brochure"
            className="lg:hidden min-w-fit"
            rounded
          />
        </a>
      </div>

      <div className="w-full md:w-4/5 mx-auto text-primary-color">
        <h1 className="text-primary-color text-4xl text-center font-bold mt-5">
          There's Even More!
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {moreOfferings.map((o) => {
            return (
              <div key={o.id} className="text-center">
                <div className="text-primary-color flex flex-col gap-2 w-full p-5">
                  <h1 className="text-xl text-center">{o.title}</h1>
                  <img
                    src={o.image}
                    alt={o.title}
                    className="w-9/10 lg:w-2/3 h-auto m-4 mx-auto"
                  />
                  <p>{o.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-screen my-8 py-2 flex items-center justify-center">
        <a href="/assets/New_Brochure_TPF.pdf" download="New_Brochure_TPF.pdf">
          <Button
            label="Download out Brochure"
            size="large"
            className="hidden lg:flex min-w-fit"
            rounded
          />
          <Button
            label="Download out Brochure"
            className="lg:hidden min-w-fit"
            rounded
          />
        </a>
      </div>
    </section>
  );
};

export default Offerings;
