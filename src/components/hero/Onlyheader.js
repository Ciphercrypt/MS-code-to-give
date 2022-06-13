import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "../headers/light.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import NewHeader from "components/hero/Onlyheader";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/buzzlogo.png";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`

export default ({
  setBool1,
 
  setBool2,
  blog,
  nlpbot,
  human,
  threed,
  buzz,
  heading = "High Performant Servers tailored to your needs",
  description = "Our cloud provisions the best servers, with fast SSD, powerful Xeon Processors, whenever you need it. Oh, and we have 99.9% SLA",
  primaryButtonText = "Start Your 15 Day Free Trial",
  primaryButtonUrl = "#",
  imageSrc = serverIllustrationImageSrc,
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      {buzz}
    </LogoLink>
  );

  const onClickBtn1 = () => {
    setBool2(false);
    setBool1(true); //disable button 2
   
    }
  

    const onClickBtn2 = () => {
   
      setBool1(false);
      setBool2(true);
      //disable button 2
      }
  const navLinks = [
    <NavLinks key={1}>
      {/* <NavLink href="/blog">{blog}</NavLink> */}
      <NavLink href="http://192.168.0.239/" target="_blank">{nlpbot}</NavLink>
      <NavLink href="/MS-code-to-give/humanoid">{human}</NavLink>
      <NavLink href="https://creator.us.uneeq.io/try/e3f2ea5b-c8c1-4c20-9845-e545687cf40a" target="_blank">{threed}</NavLink>

      <PrimaryLink onClick={onClickBtn1} >English</PrimaryLink>
      <PrimaryLink  onClick={onClickBtn2} style={{backgroundColor:'green'}}>Hindi</PrimaryLink>
    </NavLinks>
  ];
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Header logoLink={logoLink} links={navLinks} />
        {/* <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container> */}
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
