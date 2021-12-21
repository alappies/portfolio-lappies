import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4, text: 'Complete React Projects'},
  { number: 1, text: 'Complete Rails App', },
  { number: 20, text: 'Years of professional experience in food', },
  { number: 2, text: 'Successful Bank Robberies', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index) =>(
     <Box key={index}>
       <BoxNum>{card.number}+</BoxNum>
       <BoxText>{card.text}</BoxText>
       </Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
