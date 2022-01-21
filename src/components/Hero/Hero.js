import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
      Welcome To<br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      I am Esperanza Lyngdoh from Shillong, Meghalaya currently pursuing my MCA final year in Assam DonBosco University
    </SectionText>
    <Button onclick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;