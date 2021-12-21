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
  <LinkItem href="619-247-0476">(619)247-0476</LinkItem>
  <LinkTitle>Email</LinkTitle>
  <LinkItem href="mailto:ashleylappies@gmail.com">ashleylappies@gmail.com</LinkItem>
</LinkColumn>
  </LinkList>
  <SocialContainer>
    <CompanyContainer>
      <Slogan>"Obstacles are what you see when you take your eyes off the goal...."</Slogan>
    </CompanyContainer>
    <SocialIcons href="https://github.com">
     <AiFillGithub size= "3rem"/>
   </SocialIcons>
   <SocialIcons href="https://linkedin.com">
     <AiFillLinkedin size= "3rem"/>
   </SocialIcons>
  
  </SocialContainer>
</FooterWrapper>
  );
};

export default Footer;
