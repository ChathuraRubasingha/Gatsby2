import React from 'react'
import styled from 'styled-components'
import { themes } from '../components/Styles/ColorStyle'
import PurchaseButton from '../components/Buttons/PurchaseButton'


function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
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
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`
const ContentWrapper = styled.div`
    max-width: 1234px;
	padding: 200px 30px;
	margin: 0 auto;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
	color: ${themes.dark.text1};
`
const Description = styled.p`
	font-size: 17px;
	line-height: 130%;
`