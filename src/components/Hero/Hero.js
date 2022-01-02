import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Span } from '../Header/HeaderStyles';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <sectionTitle main center>
Welcome to my Portfolio, my name is
<br />
<SectionTitle>Ashley Lappies</SectionTitle>
    </sectionTitle>
    <sectionText>
      and I am a Full Stack Software Developer
    </sectionText>
    <br />
    <br />
    <Button onClick={() => window.location = 'https://www.linkedin.com/in/ashley-lappies-306b0798/'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;