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
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/logo-light.svg";
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
  heroDescription,
  heading = "BUZZ WOMEN",
  heroTitle,
  description = "Buzz Women is the global movement by and for women. We bring transformation within reach. And enable women to ignite their personal and collective power.",
  primaryButtonText = "Start Your 15 Day Free Trial",
  primaryButtonUrl = "#",
  // imageSrc = "https://static.vecteezy.com/system/resources/thumbnails/001/413/580/small/woman-empowerment-awareness-concept-free-vector.jpg",
  imageSrc = "https://static.vecteezy.com/system/resources/thumbnails/001/825/408/small_2x/happy-friendship-day-young-group-women-unity-relationship-special-event-celebration-free-vector.jpg",
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      Treact
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Features</NavLink>
      <NavLink href="#">Pricing</NavLink>
      <NavLink href="#">Login</NavLink>
      <PrimaryLink href="#">Signup</PrimaryLink>
    </NavLinks>
  ];
  return (
    <PrimaryBackgroundContainer style={{backgroundColor: "white"}}>
      <Content2Xl>
        {/* <Header logoLink={logoLink} links={navLinks} /> */}
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading style={{color: "#3C0D99"}}>{heroTitle}</Heading>
                <Description style={{color: "black",fontSize:"20px"}}>{ heroDescription}</Description>
                {/* <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton> */}
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};