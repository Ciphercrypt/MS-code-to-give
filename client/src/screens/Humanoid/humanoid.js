import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/humanoidUI.js";
import Footer from "components/footers/FiveColumnDark.js";
import Dialog from "dialog";

(function(d, m){
  var kommunicateSettings = 
      {"appId":"14f880ab06efcc795a2423de40cd1ae4d","popupWidget":true,"automaticChatOpenOnNavigation":true};
  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Footer />
    </AnimationRevealPage>
  );
}