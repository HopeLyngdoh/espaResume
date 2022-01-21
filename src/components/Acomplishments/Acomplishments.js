import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '2017, BCA' , text: 'Class Representative'},
  { number: 4, text: 'Minor and Major Projects', },
  { number: 4, text: 'Workshops on Web Development', },
  { number: 2, text: 'Workshops on Android and Data Science', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
              <BoxNum>{card.number}</BoxNum>
              <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
