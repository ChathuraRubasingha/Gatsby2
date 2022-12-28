import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import icon1 from '../img/credit.svg'
import icon2 from '../img/icon-ring.svg'

export default function PurchaseButton(props) {
    const { title, subtitle } = props
    return (
    <Link to = "/page-2" >
      <Wrapper>
        <IconWrapper>
            <img src={icon1}></img>
            <Ring src={icon2} />
        </IconWrapper>
        <TextWrapper>
        <Title>{title|| "Get Pro Access"}</Title>
        <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>   
      </Wrapper>
    </Link>
    )
  }
  
  const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  justify-content: start;
  align-items: center;
  gap: 20px;
  border: 0px;
  margin-top: 20px;

  *,
& {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

  :hover {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 30px 60px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
  transform: scale(1.2);
}
}
  `
  
  const Title = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: black;
  text-transform: uppercase;`
  
  const Subtitle = styled.p`
  font-weight: normal;
  color: black;
  opacity: 0.7;
  font-size: 13px;
  line-height: 130%;
  `
  const IconWrapper = styled.div`
  position: relative;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;

  ${Wrapper}:hover & {
  filter: hue-rotate(10deg);
}
`
const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`
const Ring = styled.img`
  width:95px;
  position: absolute;
  top: -18px;
  left: -16px;
  ${Wrapper}:hover & {
  transform: rotate(30deg) scale(1.2) translate(1px, 1px);
}
`
