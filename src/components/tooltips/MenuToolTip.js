import React, { useState } from "react"
import styled from "styled-components"
import { tooltipData } from "../../Data/menuData"



function MenuToolTip(props) {
    const{isOpen} = props

  return (
    <Wrapper isOpen={isOpen} >{tooltipData.map((item) => (
        <MenuButton>{item.title}</MenuButton>
    ))}</Wrapper>
  )
}

export default MenuToolTip

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  opacity: ${props => (props.isOpen?1:0.5)};
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  z-index: 1;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transition: 0.3s ease-in-out;
  transform: ${props =>
  props.isOpen
    ? "skewY(0) rotate(0) translateY(0)"
    : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
const MenuButton = styled.button`
background: transparent;
border:none;
font-size:15px;
color: rgba(255,255,255,0.5);
text-align:left;
:hover{
    color: rgba(255,255,255,1);
}

`

