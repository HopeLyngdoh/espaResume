import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies
      <SectionText>
        I've worked with a wide range of technologies in web develoment. I am mostly intrested in  Front end Design

      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-end
              <ListParagraph> Experience with<br />
              React.js, Bootstrap
              </ListParagraph>
            </ListTitle>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-end
              <ListParagraph> Experience with<br />
              Node.js and Databases
              </ListParagraph>
            </ListTitle>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>Coding
              <ListParagraph> Experience with<br />
              Basic Python Flask, Django
              </ListParagraph>
            </ListTitle>
          </ListContainer>
        </ListItem>
      </List>
    </SectionTitle>
  </Section>
);

export default Technologies;
