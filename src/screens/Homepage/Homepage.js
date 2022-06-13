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
          {/* <NewHeader setBool1={setBool1} setBool2={setBool2} blog={Endata.blog} human={Endata.human} threed= {Endata.threed} buzz={Endata.buzz} nlpbot={Endata.nlpbot} /> */}
          {/* <Hero heroDescription={Endata.heroDescription} heroTitle={Endata.heroTitle} /> */}
          {/* <Features heading={Endata.heading} Descriptionb={Endata.Descriptionb} Headingb={Endata.Headingb}/> */}
          {/* <Testimonial headingt={Endata.headingt} descriptiont={Endata.descriptiont} customername={Endata.customername} customerprofile={Endata.customerprofile} quote={Endata.quote}/> */}
          {/* <FAQ  headingf={Endata.headingf} questions={Endata.questions} answer={Endata.answer}/> */}
        </div>
      )}
      {en1 && (
        <div>
             <NewHeader setBool1={setBool1} setBool2={setBool2} blog={Endata.blog} human={Endata.human} threed= {Endata.threed} buzz={Endata.buzz} nlpbot={Endata.nlpbot} />
             <Hero heroDescription={Endata.heroDescription} heroTitle={Endata.heroTitle} /> 
        </div>
      )}
      
      {en1 && (
        <div>
 <Features heading={Endata.heading} Descriptionb={Endata.Descriptionb} Headingb={Endata.Headingb}/>
         
        </div>
      )}
      {en1 && (
        <div>
<Testimonial headingt={Endata.headingt} descriptiont={Endata.descriptiont} customername={Endata.customername} customerprofile={Endata.customerprofile} quote={Endata.quote}/>
        </div>
      )}
      {en1 && (
        <div>
              <FAQ  headingf={Endata.headingf} questions={Endata.questions} answer={Endata.answer}/>
        </div>
      )}
      {en1 && (
        <div>
             <Footer links={Endata.links} blog={Endata.blog} faq={Endata.faq} human={Endata.human} threed= {Endata.threed} buzz={Endata.buzz} address={Endata.address} contact={Endata.contact} />
        </div>
      )}

      {hn1 && (
        <div>
          <Dialoghn />
           <NewHeader setBool1={setBool1} setBool2={setBool2} blog={Hndata.blog} human={Hndata.human} threed= {Hndata.threed} buzz={Hndata.buzz} nlpbot={Hndata.nlpbot} />
           </div>
      )}
      
      {hn1 && (
        <div>
              <Hero heroDescription={Hndata.heroDescription} heroTitle={Hndata.heroTitle}/>
        </div>
      )}
       {hn1 && (
        <div>
             <Features heading={Hndata.heading} Descriptionb={Hndata.Descriptionb} Headingb={Hndata.Headingb}/>
        </div>
      )}
      {hn1 && (
        <div>
          <Testimonial headingt={Hndata.headingt} descriptiont={Hndata.descriptiont} customername={Hndata.customername} customerprofile={Hndata.customerprofile} quote={Hndata.quote}/>
        </div>
      )}
      {hn1 && (
        <div>
          <FAQ headingf={Hndata.headingf} questions={Hndata.questions} answer={Hndata.answer} />
        </div>
      )}
      {hn1 && (
        <div>
          <Footer links={Hndata.links} blog={Hndata.blog} faq={Hndata.faq} human={Hndata.human} threed={Hndata.threed} buzz={Hndata.buzz} address={Hndata.address} contact={Hndata.contact} />
        </div>
      )} 
    </AnimationRevealPage>
  );
};
