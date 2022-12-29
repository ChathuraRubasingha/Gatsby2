import Link from 'gatsby-link'
import React, { useState } from "react"
import styled from 'styled-components'
import MenuToolTip from '../components/tooltips/MenuToolTip'
import { menuData } from '../Data/menuData'


export default function Header() {
  const[isOpen, setIsOpen] = useState(false)
  return (
	<Wrapper >
     <img src="/images/logos/logo.svg" />
     <MenuWrapper>
		{menuData.map(item => (
            <Link to={item.link}>
            <MenuItem>
            <img src={item.icon} alt={item.title} />
            {item.title}
            </MenuItem>
            </Link>
        ))}
        <button onClick={() => setIsOpen(!isOpen)} style={{background:"transparent", border:'none', color: 'rgba(255,255,255,0.8)', fontSize:'15px'}}>Account</button>
    </MenuWrapper>
    <HamburgerWrapper>
	<MenuItem
	  item={{
	    title: "",
	    icon: "/images/icons/hamburger.svg",
	    link: "",
	  }}
	  onClick={event => handleClick(event)}
	/>
</HamburgerWrapper>
    <MenuToolTip isOpen ={isOpen} />
    </Wrapper>
	)
}

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 44px auto;
	justify-content: space-between;
    position: absolute;
    top: 60px;
	align-items: center;
	width: 100%;
	padding: 0 30px;

  @media (max-width: 768px) {
  top: 30px;
}
@media (max-width: 450px) {
	top: 20px;
  padding: 0 20px;
}
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 30px;

  @media (max-width: 768px) {
  grid-template-columns: auto;
  > a {
    display: none;
  }
}
`
const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
transition: 0.5s ease-out;

:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
}
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`