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
            and code <span>React</span> apps
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

    @media (max-width: 450px) {
  grid-template-columns: auto;
  padding: 150px 20px 250px;
  gap: 60px;

`
const Title = styled.h1`
  font-weight: 1000;
  font-size: 60px;
  color: ${themes.dark.text1};
  margin-bottom: 20px;
  line-height: 70px;
  animation: ${animation} 1s;
  opacity: 0;
  animation: ${animation} 1s 0.1s forwards;
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
span {
	background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
  @media (max-width: 450px) {
  font-size: 48px;
}
}
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
