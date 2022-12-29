import React from 'react'
import styled from 'styled-components'
import { themes } from '../components/Styles/ColorStyle'
import PurchaseButton from '../components/Buttons/PurchaseButton'
import MockupAnimation from '../components/animation/MockupAnimation'
import WaveBackground from '../components/backgrounds/WaveBackground'



function HeroSection() {
  return (
    <Wrapper>
    <WaveBackground />
      <ContentWrapper>
      <TextWrapper>
        <Title>
            Design <br />
            and code React apps
        </Title>
        <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
         </Description>
         <PurchaseButton 
            title="Start learning"
            subtitle="120+ hours of video" 
          />
          </TextWrapper>
          <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
    overflow: hidden;
`
const ContentWrapper = styled.div`
    max-width: 1234px;
	padding: 200px 30px;
	margin: 0 auto;
    display: grid;
    grid-template-columns: 360px auto;

`
const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: ${themes.dark.text1};
  margin-bottom: 20px;
  line-height: 70px;
`
const Description = styled.p`
	font-size: 17px;
	line-height: 130%;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`