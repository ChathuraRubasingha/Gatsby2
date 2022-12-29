import React from 'react'
import styled, {keyframes} from 'styled-components'
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

const animation = keyframes`
   0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

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
  animation: ${animation} 1s;
  opacity: 0;
  animation: ${animation} 1s 0.1s forwards;
`
const Description = styled.p`
	font-size: 17px;
	line-height: 130%;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
  :nth-child(1) {
    animation: ${animation} 1s 0s forwards;
  }
  :nth-child(2) {
    animation: ${animation} 1s 0.4s forwards;
  }
  :nth-child(3) {
    animation: ${animation} 1s 0.6s forwards;
  }
}
`