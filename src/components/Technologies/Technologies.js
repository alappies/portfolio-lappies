import React from 'react';
import { DiFirebase, DiPostgresql, DiReact, DiRuby, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
<SectionDivider />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  I am a recent graduate of LEARN academy where I worked with a wide range of technologies from Front-end to back-end and studied to be a full stack web engineer. 
</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem"/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiPostgresql size="3rem"/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node.js and Databases
        Rails
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiRuby size="3rem"/>
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br />
        Tools like Figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;
