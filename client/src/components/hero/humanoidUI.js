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
import { SectionDescription2 } from "components/misc/Typography.js";
import NewHeader from '../hero/Onlyheader.js'

import logoImageSrc from "images/logo-light.svg";
import serverIllustrationImageSrc from "images/man-removebg-preview.png";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-center`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-center leading-tight`;
const Description = tw(SectionDescription2)`mt-4 max-w-2xl text-white lg:text-base mx-auto lg:mx-0`;
const Image = tw.img`w-144 ml-auto`

export default ({
  heading = "HUMANOID BOT",
  description = "There are some question which cannot be answered with generic responses from a bot, so here we present a humanoid bot. A human at your service 24/7 via the bot. Ask away anything!",
  imageSrc = serverIllustrationImageSrc,
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      Treact
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">🔙Back to Home</NavLink>
    </NavLinks>
  ];
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Header  links={navLinks} />
        {/* < NewHeader /> */}
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
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