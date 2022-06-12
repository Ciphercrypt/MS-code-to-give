import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";

import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import Endata from "languages/en.js";
import Hndata from "languages/hn.js";

import DialogEn from "screens/chatbot/dialogflow/DialogEn";
import Dialoghn from "screens/chatbot/dialogflow/Dialoghn";
import NewHeader from "components/hero/Onlyheader";
import Styles from "styles/dialogStyle.css";

export default () => {
  const [en1, setBool1] = useState(true);
  const [hn1, setBool2] = useState(false);

  return (
    <AnimationRevealPage>
      {en1 && (
        <div>
          <DialogEn />

          <NewHeader setBool1={setBool1} setBool2={setBool2} />
          <Hero heroDescription={Endata.heroDescription} />
          <Features />
          <Testimonial />
          <FAQ />

          <Footer />
        </div>
      )}

      {hn1 && (
        <div>
          <Dialoghn />

          <NewHeader setBool1={setBool1} setBool2={setBool2} />
          <Hero heroDescription={Hndata.heroDescription} />
          <Features />
          <Testimonial />
          <FAQ />

          <Footer />
        </div>
      )}
    </AnimationRevealPage>
  );
};
