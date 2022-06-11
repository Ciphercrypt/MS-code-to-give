import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/humanoidUI.js";
import Footer from "components/footers/FiveColumnDark.js";
import Dialog from "dialog";


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Dialog></Dialog>
      <Footer />
    </AnimationRevealPage>
  );
}
