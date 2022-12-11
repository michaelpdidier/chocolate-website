import React from "react";

import Hero from "../components/Hero";
import Step from "../components/Step";
import Footer from "../components/Footer";
import stepsData from "../data/stepsData";

const Process = () => {
  /* This generates a map of component objects with the data stored in chocolateBarData
        already passed into them. It's basically a map of <Card /> components 
    */

  const steps = stepsData.map((step) => {
    return <Step key={step.id} {...step} />;
  });

  return (
    <main>
      <Hero />
      <section className="steps--list">{steps}</section>
      <section className="callout">
        <div className="callout--description">
          <p>We love chocolate. And, we love you!</p>
          <p>So we thought you'd make a great team. </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Process;
