import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='Tel: +918731983282'>+918731983282</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email me</LinkTitle>
        <LinkItem href='mailto: esperanzalyngdoh98@gmail.com'>esperanzalyngdoh98@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always ready to give my best</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/HopeLyngdoh">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/esperanza-lyngdoh-16a837229/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/_kibo20_?utm_medium=copy_link">
        <AiFillInstagram size = "3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
